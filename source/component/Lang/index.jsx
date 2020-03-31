import React from "react";
import "./style.less";

const Lang = (props) => {
	const { lang, toggle, onColor = "#f73d16", offColor = "#ffffff" } = props;

	return (
		<div className="lang">
			<span
				className={lang === 0 ? "on" : "off"}
				style={{ color: lang === 0 ? onColor : offColor }}
				onClick={() => toggle(0)}
			>
				En
			</span>
			<span>/</span>
			<span
				className={lang === 1 ? "on" : "off"}
				style={{ color: lang === 1 ? onColor : offColor }}
				onClick={() => toggle(1)}
			>
				中
			</span>
		</div>
	);
};

export { Lang };
