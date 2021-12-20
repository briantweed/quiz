import {createContext, useContext, useEffect, useState} from "react";
const ThemeContext = createContext({});
import {toast} from "react-toastify";
const BODY_TAG = "body";
const DEFAULT_THEME = "default";

export function Theme({ children, themes, storageKey }) {

    const [theme, updateTheme] = useState(DEFAULT_THEME);

    useEffect(() => {
        const storedTheme = localStorage.getItem(storageKey);
        if (storedTheme) {
            update(storedTheme, false);
        }
    });

    const label = (() => {
        const selectedTheme = themes.find(option => {
            return option.value === theme;
        })
        return selectedTheme.label;
    })();

    const update = (theme, notify = true) => {

        const checkTheme = (theme) => {
            return !!(themes.find(option => {
                return option.value === theme;
            }))
        }

        if (checkTheme(theme)) {
            updateTheme(theme);
            localStorage.setItem(storageKey, theme);

            const option = themes.find(option => option.value === theme)

            if (notify) {
                toast['success'](option.label + " theme selected", { theme: "colored" });
            }

            const element = document.querySelector(BODY_TAG);
            if (element) {
                element.classList.remove(...document.querySelector(BODY_TAG).classList);
                document.querySelector(BODY_TAG).classList.add(theme);
            }
        }
    }

    const implode = (array, delimiter = " ") => {
        return array.join(delimiter).trim().replace(/\s\s+/g, " ");
    }

    return (
        <ThemeContext.Provider value={{theme, label, defaultTheme: DEFAULT_THEME, methods: {update, implode}}}>
            { children }
        </ThemeContext.Provider>
    );

}

export function useTheme() {
    return useContext(ThemeContext);
}

export default function withTheme(Component) {
    return function WithThemeValues({ ...props }) {
        const themeItems = useTheme();
        return (
            <Component {...props} {...themeItems}/>
        )
    };
}