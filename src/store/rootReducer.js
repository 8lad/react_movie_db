import { combineReducers } from "redux";
import { themeReducer } from "./reducers";

import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const rootReducer = (history) =>
  combineReducers({
    theme: themeReducer,
  });

export default rootReducer(history);
