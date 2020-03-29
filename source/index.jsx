import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store/configuration";
import { App } from "./page/App";
import "./style/index.less";

const rootStore = configureStore();

render(
	<Provider store={rootStore}>
		<App />
	</Provider>,
	document.getElementById("root")
);
