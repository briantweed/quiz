import styles from './ThemeSwitch.module.scss';
import {useAppContext} from "@libraries/ThemeWrapper";
import {THEMES} from "../../../constants";
import {useMemo} from "react";
import { nanoid } from 'nanoid';


export default function ThemeSwitch() {

    const {theme, update, implode} = useAppContext();
    const wrapperStyles = implode([styles.wrapper, styles[theme]]);

    const options = useMemo(() => THEMES, [])

    return (
        <div className={wrapperStyles}>

            <label htmlFor="theme">Select <span className="font-light">Theme:</span></label>

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
