import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {disableLoading, enableLoading} from "@store/loadingSlice";
import Light from "@components/shared/Light";
import {useTheme} from "@wrappers/Theme";
import {useRouter} from "next/router";


export default function Toggle() {

    const dispatch = useDispatch();

    const router = useRouter();

    const themeItems = useTheme();

    const {theme, defaultTheme, methods: {update}} = themeItems;

    const isLoading = useSelector((state) => state.loading.status);

    const [toggle, setToggle] = useState(isLoading);

    const toggleLoading = () => {
        router.push('/');
        if (theme === '---disabled---') {
            if (!toggle) {
                setToggle(false);
                new Promise((resolve) => {
                    console.log('start');
                    dispatch(enableLoading());
                    resolve(true);
                }).then(() => {
                    new Promise((resolve) => {
                        setTimeout(() => {
                            update(defaultTheme);
                            console.log('switch theme');
                            resolve(true);
                        }, 45000);
                    }).then(() => {
                            setTimeout(() => {
                                dispatch(disableLoading());
                                console.log('home');
                                console.log('end');
                            }, 20000);
                        }
                    )
                })
            }
        } else {
            console.log('change theme');
        }
    }

    return (
        <button onClick={toggleLoading}>Theme <Light>Test</Light></button>
    )

}