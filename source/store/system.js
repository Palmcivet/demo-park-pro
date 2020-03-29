const initState = {
	err: "",
	msg: "",
	lang: 1,
	color: "#3f51b5",
	isShow: false,
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
			return { ...state, err: action.error };
		case type.SET_NOTIFY:
			return state;
		default:
			return state;
	}
};

const selector = {
	getLang: (state) => state.system.lang,
	getShow: (state) => state.system.isShow,
};

export { creator, reducer, selector };
