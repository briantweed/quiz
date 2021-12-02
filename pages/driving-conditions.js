import dynamic from "next/dynamic";

const DrivingConditionsPage = dynamic(() => import("@content/DrivingConditionsPage").then());


export default function Page() {

    return (
        <DrivingConditionsPage/>
    )

}
