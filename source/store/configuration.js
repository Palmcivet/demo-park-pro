import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducers } from "./index";
import { initState as auth } from "./auth";
import { initState as app } from "./app";
import { initState as sys } from "./system";

let finalCreateStore;

if (process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__) {
	finalCreateStore = compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__()
	)(createStore);
} else {
	finalCreateStore = applyMiddleware(thunk)(createStore);
}

const configureStore = (initialState) => {
	const store = finalCreateStore(rootReducers, initialState);

	if (process.env.NODE_ENV !== "production" && module.hot) {
		module.hot.accept("./index", () => store.replaceReducer(require("./index")));
	}

	return store;
};

const initStore = {
	auth: auth,
	app: app,
	sys: sys,
};

const testStore = {
	auth: {
		name: "Developer",
		email: "googleMSapple@gmail.com",
		balance: "343.05",
	},
	app: {
		bill_list: [
			[234324, "2020-02-27", 2, 10, 100],
			[234324, "2020-02-27", 2, 10, 100],
			[234324, "2020-02-27", 2, 10, 100],
			[234324, "2020-02-27", 2, 10, 100],
			[234324, "2020-02-27", 2, 10, 100],
		],
		park_place: "",
	},
	sys: {
		lang: 1,
		error: "",
		notify: "",
		isShow: false,
		color: "#3f51b5",
	},
};

const rootStore = configureStore(testStore);

export { rootStore };
