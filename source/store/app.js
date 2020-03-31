import { notify } from "../util/i18n";
import { post, url, apiType } from "../util/post";
import { rootStore } from "./configuration";
import { creator as sysCreator } from "../store/system";

const initState = {
	bill_list: [],
	park_place: "",
};

const type = {
	FEEDBACK: "FEEDBACK",
	GET_ORDER: "GET_ORDER",
};

const creator = {
	feedback: (content) => {
		return (dispatch) => {
			const postData = {
				token: localStorage.getItem("token"),
				require: apiType.feedback,
				content,
			};
			return post(url.other, postData).then((data) => {
				if (data.code === 200) {
					rootStore.dispatch(sysCreator.setError(notify.feedback_success));
				} else {
					rootStore.dispatch(sysCreator.setError(notify.feedback_failed));
				}
			});
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
	setOrderList: (data) => {
		if (data.code === 200) {
			return { type: type.GET_ORDER, data: data.data };
		} else {
			rootStore.dispatch(sysCreator.setError(notify.get_order_failed));
		}
	},
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case type.GET_ORDER:
			return { ...state, bill_list: action.data };
		default:
			break;
	}
};

const selector = {};

export { type, creator, reducer, selector };
