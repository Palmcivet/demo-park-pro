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
	setLang: (lang) => ({ type: type.SET_LANGUAGE, lang: lang }),
	setColor: (color) => ({ type: type.SET_COLOR, color: color }),
	setError: (error) => ({ type: type.SET_ERROR, error: error }),
	setNotify: (notice) => ({ type: type.SET_NOTIFY, notice: notice }),
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
			mdui.snackbar({ message: action.error[action.lang] });
			return { ...state, error: action.error[action.lang] };
		case type.SET_NOTIFY:
			mdui.snackbar({ message: action.error[action.lang] });
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
