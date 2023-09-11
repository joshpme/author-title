import { createSlice } from '@reduxjs/toolkit'
import {fetchPaper} from "../Services/indico";

const initialState = {
    paper: null,
    page: 'find'
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.page = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPaper.fulfilled, (state, action) => {
            state.page = 'title'
        })
    },
})

// Action creators are generated for each case reducer function
export const { changePage } = navSlice.actions

export default navSlice.reducer