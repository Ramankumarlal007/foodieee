import { useRouteError } from "react-router-dom"



export const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Error</h1>
            <h2>404 ({err.status} : {err.statusText})</h2>
            <h3>
             {err.data} : {err.statusText}
            </h3>
        </div>
    )
}