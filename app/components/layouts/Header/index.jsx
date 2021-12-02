import {useThemeWrapper} from "@libraries/ThemeWrapper";

import styles from './Header.module.scss';


export default function Header() {

    const {theme, label, methods: {implode}} = useThemeWrapper();
    const wrapperStyles = implode([styles.wrapper, styles[theme]]);

    return (
        <div className={wrapperStyles}>

            <div className={styles.content}>

                <h1 className={styles.title}>Theme <span className="font-light">Test</span></h1>
                <h2 className={styles.theme}>{ label } <span className="font-light">Theme</span></h2>

            </div>

        </div>
    )
}