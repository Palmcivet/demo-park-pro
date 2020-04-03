import React from "react";

const Recharge = (props) => {
	const { lang } = props;

	return (
		<div
			style={{
				position: "absolute",
				left: "50%",
				top: "50%",
				transform: "translate(-50%,-50%)",
				fontSize: "25px",
				textAlign: "center",
				wordBreak: "break-word",
			}}
		>
			<div>{lang === 1 ? "该功能尚未开通" : "Your Car was Gone"}</div>
		</div>
	);
};

export { Recharge };
