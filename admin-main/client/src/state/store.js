import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./index";
import { api } from "./api";

const store = configureStore({
    reducer: {
        global: globalReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export default store;
