import dynamic from "next/dynamic";
import {Provider} from "react-redux";
import store from "@store/store";
import {Theme} from "@wrappers/Theme";
import {AnimatePresence} from "framer-motion";
import {THEMES, COOKIE_THEME} from "@constants";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";
import "../themes.css";


const Toast = dynamic(() => import("@wrappers/Toast").then());


function MyApp({Component, pageProps, router}) {

    return (
        <Provider store={store}>
            <Theme themes={THEMES} storageKey={COOKIE_THEME}>
                <AnimatePresence exitBeforeEnter>
                    <Component key={router.route} {...pageProps}/>
                </AnimatePresence>
            </Theme>
            <Toast/>
        </Provider>
    )

}

export default MyApp;
