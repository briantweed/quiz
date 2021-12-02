import {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {THEMES, COOKIE_THEME} from "../../../constants";

const AppContext = createContext({});


export function ThemeWrapper({ children }) {

    useEffect(() => {
        const storedTheme = localStorage.getItem(COOKIE_THEME);
        if (storedTheme) {
            update(storedTheme);
        }
    }, []);

    const BODY_TAG = "body";

    const options = useMemo(() => THEMES, [])

    const {DEFAULT: { value: defaultValue }} = options;

    const [theme, updateTheme] = useState(defaultValue);


    const label = (() => {
        const key = Object.keys(options).filter(key => {
            const option = options[key];
            return option.value === theme;
        })
        return options[key].label;
    })();


    const update = (theme) => {
        updateTheme(theme);
        localStorage.setItem(COOKIE_THEME, theme);
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
        <AppContext.Provider value={{theme, label, methods: {update, implode}}}>
            { children }
        </AppContext.Provider>
    );

}


export function useThemeWrapper() {
    return useContext(AppContext);
}