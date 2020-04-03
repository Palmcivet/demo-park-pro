import { combineReducers } from "redux";
import { reducer as appReducer } from "./app";
import { reducer as authReducer } from "./auth";
import { reducer as systemReducer } from "./system";

const rootReducers = combineReducers({
	auth: authReducer,
	app: appReducer,
	sys: systemReducer,
});

export { rootReducers };
