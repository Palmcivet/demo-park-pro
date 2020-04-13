import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { selector as authSelector, creator as authCreator } from "../../store/auth";
import { selector as sysSelector, creator as sysCreator } from "../../store/system";
import { selector as appSelector, creator as appCreator } from "../../store/app";
import { Lang } from "../../component/Lang";
import { Body } from "./Body";
import { Bill } from "./Bill";
import { About } from "./About";
import { Feedback } from "./Feedback";
import { Recharge } from "./Recharge";
import { tip } from "../../util/i18n";
import "./style.less";

const InfoView = (props) => {
	const { lang, name, email, setLang, match } = props;
	let CompSub = null;

	switch (match.path) {
		case "/about":
			CompSub = About;
			break;
		case "/bill":
			CompSub = Bill;
			break;
		case "/feedback":
			CompSub = Feedback;
			break;
		case "/recharge":
			CompSub = Recharge;
			break;
	}

	return (
		<div className="info">
			<div className="head">
				<label>{name}</label>
				<div className="langbox">
					<Lang lang={lang} toggle={setLang} />
				</div>
				<label>{email}</label>
			</div>
			{!CompSub ? (
				<div className="body">
					<Body {...props} />
				</div>
			) : (
				<div className="sub">
					<Link className="back mdui-btn mdui-ripple" to="/info">
						<i className="mdui-icon material-icons">keyboard_arrow_left</i>
						{tip.back[lang]}
					</Link>
					<div className="item">
						<CompSub {...props} />
					</div>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		lang: sysSelector.getLang(state),
		name: authSelector.getName(state),
		email: authSelector.getEmail(state),
		balance: authSelector.getBalance(state),
		bill_list: appSelector.getList(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		...bindActionCreators(authCreator, dispatch),
		...bindActionCreators(sysCreator, dispatch),
		...bindActionCreators(appCreator, dispatch),
	};
};
const Info = connect(mapStateToProps, mapDispatchToProps)(InfoView);

export { Info };
