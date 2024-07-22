import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./Slices/AuthSlice";
import headerReducer from "./Slices/Headerslice";

const rootReducer = combineReducers({
    auth: authReducer,
    header:headerReducer
})


export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;