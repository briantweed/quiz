import dynamic from "next/dynamic";
import PageTemplate from "@layouts/PageTemplate";
import withTheme from "@wrappers/Theme";

const HomePage = dynamic(() => import("@content/HomePage").then());
const ThemedHomePage = withTheme(HomePage);


export default function Page() {
    return (
        <PageTemplate>
            <ThemedHomePage/>
        </PageTemplate>
    )
}
