import {combineReducers} from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import newsSlice from "./newsSlice";

const rootReducer = combineReducers({
    user: userSlice,
    news: newsSlice
})
export default rootReducer