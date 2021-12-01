import dynamic from "next/dynamic";
import {Provider} from "react-redux";
import store from "@store";
import {AppWrapper} from "@libraries/AppContext";
import {AnimatePresence} from "framer-motion";
import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css';


const Toast = dynamic(() => import("@libraries/Toast").then());


function MyApp({Component, pageProps, router}) {

    return (
        <AnimatePresence exitBeforeEnter>
            <Provider store={store}>
                <AppWrapper>
                    <Component key={router.route} {...pageProps}/>
                </AppWrapper>
                <Toast/>
            </Provider>
        </AnimatePresence>
    )

}

export default MyApp;
