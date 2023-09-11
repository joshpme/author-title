import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    paper: null,
    page: 'find'
}

export const navSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.page = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { changePage } = navSlice.actions

export default navSlice.reducer