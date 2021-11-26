import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iPost, iPostState } from "../@types";

const initialState: iPostState = {
  posts: []
}


const postSlice = createSlice({
  name: 'Post',
  initialState,
  reducers: {
    getAllPosts: (state, action: PayloadAction<iPost[]>) => {
      state.posts = action.payload;
    }
  }
});

export const { getAllPosts } = postSlice.actions;

export default postSlice.reducer;

