import {createContext, useContext, useEffect, useState} from 'react';
import {THEMES, COOKIE_THEME} from "../../../constants";

const AppContext = createContext({});


export function ThemeWrapper({ children }) {

    const [theme, updateTheme] = useState(THEMES.DEFAULT.value);

    useEffect(() => {
        const storedTheme = localStorage.getItem(COOKIE_THEME);
        if (storedTheme) {
            update(storedTheme);
        }
    }, []);


    const update = (theme) => {
        updateTheme(theme);
        localStorage.setItem(COOKIE_THEME, theme);
    }


    const implode = (array, delimiter = " ") => {
        return array.join(delimiter).trim().replace(/\s\s+/g, ' ');
    }


    return (
        <AppContext.Provider value={{theme, update, implode}}>
            { children }
        </AppContext.Provider>
    );

}


export function useAppContext() {
    return useContext(AppContext);
}