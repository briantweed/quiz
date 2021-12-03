import dynamic from "next/dynamic";
import PageTemplate from "@layouts/PageTemplate";

const DrivingConditionsPage = dynamic(() => import("@content/DrivingConditionsPage").then());


export default function Page() {
    return (
        <PageTemplate>
            <DrivingConditionsPage/>
        </PageTemplate>
    )
}
