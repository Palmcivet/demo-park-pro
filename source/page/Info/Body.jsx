import React from "react";
import { Link } from "react-router-dom";
import { auth, sys } from "../../util/i18n";

const Body = (props) => {
	const { lang, balance, logout } = props;

	return (
		<>
			<div className="card up">
				<i className="mdui-icon material-icons">account_balance_wallet</i>
				<span>{sys.rest[lang]}</span>
				<Link to="/recharge">
					{/* 字符串格式，"81.02" "34" */}
					<label>¥</label>
					<label>
						{balance.indexOf(".") === -1
							? balance
							: balance.slice(0, balance.indexOf("."))}
					</label>
					<label>
						.{/* 字符串 -> 数值(精度 2) -> 字符串("."') */}
						{parseFloat(balance)
							.toFixed(2)
							.slice(balance.indexOf(".") + 1)}
					</label>
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
		</>
	);
};

export { Body };
