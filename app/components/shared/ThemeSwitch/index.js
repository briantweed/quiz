import {useMemo} from "react";
import {nanoid} from 'nanoid';
import {useThemeWrapper} from "@libraries/ThemeWrapper";

import {THEMES} from "@constants";
import styles from './ThemeSwitch.module.scss';
import Light from "@components/shared/Light";


export default function ThemeSwitch() {

    const {theme, methods:{update, implode}} = useThemeWrapper();
    const wrapperStyles = implode([styles.wrapper, styles[theme]]);

    const options = useMemo(() => THEMES, [])

    return (
        <div className={wrapperStyles}>

            <label htmlFor="theme">Select <Light>Theme:</Light></label>

            <select value={theme} name="theme" id="theme" onChange={(event) => update(event.target.value)}>
                {Object.keys(options).map(key => {
                    const option = options[key];
                    return (
                        <option key={nanoid()} value={option.value}>{ option.label }</option>
                    )
                })}
            </select>

        </div>
    )

}
