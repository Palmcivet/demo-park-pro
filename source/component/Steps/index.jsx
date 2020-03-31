import React, { useState } from "react";
import { Link } from "react-router-dom";
import { tip, park, sys, notify } from "../../util/i18n";
import { post, url, apiType } from "../../util/post";
import "./style.less";

const Steps = (props) => {
	const { lang, isShow, balance, toggleShow, setError } = props;
	const [count, setCount] = useState(1);
	const [time, setTime] = useState("1");
	const [size, setSize] = useState(park.model.small[lang]);
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
					<select className="mdui-select" mdui-select="{position: 'top'}">
						<option value="1">{park.model.small[lang]}</option>
						<option value="2">{park.model.middle[lang]}</option>
						<option value="3">{park.model.large[lang]}</option>
					</select>
				</div>
				<div style={{ marginTop: "8px" }}>
					<label>{park.prompt.choose_time_t[lang]}</label>
					<select className="mdui-select" mdui-select="{position: 'bottom'}">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>
					<label>{park.prompt.choose_time_u[lang]}</label>
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
						🚘{park.prompt.choose_model[lang]}
						{size}
					</li>
					<li className="mdui-list-item mdui-ripple">
						⏰{park.prompt.choose_time_t[lang]}
						{time + " "}
						{park.prompt.choose_time_u[lang]}
					</li>
				</ul>
				<label className="balance">
					{sys.balance[lang]}
					{parseFloat(balance).toFixed(2)}
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
				<label>{park.prompt.get_note[lang]}</label>
				<div>{}</div>
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
								setTime(
									document.getElementsByClassName(
										"mdui-select-selected"
									)[1].innerHTML
								);
								setCount(count + 1);
								break;
							case 2:
								post(url.other, {
									token: localStorage.getItem("token"),
									require: apiType.get_order,
									car_size: size,
									time: time,
								}).then((data) => {
									if (data.status === 1) {
										setCount(count + 1);
									} else if (data.code !== 200) {
										//* Debug
										setCount(count + 1);
										// TODO: 逻辑不清
										setError(notify.pay_failed[lang]);
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
