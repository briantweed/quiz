import styles from './Github.module.scss';
import {useThemeWrapper} from "@libraries/ThemeWrapper";
import { BsGithub } from "react-icons/bs";
import Light from "@components/shared/Light";


export default function Github() {

    const {theme, methods: {implode}} = useThemeWrapper();
    const wrapperStyles = implode([styles.wrapper, styles[theme]]);

    return (
        <footer className={wrapperStyles}>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/briantweed/quiz/tree/main/app/components/libraries/ThemeWrapper"
            ><BsGithub/>Visit <Light>GitHub</Light></a>
        </footer>
    )
}