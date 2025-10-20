import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice.js'
import projectsReducer from './slices/projectsSlice.js';
import { apiSlice } from "./slices/apiSlice.js";

const store = configureStore({
    reducer: {
        projects: projectsReducer,
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});

export default store