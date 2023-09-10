import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    paper: null,
    page: 'find'
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.page = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { changePage } = mainSlice.actions

export default mainSlice.reducer