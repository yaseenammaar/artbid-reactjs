import React from "react";
import AllModalRoutes from "../molecules/modals/AllModalRoutes";
import {Route, useRouteMatch} from "react-router-dom";

function RouteWithModals({component: Component, ...rest}) {

    return (
        <Route {...rest} render={props => (
            <div>
                <Component {...props} />
                <AllModalRoutes {...props} />
            </div>
        )}/>


    )
}

export default RouteWithModals