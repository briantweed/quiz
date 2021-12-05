import {useSelector} from "react-redux";
import ErrorBoundary from "@layouts/ErrorBoundary";
import MetaTags from "@layouts/MetaTags";
import Konami from "@components/shared/Konami/kode";
import Header from "@layouts/Header";
import Navigation from "@layouts/Navigation";
import Motion from "@wrappers/Motion";
import withTheme from "@wrappers/Theme";
import Spinner from "@components/shared/Spinner";


export default function PageTemplate({children}) {

    const isLoading = useSelector((state) => state.loading.status);

    const ThemedHeader = withTheme(Header);
    const ThemedNavigation = withTheme(Navigation);

    return (
        <ErrorBoundary>
            <Konami/>
            <MetaTags/>
            <ThemedHeader/>
            <ThemedNavigation/>
            { isLoading ? <Spinner/> : <Motion>{children}</Motion> }
        </ErrorBoundary>
    );

}
