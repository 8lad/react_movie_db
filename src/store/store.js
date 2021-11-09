import reducer from "./rootReducer";
import { middlewares } from "./middleware";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    ...middlewares,
  ],
});
