import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { Info } from "./Info";
import { Park } from "./Park";
import { Take } from "./Take";
import { Auth } from "./Auth";
import { nav } from "../config/i18n";
import { selector as authSelector, creator as authCreator } from "../store/auth";
import { selector as sysSelector, creator as sysCreator } from "../store/system";

const Navbar = (props) => {
	const { lang } = props;
	const [value, setValue] = React.useState(1);

	return (
		<>
			{value === 1 ? <Park /> : value === 2 ? <Take /> : <Info />}
			<div className="mdui-bottom-nav navbar">
				<a className="mdui-bottom-nav-active" onClick={() => setValue(1)}>
					<i className="mdui-icon material-icons">local_parking</i>
					<label>{nav.park[lang]}</label>
				</a>
				<a onClick={() => setValue(2)}>
					<i className="mdui-icon material-icons">directions_car</i>
					<label>{nav.take[lang]}</label>
				</a>
				<a onClick={() => setValue(3)}>
					<i className="mdui-icon material-icons">perm_identity</i>
					<label>{nav.info[lang]}</label>
				</a>
			</div>
		</>
	);
};

const AppView = (props) => {
	const { lang, status } = props;

	return (
		<BrowserRouter>
			{/* for debug */}
			{status ? <Redirect to="/auth" /> : <Redirect to="/" />}
			<Route path="/" exact render={() => <Navbar lang={lang} />} />
			<Route path="/auth" render={() => <Auth />} />
		</BrowserRouter>
	);
};

const mapStateToProps = (state, props) => {
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
