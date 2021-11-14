import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useRequestHook } from "../../customHooks/requestHook.js";

const initialState = {
  movies: [],
  mainMoviesStatus: "loading",
  total_pages: null,
  currentPage: 1,
};

export const fetchMovies = createAsyncThunk(
  "main/fetchMovies",
  async function (url) {
    const { request } = useRequestHook();
    return await request(url);
  }
);

const mainMovieSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.mainMoviesStatus = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.mainMoviesStatus = "ok";
        state.movies = [...action.payload.results];
        state.total_pages = action.payload.total_pages;
      })

      .addCase(fetchMovies.rejected, (state) => {
        state.mainMoviesStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

export const mainMoviesReducer = mainMovieSlice.reducer;
export const { setPage } = mainMovieSlice.actions;
