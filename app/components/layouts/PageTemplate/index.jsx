import React from 'react';
import LogRocket from 'logrocket';
import {motion} from "framer-motion";
import Head from "next/head";
import Footer from "@layouts/Footer";
import Header from "@layouts/Header";

import {variants} from "./variants";


class PageTemplate extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        if (typeof window !== 'undefined') {
            LogRocket.init(process.env.logRocketKey);
            LogRocket.log('YoOoOoO')
        }
    }


    render() {

        return (
            <>

                <Head>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport"
                          content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>

                    <title>Quiz</title>

                    <meta name="subject" content="Quiz"/>
                    <meta name="description" content="Quiz"/>
                    <meta name="copyright" content="Quiz"/>
                    <meta name="url" content=""/>
                    <meta name="identifier-URL" content=""/>
                    <meta name="language" content="en"/>
                    <meta name="Classification" content="Business"/>
                    <meta name="reply-to" content="no-reply@fake-email-address.com"/>
                    <meta name="owner" content=""/>
                    <meta name="rating" content="General"/>
                    <meta name="MobileOptimized" content="350"/>
                    <meta name="revised" content="Wednesday, December 1st, 2021, 09:00am"/>
                    <meta name="revisit-after" content="7 days"/>

                    <link rel="apple-touch-icon" sizes="180x180" href={"/apple-touch-icon.png"}/>
                    <link rel="icon" type="image/png" sizes="32x32" href={"/favicon-32x32.png"}/>
                    <link rel="icon" type="image/png" sizes="16x16" href={"/favicon-16x16.png"}/>
                    <link rel="mask-icon" href={"/safari-pinned-tab.svg"} color="#ffffff"/>

                    <meta name="msapplication-TileColor" content="#ffffff"/>
                    <meta name="theme-color" content="#ffffff"/>
                    <meta name="apple-mobile-web-app-title" content="Quiz"/>
                    <meta name="application-name" content="Quiz"/>

                    <meta name="robots" content="index,follow"/>
                    <meta name="googlebot" content="index,follow"/>

                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap"
                          rel="stylesheet"/>
                </Head>

                <Header/>
                <motion.div
                    layout
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={variants}
                >{ this.props.children }</motion.div>
                <Footer/>

            </>
        );

    }

}


export default PageTemplate;
