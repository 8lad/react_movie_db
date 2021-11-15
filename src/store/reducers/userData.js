import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useRequestHook } from "../../customHooks/requestHook.js";
import { usePostHook } from "../../customHooks/postHook.js";
const initialState = {
  userData: {},
  isLogged: false,
  sessionId: {},
  userToken: {
    request_token: "",
  },
  userStatus: "loading",
  detailsStatus: "loading",
  tokenStatus: "loading",
};

export const fetchSessionId = createAsyncThunk(
  "user/fetchSessionId",
  async function (body) {
    const { postRequest } = usePostHook();
    return await postRequest(body);
  }
);
export const fetchUserDetails = createAsyncThunk(
  "user/fetchUserDetails",
  async function (url) {
    const { request } = useRequestHook();
    return await request(url);
  }
);

export const fetchUserToken = createAsyncThunk(
  "user/fetchUserToken",
  async function (url) {
    const { request } = useRequestHook();
    return await request(url);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLogged(state, action) {
      state.isLogged = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserToken.pending, (state) => {
        state.tokenStatus = "loading";
      })
      .addCase(fetchUserToken.fulfilled, (state, action) => {
        state.tokenStatus = "ok";
        state.userToken.request_token = action.payload.request_token;
      })

      .addCase(fetchUserToken.rejected, (state) => {
        state.tokenStatus = "error";
      })
      .addCase(fetchSessionId.pending, (state) => {
        state.userStatus = "loading";
      })
      .addCase(fetchSessionId.fulfilled, (state, action) => {
        state.userStatus = "ok";
        state.sessionId = { ...action.payload };
      })

      .addCase(fetchSessionId.rejected, (state) => {
        state.userStatus = "error";
      })
      .addCase(fetchUserDetails.pending, (state) => {
        state.detailsStatus = "loading";
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.detailsStatus = "ok";
        state.userData = { ...action.payload };
      })

      .addCase(fetchUserDetails.rejected, (state) => {
        state.detailsStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

export const userDataReducer = userSlice.reducer;
export const { setIsLogged } = userSlice.actions;
