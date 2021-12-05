import styles from "./HomePage.module.scss";

import ThemeSwitch from "@components/shared/ThemeSwitch";
import withTheme from "@wrappers/Theme";


export default function HomePage({theme, methods: {implode}}) {

    const ThemedSwitch = withTheme(ThemeSwitch);
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
