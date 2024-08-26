import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./Slices/AuthSlice";
import headerReducer from "./Slices/Headerslice";
import albumReducer from "./Slices/AlbumSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    header:headerReducer,
    album:albumReducer
})


export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;