import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import solutionFakeData from "../../../public/solutions.JSON";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async ({ limit }, { dispatch, getState }) => {
    // const { todos } = getState()
    // console.log({ todos })
    // you can dispatch any action from here!
    // dispatch(del(2))
    return fetch("./solutions.JSON").then((res) => res.json());
  }
);

const solutionsSlice = createSlice({
  name: "solution",
  initialState: {
    solutions: solutionFakeData,
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [getPosts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default solutionsSlice.reducer;
