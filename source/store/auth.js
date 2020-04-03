import { post, url } from "../util/post";
import { rootStore } from "./configuration";
import { creator as sysCreator } from "../store/system";
import { notify } from "../util/i18n";

const initState = {
	name: "",
	email: "",
	balance: "",
};

const type = {
	LOGOUT: "LOGOUT",
	SETINFO: "SETINFO",
};

const creator = {
	signup: (username, email, password) => {
		return (dispatch) => {
			return post(url.signup, {
				username,
				email,
				password,
			}).then((data) => dispatch(creator.setInfo(data)));
		};
	},
	login: (username, password) => {
		return (dispatch) => {
			return post(url.login, {
				username,
				password,
			}).then((data) => dispatch(creator.setInfo(data)));
		};
	},
	logout: () => ({ type: type.LOGOUT }),
	setInfo: (data) => {
		if (data.code !== 200) {
			rootStore.dispatch(sysCreator.setError(notify.login_failed));
		} else {
			return {
				type: type.SETINFO,
				data: data,
			};
		}
	},
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case type.LOGOUT:
			return { ...state, name: "", email: "", balance: "0.00" };
		case type.SETINFO:
			localStorage.setItem("token", action.data.token);
			return {
				...state,
				name: action.data.name,
				email: action.data.email,
				balance: action.data.balance,
			};
		default:
			return state;
	}
};

const selector = {
	getSatus: (state) => (state.auth.email === "" ? false : true),
	getName: (state) => state.auth.name,
	getEmail: (state) => state.auth.email,
	getBalance: (state) => state.auth.balance,
};

export { initState, type, creator, reducer, selector };
