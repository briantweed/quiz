import dynamic from "next/dynamic";
import {useEffect, useState} from "react";
import styles from './HomePageContent.module.scss';
import {useAppContext} from "@libraries/AppContext";

const PageTemplate = dynamic(() => import("@layouts/PageTemplate").then());


export default function HomePageContent() {

    const {theme, update, implode} = useAppContext();
    const [display, setDisplay] = useState(false);
    const wrapperStyles = implode([styles.wrapper, styles[theme]]);


    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            let hello = async () => update(storedTheme);
            hello().then(() => setDisplay(true));
        }
    }, []);


    return display ? (
        <PageTemplate>

            <div className={wrapperStyles}>

                <div className={styles.content}>
                    i
                </div>

            </div>

        </PageTemplate>
    ) : (
        <div>loading ...</div>
    )

}
