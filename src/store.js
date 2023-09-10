import { configureStore } from '@reduxjs/toolkit'
import mainReducer from "./mainReducer";
import findReducer from "./findReducer";

export const store = configureStore({
    reducer: {
        main: mainReducer,
        find: findReducer,
    },
})