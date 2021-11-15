import { combineReducers } from "redux";
import {
  themeReducer,
  mainMoviesReducer,
  movieFilterReducer,
  singleMoviesReducer,
  userDataReducer,
} from "./reducers";

export const rootReducer = () =>
  combineReducers({
    theme: themeReducer,
    main: mainMoviesReducer,
    filters: movieFilterReducer,
    single: singleMoviesReducer,
    user: userDataReducer,
  });

export default rootReducer();
