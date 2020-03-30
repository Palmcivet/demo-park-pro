import React, { useState } from "react";
import { tip, park } from "../../util/i18n";
import { post, url, apiType } from "../../util/post";
import "./style.less";

const Steps = (props) => {
	const { lang, toggleShow, isShow } = props;
	const [count, setCount] = useState(1);
	const [time, setTime] = useState("1");
	const [size, setSize] = useState(park.model.small[lang]);
	mdui.mutation();

	return (
		<div className="selectbox" style={{ display: isShow ? "flex" : "none" }}>
			<div style={{ width: "100%" }}>
				<div
					className="mdui-progress"
					style={{ margin: "10px 0", height: "5px" }}
				>
					<div
						className="mdui-progress-determinate"
						style={{ width: (((count - 1) / 3) * 100).toString() + "%" }}
					></div>
				</div>
				<label style={{ margin: "10px 0" }}>{count} / 4</label>
			</div>

			<div
				style={{ display: count === 1 ? "inherit" : "none" }}
				className="dialog-1"
			>
				<div className="prompt-1">
					{park.prompt.intro[lang]}
					<br />
					L&lt;3.7m 🚘 W&lt;1.8m
					<br />
					3.7m&lt;L&lt;5.0m 🚐 1.8m&lt;W&lt;2.0m
					<br />
					5.0m&lt;L&lt;3.7m 🚜 2.0m&lt;W&lt;2.5m
				</div>
				<div style={{ marginTop: "10px" }}>
					<label>{park.prompt.choose_model[lang]}</label>
					<select className="mdui-select" mdui-select="{position: 'top'}">
						<option value="1">{park.model.small[lang]}</option>
						<option value="2">{park.model.middle[lang]}</option>
						<option value="3">{park.model.large[lang]}</option>
					</select>
				</div>
				<div style={{ marginTop: "10px" }}>
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
			<div
				style={{ display: count === 2 ? "inherit" : "none" }}
				className="dialog-2"
			>
				<div></div>
				{park.prompt.choose_model[lang]}
				{size}
				<br />
				{park.prompt.choose_time_t[lang]}
				{time + " "}
				{park.prompt.choose_time_u[lang]}
			</div>
			<div
				style={{ display: count === 3 ? "inherit" : "none" }}
				className="dialog-3"
			>
				{/* 等待 */}
			</div>
			<div
				style={{ display: count === 4 ? "inherit" : "none" }}
				className="dialog-4"
			>
				{/* 结果 */}
			</div>
			<div style={{ display: count === 3 ? "inherit" : "none" }} className="spin">
				<div
					className="mdui-spinner"
					style={{
						width: "40px",
						height: "40px",
						display: count > 3 ? "inherit" : "none",
					}}
				></div>
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
						if (count === 1) {
							setSize(
								document.getElementsByClassName("mdui-select-selected")[0]
									.innerHTML
							);
							setTime(
								document.getElementsByClassName("mdui-select-selected")[1]
									.innerHTML
							);
							setCount(count + 1);
						} else if (count === 2) {
							post(url.other, {
								token: localStorage.getItem("token"),
								require: apiType.get_order,
								car_size,
								time,
							}).then((data) => {
								if (data.code !== 200) {
									console.log("操作失败");
								} else {
									setCount(count + 1);
								}
							});
						} else if (count === 4) {
							toggleShow();
							setCount(1);
						} else {
							setCount(count + 1);
						}
					}}
				>
					<div>{count === 2 ? tip.confirm[lang] : tip.next[lang]}</div>
				</button>
			</div>
		</div>
	);
};

export { Steps };
