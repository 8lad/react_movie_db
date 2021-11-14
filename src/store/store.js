import reducer from "./rootReducer";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
