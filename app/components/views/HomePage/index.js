import styles from './HomePage.module.scss';

import ThemeSwitch from "@components/shared/ThemeSwitch";
import {useThemeWrapper} from "@wrappers/ThemeWrapper";


export default function HomePageContent() {

    const {theme, methods: {implode}} = useThemeWrapper();
    const wrapperStyles = implode([styles.wrapper, styles[theme]]);

    return (
        <main role="main" className={wrapperStyles}>

            <div className={styles.content}>

                <div className="flex justify-center items-center h-half flex-col">
                    <ThemeSwitch/>
                </div>
            </div>

        </main>
    )

}
