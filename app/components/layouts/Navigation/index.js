import { useRouter } from 'next/router';
import Link from 'next/link';
import Light from "@components/shared/Light";
import {useThemeWrapper} from "@libraries/ThemeWrapper";
import styles from './Navigation.module.scss';


export default function Navigation() {

    const {theme, methods:{implode}} = useThemeWrapper();
    const wrapperStyles = implode([styles.wrapper, styles[theme]]);

    const router = useRouter();


    return (
        <nav className={wrapperStyles}>
            <ol>
                <li>
                    <Link href={'/'}>
                        <a className={router.asPath === '/' ? styles.active : ''}>Select <Light>Theme</Light></a>
                    </Link>
                </li>
                <li>
                    <Link href={'/driving-conditions'}>
                        <a className={router.asPath === '/driving-conditions' ? styles.active : ''}>Driving <Light>Conditions</Light></a>
                    </Link>
                </li>
            </ol>
        </nav>
    )

}
