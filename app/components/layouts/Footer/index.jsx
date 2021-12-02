import styles from './Footer.module.scss';
import {useThemeWrapper} from "@libraries/ThemeWrapper";
import { BsGithub } from "react-icons/bs";


export default function Footer() {

    const {theme, methods: {implode}} = useThemeWrapper();
    const wrapperStyles = implode([styles.wrapper, styles[theme]]);

    return (
        <footer className={wrapperStyles}>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/briantweed/quiz/tree/main/app/components/libraries/ThemeWrapper"
            ><BsGithub/>Visit <span className="font-light">GitHub</span></a>
        </footer>
    )
}