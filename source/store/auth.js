import { post, url } from "../util/post";

const initState = {
	name: "",
	email: "",
	balance: 0.0,
	error: "",
};

const type = {
	ERROR: "ERROR",
	LOGOUT: "LOGOUT",
	SETINFO: "SETINFO",
};

const creator = {
	signup: (username, email, password) => {
		return (dispatch) => {
			const postData = {
				username,
				email,
				password,
			};
			return post(url.signup, postData).then((data) =>
				dispatch(creator.setInfo(data))
			);
		};
	},
	login: (username, password) => {
		return (dispatch) => {
			const postData = {
				username,
				password,
			};
			return post(url.login, postData).then((data) =>
				dispatch(creator.setInfo(data))
			);
		};
	},
	logout: () => ({ type: type.LOGOUT }),
	setInfo: (data) => {
		if (data.code !== 200) {
			return { type: type.ERROR, error: "登录失败" };
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
			return { ...state, name: "", email: "", balance: 0.0 };
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
};

export { initState, type, creator, reducer, selector };
