import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { selector as authSelector, creator as authCreator } from "../store/auth";
import { selector as sysSelector } from "../store/system";
import { Navbar } from "../component/Navbar";
import { Auth } from "./Auth/index";
import "./style.less";

const AppView = (props) => {
	const { lang, status } = props;

	return (
		<BrowserRouter>
			{!status ? <Redirect to="/auth" /> : <Redirect to="/" />}
			<Route path="/" exact render={() => <Navbar lang={lang} />} />
			<Route path="/auth" render={() => <Auth />} />
		</BrowserRouter>
	);
};

const mapStateToProps = (state) => {
	return {
		lang: sysSelector.getLang(state),
		status: authSelector.getSatus(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		...bindActionCreators(authCreator, dispatch),
	};
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppView);

export { App };
