import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useRequestHook } from "../../customHooks/requestHook.js";

const initialState = {
  genres: [],
  languages: [],
  genresStatus: "loading",
  languagesStatus: "loading",
};

export const fetchLanguages = createAsyncThunk(
  "filters/fetchLanguages",
  async function (url) {
    const { request } = useRequestHook();
    return await request(url);
  }
);

export const fetchGenres = createAsyncThunk(
  "filters/fetchGenres",
  async function (url) {
    const { request } = useRequestHook();
    return await request(url);
  }
);

const movieFiltersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLanguages.pending, (state) => {
        state.languagesStatus = "loading";
      })
      .addCase(fetchLanguages.fulfilled, (state, action) => {
        state.languagesStatus = "ok";
        state.languages = [...action.payload];
      })

      .addCase(fetchLanguages.rejected, (state) => {
        state.languagesStatus = "error";
      })
      .addCase(fetchGenres.pending, (state) => {
        state.genresStatus = "loading";
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genresStatus = "ok";
        state.genres = [...action.payload.genres];
      })

      .addCase(fetchGenres.rejected, (state) => {
        state.genresStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

export const movieFilterReducer = movieFiltersSlice.reducer;
