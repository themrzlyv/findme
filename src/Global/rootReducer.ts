import { combineReducers } from "redux";
import PostSlice from "../ui/pages/Post/common/redux/Post.Slice";

const rootReducer = combineReducers({
  posts: PostSlice,
});


export default rootReducer;