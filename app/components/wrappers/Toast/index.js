import {ToastContainer} from "react-toastify";

const contextClass = {
    success: "bg-blue",
    error: "bg-red",
    info: "bg-black",
    warning: "bg-red-lighter"
};


export default function Toast() {

    const bodyClassStyles = "text-sm font-white font-med flex w-full p-3";
    const toastClassStyles = " shadow relative flex p-1 mb-3 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer";

    return (
        <ToastContainer
            limit={8}
            newestOnTop
            hideProgressBar
            autoClose={3000}
            position="bottom-right"
            toastClassName={({type}) => contextClass[type || "default"] + toastClassStyles}
            bodyClassName={() => bodyClassStyles}
        />
    )

}
