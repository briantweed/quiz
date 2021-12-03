import styles from './DrivingConditionsPage.module.scss';

import {useMemo} from "react";
import {nanoid} from "nanoid";
import PageTemplate from "@layouts/PageTemplate";
import Light from "@components/shared/Light";
import {useThemeWrapper} from "@libraries/ThemeWrapper";
import {CONDITIONS} from "@constants";



export default function HomePageContent() {

    const {theme, methods:{update, implode}} = useThemeWrapper();
    const wrapperStyles = implode([styles.wrapper, styles[theme]]);

    const options = useMemo(() => CONDITIONS, []);


    return (
        <PageTemplate>

            <div className={wrapperStyles}>

                <main role="main">

                    <div className="container flex justify-center mt-16">
                        <div className="w-3/4">

                            <form>

                                <h1 className="text-2xl"><Light>Choose your favorite</Light> driving condition:</h1>

                                <ul className="flex justify-evenly items-center mt-8">
                                    {Object.keys(options).map(key => {
                                        const option = options[key];
                                        return (
                                            <li key={nanoid()}
                                                 onClick={() => update(option.value)}
                                                 className={implode([styles.tile, option.value === theme ? styles.active : ''])}
                                            >{ option.label }</li>
                                        )
                                    })}
                                </ul>

                            </form>

                        </div>
                    </div>

                </main>

            </div>

        </PageTemplate>
    )

}
