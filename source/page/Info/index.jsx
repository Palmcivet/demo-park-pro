import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { Lang } from "../../component/Lang";
import { auth, sys } from "../../util/i18n";
import { selector as authSelector, creator as authCreator } from "../../store/auth";
import { selector as sysSelector, creator as sysCreator } from "../../store/system";
import "./style.less";

const InfoView = (props) => {
	const { lang, name, email, balance, logout, setLang } = props;
	return (
		<div className="info">
			<div className="head">
				<label>{name}</label>
				<div className="langbox">
					<Lang lang={lang} toggle={setLang} />
				</div>
				<label>{email}</label>
			</div>
			<div className="body">
				<div className="card up">
					<i className="mdui-icon material-icons">account_balance_wallet</i>
					<span>{sys.balance[lang]}</span>
					<Link to="/recharge">
						{/* 字符串格式，"81.02" "34" */}
						{balance}
					</Link>
				</div>
				<div className="card mid">
					<Link to="/bill">
						<i className="mdui-icon material-icons">featured_play_list</i>
						<span>{sys.bill[lang]}</span>
						<i className="mdui-icon material-icons">keyboard_arrow_right</i>
					</Link>
					<Link to="/feedback" className="card-feedback">
						<i className="mdui-icon material-icons">feedback</i>
						<span>{sys.feedback[lang]}</span>
						<i className="mdui-icon material-icons">keyboard_arrow_right</i>
					</Link>
					<Link to="/about">
						<i className="mdui-icon material-icons">info</i>
						<span>{sys.about[lang]}</span>
						<i className="mdui-icon material-icons">keyboard_arrow_right</i>
					</Link>
				</div>
				<div className="down">
					<button className="mdui-ripple" onClick={() => logout()}>
						{auth.logout[lang]}
					</button>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		lang: sysSelector.getLang(state),
		name: authSelector.getName(state),
		email: authSelector.getEmail(state),
		balance: authSelector.getBalance(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		...bindActionCreators(authCreator, dispatch),
		...bindActionCreators(sysCreator, dispatch),
	};
};
const Info = connect(mapStateToProps, mapDispatchToProps)(InfoView);

export { Info };
