import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Login } from "../component/Login/Login";
import { Singup } from "../component/Login/Signup";
import { auth, tip } from "../config/i18n";
import { selector as authSelector, creator as authCreator } from "../store/auth";
import { selector as sysSelector, creator as sysCreator } from "../store/system";
const logo = require("../../static/meta/logo.png");

const AuthView = (props) => {
	const { lang, status } = props;
	const [isSign, setIsSign] = useState(true);

	if (status) {
		return <Redirect to="/" />;
	}

	return (
		<div className="authbox">
			<img className="logo" src={logo}></img>
			{isSign ? (
				<>
					<Login {...props} />
					<div className="tipbox">
						<a className="base">{auth.forget_passwd[lang]}</a>
						<a className="base" onClick={() => setIsSign(!isSign)}>
							{auth.no_account[lang]}
						</a>
					</div>
				</>
			) : (
				<>
					<Singup {...props} />
					<div className="tipbox">
						<a className="base" onClick={() => setIsSign(!isSign)}>
							{tip.cancel[lang]}
						</a>
					</div>
				</>
			)}
		</div>
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

const Auth = connect(mapStateToProps, mapDispatchToProps)(AuthView);

export { Auth };
