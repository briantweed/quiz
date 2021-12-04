import styles from './HomePage.module.scss';

import ThemeSwitch from "@components/shared/ThemeSwitch";
import {useTheme} from "@wrappers/Theme";


export default function HomePageContent() {

    const {theme, methods: {implode}} = useTheme();
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
