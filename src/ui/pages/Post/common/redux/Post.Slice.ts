import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iPost, iPostState } from "../@types";

const initialState: iPostState = {
  posts: [],
  post: null,
  isLoading: false,
  error: null
}


const postSlice = createSlice({
  name: 'Post',
  initialState,
  reducers: {
    getAllPosts: (state, action: PayloadAction<iPost[]>) => {
      state.posts = action.payload;
    },
    getPost: (state, action: PayloadAction<iPost>) => {
      state.post = action.payload;
    },
    clearPost: (state) => {
      state.post = initialState.post;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    }
  }
});

export const { getAllPosts, getPost, clearPost, setLoading, setError } = postSlice.actions;

export default postSlice.reducer;

