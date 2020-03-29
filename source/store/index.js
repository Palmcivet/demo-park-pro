import { combineReducers } from "redux";
import { reducer as authReducer } from "./auth";
import { reducer as systemReducer } from "./system";

const rootReducers = combineReducers({
	auth: authReducer,
	system: systemReducer,
});

export { rootReducers };
