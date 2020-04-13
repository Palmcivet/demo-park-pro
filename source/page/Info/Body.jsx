import React from "react";
import { Link } from "react-router-dom";
import { auth, sys } from "../../util/i18n";

const Body = (props) => {
	const { lang, balance, signout } = props;

	return (
		<>
			<div className="card up">
				<i className="mdui-icon material-icons">account_balance_wallet</i>
				<span>{sys.rest[lang]}</span>
				<Link to="/recharge">
					{/* 字符串格式，"81.02" "34" */}
					<label>¥</label>
					<label>{Math.floor(balance / 100).toString()}</label>
					<label>.{("00" + (balance % 100)).slice(-2)}</label>
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
				<button className="mdui-ripple" onClick={() => signout()}>
					{auth.signout[lang]}
				</button>
			</div>
		</>
	);
};

export { Body };
