import { combineReducers } from "redux";
import { loadingReducer } from "./loadingReducer";
import { quanLySVReducer } from "./quanLySVReducer";

export const rootReducerQuanLySV = combineReducers({
  quanLySVReducer,
  loadingReducer,
});
