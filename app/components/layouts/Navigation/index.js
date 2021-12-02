import Link from 'next/link';
import styles from './Navigation.module.scss';
import {useThemeWrapper} from "@libraries/ThemeWrapper";
import Light from "@components/shared/Light";


export default function Navigation() {

    const {theme, methods:{implode}} = useThemeWrapper();
    const wrapperStyles = implode([styles.wrapper, styles[theme]]);

    return (
        <div className={wrapperStyles}>
            <Link href={'/'}>
                <a>Select <Light>Theme</Light></a>
            </Link>
            <Link href={'/driving-conditions'}>
                <a>Driving <Light>Conditions</Light></a>
            </Link>
        </div>
    )

}
