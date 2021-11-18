import React from "react";
import ReactDOM from "react-dom";
import Main from "./App";
import reduxStore from "./redux/reduxStore";
import {Provider as ReduxProvider} from "react-redux";
 
ReactDOM.render(
    <ReduxProvider store={reduxStore}>
        <Main/>
    </ReduxProvider>,
  document.getElementById("root")
);