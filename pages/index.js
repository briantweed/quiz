import dynamic from "next/dynamic";
import PageTemplate from "@layouts/PageTemplate";
import Spinner from "@components/shared/Spinner";
import withTheme from "@wrappers/Theme";
import {useSelector} from "react-redux";

const HomePage = dynamic(() => import("@content/HomePage").then());
const ThemedHomePage = withTheme(HomePage);


export default function Page() {

    const isLoading = useSelector((state) => state.loading.status);

    return (
        <PageTemplate>
            { isLoading ? <Spinner/> : <ThemedHomePage/>}
        </PageTemplate>
    )

}
