import { rootStore } from "./configuration";

const initState = {
	lang: 1,
	error: "",
	isShow: false,
	color: "#3f51b5",
};

const type = {
	TOGGLE_SHOW: "TOOGLE_SHOW",
	SET_LANGUAGE: "SET_LANGUAGE",
	SET_COLOR: "SET_COLOR",
	SET_ERROR: "SET_ERROE",
	SET_NOTIFY: "SET_NOTIFY",
};

const creator = {
	toggleShow: () => ({ type: type.TOGGLE_SHOW }),
	setLang: (lang) => ({ type: type.SET_LANGUAGE, lang }),
	setColor: (color) => ({ type: type.SET_COLOR, color }),
	setError: (error) => {
		let state = rootStore.getState();
		let lang = state.sys.lang;
		return { type: type.SET_ERROR, error: error[lang] };
	},
	setNotify: (notice) => {
		let state = rootStore.getState();
		let lang = state.sys.lang;
		return { type: type.SET_NOTIFY, notice: notice[lang] };
	},
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case type.TOGGLE_SHOW:
			return { ...state, isShow: !state.isShow };
		case type.SET_LANGUAGE:
			return { ...state, lang: action.lang };
		case type.SET_COLOR:
			return { ...state, color: action.color };
		case type.SET_ERROR:
			mdui.snackbar({
				message: action.error,
				timeout: 2000,
				position: "top",
			});
			return { ...state, error: action.error };
		case type.SET_NOTIFY:
			mdui.snackbar({ message: action.error });
			return state;
		default:
			return state;
	}
};

const selector = {
	getLang: (state) => state.sys.lang,
	getShow: (state) => state.sys.isShow,
};

export { initState, creator, reducer, selector };
