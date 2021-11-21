import React from "react";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import modals from "./index"

function AllModalRoutes(props) {
    let { path, url } = useRouteMatch();
    console.log("url is", url)
    return (
        <Switch>
            {
                modals.map(({component: Component, name}, i) => (
                    <Route path={`${url}/${name}`} render={(props) => (<Component {...props} parentUrl={url}/>)} />
                ))
            }

        </Switch>
    )
}

export default AllModalRoutes
