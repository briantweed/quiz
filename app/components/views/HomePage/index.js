import styles from './HomePage.module.scss';

import ThemeSwitch from "@components/shared/ThemeSwitch";
import withTheme from "@wrappers/Theme";

const ThemedSwitch = withTheme(ThemeSwitch);

export default function HomePageContent({theme, methods: {implode}}) {

    const wrapperStyles = implode([styles.wrapper, styles[theme]]);

    return (
        <main role="main" className={wrapperStyles}>

            <div className={styles.content}>

                <div className="flex justify-center items-center h-half flex-col">
                    <ThemedSwitch/>
                </div>
            </div>

        </main>
    )

}
