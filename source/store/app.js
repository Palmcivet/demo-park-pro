import { initState, type } from "./auth";
import { post, url, apiType } from "../util/post";

const initState = {};

const type = {
	FEEDBACK: "FEEDBACK",
	GET_ORDER: "GET_ORDER",
};

const creator = {
	feedback: (content) => {
		return (dispatch) => {
			const postData = {
				token: localStorage.getItem("token"),
				require: apiType.get_order,
				content,
			};
			return post(url.other, postData).then((data) =>
				dispatch(creator.setInfo(data))
			);
		};
	},
	get_order: () => {
		return (dispatch) => {
			const postData = {
				token: localStorage.getItem("token"),
				require: apiType.get_order,
			};
			return post(url.other, postData).then((data) =>
				dispatch(creator.setOrderList(data))
			);
		};
	},
	setOrderList: (data) => {},
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case type.FEEDBACK:
			break;
		case type.GET_ORDER:
			break;

		default:
			break;
	}
};

const selector = {};

export { type, creator, reducer, selector };
