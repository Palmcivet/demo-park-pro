import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { rootStore } from "./store/configuration";
import { App } from "./page/App";

render(
	<Provider store={rootStore}>
		<App />
	</Provider>,
	document.getElementById("root")
);
