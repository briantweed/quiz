import {createContext, useContext, useEffect, useState} from 'react';

const ThemeContext = createContext({});
const BODY_TAG = "body";


export function ThemeWrapper({ children, themes, storageKey }) {

    useEffect(() => {
        const storedTheme = localStorage.getItem(storageKey);
        if (storedTheme) {
            update(storedTheme);
        }
    });

    
    const {DEFAULT: { value: defaultValue }} = themes;
    const [theme, updateTheme] = useState(defaultValue);


    const label = (() => {
        const key = Object.keys(themes).filter(key => {
            const option = themes[key];
            return option.value === theme;
        })
        return themes[key].label;
    })();


    const update = (theme) => {
        updateTheme(theme);
        localStorage.setItem(storageKey, theme);
        const element = document.querySelector(BODY_TAG);
        if (element) {
            element.classList.remove(...document.querySelector(BODY_TAG).classList);
            document.querySelector("body").classList.add(theme);
        }
    }


    const implode = (array, delimiter = " ") => {
        return array.join(delimiter).trim().replace(/\s\s+/g, ' ');
    }


    return (
        <ThemeContext.Provider value={{theme, label, methods: {update, implode}}}>
            { children }
        </ThemeContext.Provider>
    );

}


export function useThemeWrapper() {
    return useContext(ThemeContext);
}