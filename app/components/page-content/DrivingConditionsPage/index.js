import styles from './DrivingConditionsPage.module.scss';

import {useMemo} from "react";
import dynamic from "next/dynamic";
import {nanoid} from "nanoid";
import {useThemeWrapper} from "@libraries/ThemeWrapper";
import {CONDITIONS} from "@constants";
import Light from "@components/shared/Light";

const PageTemplate = dynamic(() => import("@layouts/PageTemplate").then());


export default function HomePageContent() {

    const {theme, methods:{update, implode}} = useThemeWrapper();
    const wrapperStyles = implode([styles.wrapper, styles[theme]]);

    const options = useMemo(() => CONDITIONS, []);

    return (
        <PageTemplate>

            <div className={wrapperStyles}>

                <main>

                    <div className="container flex justify-center mt-16">
                        <div className="w-3/4">

                            <h1 className="text-2xl"><Light>Choose your favorite</Light> driving condition:</h1>

                            <div className="flex justify-evenly items-center mt-8">
                                {Object.keys(options).map(key => {
                                    const option = options[key];
                                    return (
                                        <div key={nanoid()}
                                             onClick={() => update(option.value)}
                                             className="border cursor-pointer p-8 rounded flex-grow m-4 ml-0 text-center border-grey-dark"
                                        >{ option.label }</div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </main>

            </div>

        </PageTemplate>
    )

}
