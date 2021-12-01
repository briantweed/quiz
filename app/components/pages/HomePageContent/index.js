import dynamic from "next/dynamic";
import {useEffect, useState} from "react";
import styles from './HomePageContent.module.scss';
import {useAppContext} from "@libraries/ThemeWrapper";

const PageTemplate = dynamic(() => import("@layouts/PageTemplate").then());


export default function HomePageContent() {

    const {theme, implode} = useAppContext();

    const wrapperStyles = implode([styles.wrapper, styles[theme]]);


    return (
        <PageTemplate>

            <div className={wrapperStyles}>

                <div className={styles.content}>
                    Select a theme
                </div>

            </div>

        </PageTemplate>
    )

}
