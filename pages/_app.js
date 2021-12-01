import dynamic from "next/dynamic";
import {Provider} from "react-redux";
import store from "@store";
import {ThemeWrapper} from "@libraries/ThemeWrapper";
import {AnimatePresence} from "framer-motion";
import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css';
import '../global-styles.css';


const Toast = dynamic(() => import("@libraries/Toast").then());


function MyApp({Component, pageProps, router}) {

    return (
        <AnimatePresence exitBeforeEnter>
            <Provider store={store}>
                <ThemeWrapper>
                    <Component key={router.route} {...pageProps}/>
                </ThemeWrapper>
                <Toast/>
            </Provider>
        </AnimatePresence>
    )

}

export default MyApp;
