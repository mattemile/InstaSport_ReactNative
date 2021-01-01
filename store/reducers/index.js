import savedPost from "./savedPost";
import posts from "./posts";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  savedPost,
  posts,
});

export default rootReducer;
