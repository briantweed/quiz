import styles from './DrivingConditionsPage.module.scss';

import {useMemo} from "react";
import {nanoid} from "nanoid";
import {useThemeWrapper} from "@libraries/ThemeWrapper";
import {CONDITIONS} from "@constants";
import {container, item} from "@variants/tiles";
import Light from "@components/shared/Light";
import { motion } from "framer-motion"


export default function HomePageContent() {

    const {theme, methods: {update, implode}} = useThemeWrapper();
    const wrapperStyles = implode([styles.wrapper, styles[theme]]);

    const options = useMemo(() => CONDITIONS, []);


    return (
        <main role="main" className={wrapperStyles}>

            <div className="container flex justify-center mt-16">
                <div className="w-3/4">

                    <form>
                        <h1 className="text-2xl"><Light>Choose your favorite</Light> driving condition:</h1>

                        <motion.ul
                            variants={container}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="flex justify-evenly items-center mt-8"
                        >
                            {Object.keys(options).map(key => {
                                const option = options[key];
                                return (
                                    <motion.li
                                        key={nanoid()}
                                        variants={item}
                                        transition={{ type: 'spring' }}
                                        onClick={() => update(option.value)}
                                        className={styles.tile + " " + (option.value === theme ? styles.active : '') }
                                    >{ option.label }</motion.li>
                                )
                            })}
                        </motion.ul>

                    </form>

                </div>
            </div>

        </main>
    )

}
