import dynamic from "next/dynamic";

const HomePageContent = dynamic(() => import("@pages/HomePageContent").then());


export default function Page() {

    return (
        <HomePageContent/>
    )

}
