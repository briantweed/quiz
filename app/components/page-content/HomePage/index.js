import dynamic from "next/dynamic";
import Link from "next/link";
import styles from './HomePage.module.scss';
import {useAppContext} from "@libraries/ThemeWrapper";

const PageTemplate = dynamic(() => import("@layouts/PageTemplate").then());


export default function HomePageContent() {

    const {theme, implode} = useAppContext();

    const wrapperStyles = implode([styles.wrapper, styles[theme]]);


    return (
        <PageTemplate>

            <div className={wrapperStyles}>

                <div className={styles.content}>
                    <Link href={"/"}>
                        <a>Home</a>
                    </Link>
                    <Link href={"/test-1"}>
                        <a>Test 1</a>
                    </Link>
                    <Link href={"/test-2"}>
                        <a>Test 2</a>
                    </Link>
                </div>

            </div>

        </PageTemplate>
    )

}
