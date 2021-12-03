import dynamic from "next/dynamic";
import PageTemplate from "@layouts/PageTemplate";

const HomePage = dynamic(() => import("@content/HomePage").then());


export default function Page() {
    return (
        <PageTemplate>
            <HomePage/>
        </PageTemplate>
    )
}
