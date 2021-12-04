import React from 'react';
import LogRocket from 'logrocket';

import Head from "next/head";
import Header from "@layouts/Header";
import Navigation from "@layouts/Navigation";
import Motion from "@libraries/Motion";
import MetaTags from "@layouts/MetaTags";


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

                <MetaTags/>

                <Header/>

                <Navigation/>

                <Motion>
                    { this.props.children }
                </Motion>

            </>
        );

    }

}


export default PageTemplate;
