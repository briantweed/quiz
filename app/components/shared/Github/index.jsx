import styles from './Github.module.scss';

import Light from "@components/shared/Light";
import { BsGithub } from "react-icons/bs";


export default function Github({theme, methods: {implode}}) {

    const wrapperStyles = implode([styles.wrapper, styles[theme]]);

    return (
        <footer className={wrapperStyles}>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/briantweed/quiz"
            ><BsGithub/>Visit <Light>GitHub</Light></a>
        </footer>
    )
}