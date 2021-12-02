import styles from './Footer.module.scss';
import {useThemeWrapper} from "@libraries/ThemeWrapper";

export default function Footer() {

    const {theme, methods: {implode}} = useThemeWrapper();
    const wrapperStyles = implode([styles.wrapper, styles[theme]]);

    return (
        <footer className={wrapperStyles}>
            <a href="https://github.com/briantweed/quiz">https://github.com/briantweed/quiz</a>
        </footer>
    )
}