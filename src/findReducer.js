import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {fetchConferences} from "./conferenceLookup";

const initialState = {
    conferenceLookupStatus: 'idle', // 'idle', 'fetching', 'succeeded', 'failed'
    conferences: [],
    selectedConference: null,
    paperCode: '',
    findStatus: 'idle', // 'idle', 'fetching', 'succeeded', 'failed'
    error: null,
}

export const findSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        lookupConferences: (state, action) => {

        },
        changeConference: (state, action) => {

        },
        changePaperCode: (state, action) => {
            state.paperCode = action.payload;
        },
        findPaper: (state, action) => {
            state.loading = 'fetching';
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchConferences.fulfilled, (state, action) => {
            state.conferences = action.payload
            state.conferenceLookupStatus = 'succeeded'
        }).addCase(fetchConferences.pending, (state, action) => {
            state.conferenceLookupStatus = 'fetching'
        })
    },
})

export const {
    changeConference,
    changePaperCode,
    lookupConferences,
    findPaper } = findSlice.actions

export default findSlice.reducer