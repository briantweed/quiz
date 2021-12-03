import React from "react";
import dynamic from "next/dynamic";
import ThemeSwitch from "@components/shared/ThemeSwitch";
import {useThemeWrapper} from "@libraries/ThemeWrapper";
import styles from './HomePage.module.scss';

const PageTemplate = dynamic(() => import("@layouts/PageTemplate").then());


export default function HomePageContent() {

    const {theme, methods:{implode}} = useThemeWrapper();
    const wrapperStyles = implode([styles.wrapper, styles[theme]]);

    return (
        <PageTemplate>

            <div className={wrapperStyles}>

                <div className={styles.content}>
                    <main role="main">
                        <div className="flex justify-center items-center h-half flex-col">
                           <ThemeSwitch/>
                        </div>
                    </main>
                </div>

            </div>

        </PageTemplate>
    )

}
