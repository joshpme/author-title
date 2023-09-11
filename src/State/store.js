import { configureStore } from '@reduxjs/toolkit'
import navReducer from "./navReducer";
import findReducer from "./findReducer";
import paperReducer from "./paperReducer";

export const store = configureStore({
    reducer: {
        nav: navReducer,
        find: findReducer,
        paper: paperReducer,
    },
})