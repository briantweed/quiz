import {createContext, useContext, useState} from 'react';
import {THEMES} from "../../../constants";

const AppContext = createContext({});


export function AppWrapper({ children }) {

    const [theme, updateTheme] = useState(THEMES.DEFAULT.value);

    const update = (theme) => {
        updateTheme(theme);
        localStorage.setItem('theme', theme);
    }

    const implode = (array, delimiter = " ") => {
        return array.join(delimiter).trim().replace(/\s\s+/g, ' ');
    }

    return (
        <AppContext.Provider value={{theme, update, implode}}>
            {children}
        </AppContext.Provider>
    );

}


export function useAppContext() {
    return useContext(AppContext);
}