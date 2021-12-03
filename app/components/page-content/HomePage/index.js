import styles from './HomePage.module.scss';

import PageTemplate from "@layouts/PageTemplate";
import ThemeSwitch from "@components/shared/ThemeSwitch";
import {useThemeWrapper} from "@libraries/ThemeWrapper";


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
