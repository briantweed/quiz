import {configureStore} from "@reduxjs/toolkit";

import loadingReducer from "./loadingSlice";


export default configureStore({
    reducer: {
        loading: loadingReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
});