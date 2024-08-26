import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducers";

const Store = configureStore({
    reducer:rootReducer
})

export type AppDispatch = typeof Store.dispatch;

export default Store;