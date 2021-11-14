import { combineReducers } from "redux";
import {
  themeReducer,
  mainMoviesReducer,
  movieFilterReducer,
  singleMoviesReducer,
} from "./reducers";

import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

export const rootReducer = (history) =>
  combineReducers({
    theme: themeReducer,
    main: mainMoviesReducer,
    filters: movieFilterReducer,
    single: singleMoviesReducer,
  });

export default rootReducer(history);
