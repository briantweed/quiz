import React from 'react';
import LogRocket from 'logrocket';

import Header from "@layouts/Header";
import Navigation from "@layouts/Navigation";
import Motion from "@wrappers/Motion";
import MetaTags from "@layouts/MetaTags";
import withTheme from "@wrappers/Theme";


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

        const ThemedHeader = withTheme(Header);
        const ThemedNavigation = withTheme(Navigation);

        return (
            <>

                <MetaTags/>

                <ThemedHeader/>

                <ThemedNavigation/>

                <Motion>{ this.props.children }</Motion>

            </>
        );

    }

}


export default PageTemplate;
