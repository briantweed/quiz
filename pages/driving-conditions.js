import dynamic from "next/dynamic";
import PageTemplate from "@layouts/PageTemplate";
import withTheme from "@wrappers/Theme";

const DrivingConditionsPage = dynamic(() => import("@content/DrivingConditionsPage").then());
const ThemedDrivingConditionsPage = withTheme(DrivingConditionsPage);


export default function Page() {

    return (
        <PageTemplate>
            <ThemedDrivingConditionsPage/>
        </PageTemplate>
    )

}
