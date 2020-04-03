import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { selector as authSelector, creator as authCreator } from "../store/auth";
import { selector as sysSelector } from "../store/system";
import { Navbar } from "../component/Navbar";
import { Auth } from "./Auth";
import { Park } from "./Park";
import { Take } from "./Take";
import { Info } from "./Info";
import "./style.less";

const AppView = (props) => {
	const { lang, status } = props;

	return (
		<BrowserRouter>
			{!status ? (
				<Route to="/auth" component={Auth} />
			) : (
				<>
					<Navbar lang={lang} />
					<Switch>
						<Route path="/" component={Park} exact />
						<Route path="/park" component={Park} />
						<Route path="/take" component={Take} />
						<Route path="/info" component={Info} />
						<Route path="/recharge" component={Info} />
						<Route path="/bill" component={Info} />
						<Route path="/feedback" component={Info} />
						<Route path="/about" component={Info} />
					</Switch>
				</>
			)}
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
