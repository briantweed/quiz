import dynamic from "next/dynamic";
import PageTemplate from "@layouts/PageTemplate";
import withTheme from "@wrappers/Theme";
import Spinner from "@components/shared/Spinner";
import {useSelector} from "react-redux";

const DrivingConditionsPage = dynamic(() => import("@content/DrivingConditionsPage").then());
const ThemedDrivingConditionsPage = withTheme(DrivingConditionsPage);


export default function Page() {

    const isLoading = useSelector((state) => state.loading.status);

    return (
        <PageTemplate>
            { isLoading ? <Spinner/> : <ThemedDrivingConditionsPage/> }
        </PageTemplate>
    )

}
