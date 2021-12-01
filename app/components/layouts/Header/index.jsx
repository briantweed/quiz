import styles from './Header.module.scss';
import {useAppContext} from "@libraries/AppContext";
import ThemeSwitch from "@components/shared/ThemeSwitch";


export default function Header() {

    const {theme, implode} = useAppContext();
    const wrapperStyles = implode([styles.wrapper, styles[theme]]);

    return (
        <div className={wrapperStyles}>

            <div className={styles.content}>

                <h1 className={styles.title}>Theme Test</h1>
                <ThemeSwitch/>

            </div>

        </div>
    )
}