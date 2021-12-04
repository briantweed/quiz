import {useState} from "react";


export default function ErrorMessage() {

    const [isLoading, setIsLoading] = useState(false);

    const reload = () => {
        setIsLoading(true)
        setTimeout(()=> { window.location.reload(false) }, 500);
    }


    return (
        <div>
            <h1>unable to display information</h1>
            {isLoading ? (
                <span>....</span>
            ) : (
                <button onClick={reload}>Click to retry</button>
            )}
        </div>
    )

}
