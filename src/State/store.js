import { configureStore } from '@reduxjs/toolkit'
import navReducer from "./navReducer";
import findReducer from "./findReducer";

export const store = configureStore({
    reducer: {
        nav: navReducer,
        find: findReducer,
    },
})