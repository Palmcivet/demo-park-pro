import React, { Component } from "react";
import "./style.less";

const Steps = (props) => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<div>{count}</div>
			{props.children}
		</div>
	);
};

export { Steps };
