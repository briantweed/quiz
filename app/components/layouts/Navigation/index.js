import styles from './Navigation.module.scss';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Light from "@components/shared/Light";


export default function Navigation({theme, methods:{implode}}) {

    const wrapperStyles = implode([styles.wrapper, styles[theme]]);
    const router = useRouter();

    return (
        <nav role="navigation" className={wrapperStyles}>
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
