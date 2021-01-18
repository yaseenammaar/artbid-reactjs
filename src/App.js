import React, { Component } from "react";
import ReactDOM from "react-dom";
import LoggedOutHeader from "./components/molecules/LoggedOutHeader";
import LoggedInHeader from "./components/molecules/LoggedInHeader";

import Footer from "./components/molecules/Footer";

import Hero from "./components/molecules/Hero";

import {
  ThemeProvider,
  DefaultTheme
} from "react-atomize";

import {
	Route,
	NavLink,
	HashRouter
} from "react-router-dom";


const theme = {
...DefaultTheme,
  grid: {
  	...DefaultTheme.grid,
    colCount: 12,
    gutterWidth: 0
  }
};

class Main extends Component {
	render() {
		return (
    <HashRouter>
			<ThemeProvider theme={theme}>
				<LoggedOutHeader/>
				<LoggedInHeader/>
				<Route exact path="/" component={Hero}/>
				<Route exact path="/stuff" component={Hero}/>
				<Route exact path="/contact" component={Hero}/>
				<Footer/>
			</ThemeProvider>
    </HashRouter>

		);
	}
}

export default Main;