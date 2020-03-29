import React, { useState } from "react";
import "./style.less";
import { tip } from "../../config/i18n";

const Steps = (props) => {
	const { lang, toggleShow } = props;
	const [count, setCount] = useState(0);
	mdui.mutation();

	return (
		<div className="selectbox">
			<div className="mdui-progress">
				<div
					className="mdui-progress-determinate"
					style={{ width: ((count / 3) * 100).toString() + "%" }}
				></div>
			</div>

			<div className="spin">
				<div
					className="mdui-spinner"
					style={{ width: "40px", height: "40px" }}
				></div>
			</div>

			<button className="mdui-btn mdui-ripple" onClick={() => setCount(count + 1)}>
				<div>{tip.confirm[lang]}</div>
			</button>
			<button
				className="mdui-btn mdui-ripple"
				disabled={count < 3 ? false : true}
				onClick={() => toggleShow()}
			>
				<div>{tip.cancel[lang]}</div>
			</button>
		</div>
	);
};

export { Steps };