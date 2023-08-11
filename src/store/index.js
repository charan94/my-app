import { configureStore } from "@reduxjs/toolkit";
import { PERSONAL_INFO_FEATURE_KEY, personalInfoReducer } from "../reducers/personal-info.reducer";


const store = configureStore({
    reducer: {
        [PERSONAL_INFO_FEATURE_KEY]: personalInfoReducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
    enhancers: [],
})


export default store;