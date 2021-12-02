import dynamic from "next/dynamic";
import {useThemeWrapper} from "@libraries/ThemeWrapper";
import styles from './DrivingConditionsPage.module.scss';

const PageTemplate = dynamic(() => import("@layouts/PageTemplate").then());


export default function HomePageContent() {

    const {theme, methods:{implode}} = useThemeWrapper();
    const wrapperStyles = implode([styles.wrapper, styles[theme]]);

    return (
        <PageTemplate>

            <div className={wrapperStyles}>

                <main>

                    <h1 className={styles.small}>Choose your favorite driving conditions</h1>

                </main>

            </div>

        </PageTemplate>
    )

}
