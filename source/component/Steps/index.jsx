import React, { useState } from "react";
import { Link } from "react-router-dom";
import { tip, park, sys, notify } from "../../util/i18n";
import { post, url, apiType } from "../../util/post";
const pay = require("../../../static/image/pay.png");
import "./style.less";

const Steps = (props) => {
	const { lang, isShow, balance, toggleShow, setError, history } = props;
	const [count, setCount] = useState(1);
	const [size, setSize] = useState(1);
	const [price, setPrice] = useState(10);
	mdui.mutation();

	return (
		<div className="selectbox" style={{ display: isShow ? "flex" : "none" }}>
			<div className="progress">
				<div
					className="mdui-progress"
					style={{ margin: "10px 0", height: "5px" }}
				>
					<div
						className="mdui-progress-determinate"
						style={{ width: (((count - 1) / 3) * 100).toString() + "%" }}
					></div>
				</div>
				<label className="indicate">{count} / 4</label>
			</div>

			{/* 填表 */}
			<div
				style={{ display: count === 1 ? "inherit" : "none" }}
				className="dialog-1"
			>
				<div>
					{park.prompt.intro[lang]}
					<br />
					L&lt;3.7m 🚗 W&lt;1.8m
					<br />
					3.7m&lt;L&lt;5.0m 🚐 1.8m&lt;W&lt;2.0m
					<br />
					5.0m&lt;L&lt;3.7m 🚜 2.0m&lt;W&lt;2.5m
				</div>
				<div style={{ marginTop: "18px" }}>
					<label>{park.prompt.choose_model[lang]}</label>
					<select
						id="demo-js"
						className="mdui-select"
						mdui-select="{position: 'top'}"
					>
						<option value="1">{park.model.small[lang]}</option>
						<option value="2">{park.model.middle[lang]}</option>
						<option value="3">{park.model.large[lang]}</option>
					</select>
				</div>
			</div>
			{/* 确认、支付 */}
			<div
				style={{ display: count === 2 ? "inherit" : "none" }}
				className="dialog-2"
			>
				<label>{park.prompt.confirm[lang]}</label>
				<ul className="mdui-list">
					<li className="mdui-list-item mdui-ripple">
						🚘 {park.prompt.choose_model[lang]}
						{size === 1
							? park.model.small[lang]
							: size === 2
							? park.model.middle[lang]
							: park.model.large[lang]}
					</li>
					<li className="mdui-list-item mdui-ripple">
						💰 {park.prompt.price_pay[lang]}¥ {price}
					</li>
					<li className="mdui-list-item mdui-ripple">
						⏰ {park.prompt.time[lang]}1 {lang === 0 ? "Hour" : "小时"}
					</li>
				</ul>
				<label className="balance">
					{sys.balance[lang]}¥ {parseFloat(balance / 100)}
				</label>
				<Link to="/recharge">{sys.recharge[lang]}</Link>
			</div>
			{/* 等待 */}
			<div style={{ display: count === 3 ? "flex" : "none" }} className="dialog-3">
				<label>{park.prompt.please_wait[lang]}</label>
				<div
					className="mdui-spinner"
					style={{ display: count === 3 ? "inherit" : "none" }}
				></div>
			</div>
			{/* 结果 */}
			<div style={{ display: count === 4 ? "flex" : "none" }} className="dialog-4">
				<img src={pay}></img>
				<label>{notify.pay_success[lang]}</label>
			</div>

			<div className="btngroup">
				<button
					className="mdui-btn mdui-ripple"
					disabled={count >= 3 ? true : false}
					onClick={() => {
						if (count < 3 && count !== 1) {
							setCount(count - 1);
						} else if (count === 1) {
							toggleShow();
							setCount(1);
						}
					}}
				>
					<div>{count === 1 ? tip.cancel[lang] : tip.prev[lang]}</div>
				</button>

				<button
					className="mdui-btn mdui-ripple"
					onClick={() => {
						mdui.mutation();
						switch (count) {
							case 1:
								setSize(
									document.getElementsByClassName(
										"mdui-select-selected"
									)[0].innerHTML
								);
								let inst = mdui.Select("#demo-js").value;
								setPrice(5 + parseInt(inst) * 5);
								setSize(parseInt(inst));
								setCount(2);
								break;
							case 2:
								setCount(3);
								post(url.other, {
									token: localStorage.getItem("token"),
									require: apiType.add_order,
									size,
									price,
								}).then((data) => {
									if (data.code === 200) {
										setCount(4);
									} else {
										setError(notify.pay_failed);
										setCount(2);
									}
								});
								break;
							case 3:
								break;
							case 4:
								toggleShow();
								setCount(1);
								break;
							default:
								break;
						}
					}}
				>
					<div>
						{count === 2
							? tip.get_order[lang]
							: count === 3
							? tip.wait[lang]
							: tip.next[lang]}
					</div>
				</button>
			</div>
		</div>
	);
};

export { Steps };
