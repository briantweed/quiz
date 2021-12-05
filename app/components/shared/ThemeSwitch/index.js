import styles from "./ThemeSwitch.module.scss";

import {useMemo} from "react";
import {nanoid} from "nanoid";
import {THEMES} from "@constants";
import Light from "@components/shared/Light";


export default function ThemeSwitch({theme, methods:{update, implode}}) {

    const wrapperStyles = implode([styles.wrapper, styles[theme]]);
    const options = useMemo(() => THEMES, []);

    return (
        <div className={wrapperStyles}>

            <label htmlFor="themeSwitch">Select <Light>Theme:</Light></label>

            <select autoFocus value={theme} name="theme" id="themeSwitch" onChange={(event) => update(event.target.value)}>
                {options.map(option => {
                    return (
                        <option key={nanoid()} value={option.value}>{ option.label }</option>
                    )
                })}
            </select>

        </div>
    )

}
