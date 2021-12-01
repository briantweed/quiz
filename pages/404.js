import dynamic from "next/dynamic";

const PageTemplate = dynamic(() => import("@layouts/PageTemplate").then());


export default function Page() {

    return (
        <PageTemplate>

            <div className="container">
                <p>Page not Found</p>
            </div>

        </PageTemplate>
    )

}
