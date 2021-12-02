import React from "react";
import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("@content/HomePage").then());


export default function Page() {

    return <HomePage/>

}
