import dynamic from "next/dynamic";
import {useAppContext} from "@libraries/ThemeWrapper";
import ThemeSwitch from "@components/shared/ThemeSwitch";

import styles from './HomePage.module.scss';


const PageTemplate = dynamic(() => import("@layouts/PageTemplate").then());


export default function HomePageContent() {

    const {theme, methods:{implode}} = useAppContext();

    const wrapperStyles = implode([styles.wrapper, styles[theme]]);


    return (
        <PageTemplate>

            <div className={wrapperStyles}>

                <div className={styles.content}>
                    <main>
                        <div className="flex justify-center items-center h-half flex-col text-2xl">
                           <ThemeSwitch/>
                        </div>
                    </main>
                </div>

            </div>

        </PageTemplate>
    )

}
