import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useRequestHook } from "../../customHooks/requestHook.js";

const initialState = {
  movieData: {},
  singleMoviesStatus: "loading",
  movieId: "",
};

export const fetchSingleMovie = createAsyncThunk(
  "single/fetchSingleMovie",
  async function (url) {
    const { request } = useRequestHook();
    return await request(url);
  }
);

const singleMovieSlice = createSlice({
  name: "single",
  initialState,
  reducers: {
    setMovieId(state, action) {
      state.movieId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleMovie.pending, (state) => {
        state.singleMoviesStatus = "loading";
      })
      .addCase(fetchSingleMovie.fulfilled, (state, action) => {
        state.singleMoviesStatus = "ok";
        state.movieData = { ...action.payload };
        state.total_pages = action.payload.total_pages;
      })

      .addCase(fetchSingleMovie.rejected, (state) => {
        state.singleMoviesStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

export const singleMoviesReducer = singleMovieSlice.reducer;
export const { setMovieId } = singleMovieSlice.actions;
