import { createSlice } from '@reduxjs/toolkit'
import {fetchConferences, fetchPaper} from "../Services/indico";

const initialState = {
    conferenceLookupStatus: 'idle',
    conferences: [],
    selectedConference: 41,
    paperCode: 'TUPA071',
    findStatus: 'idle',
    error: null
}

export const findSlice = createSlice({
    name: 'find',
    initialState,
    reducers: {
        changeConference: (state, action) => {
            state.selectedConference = action.payload
        },
        changePaperCode: (state, action) => {
            state.paperCode = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchConferences.fulfilled, (state, action) => {
            state.conferences = action.payload
            state.conferenceLookupStatus = 'succeeded'
        }).addCase(fetchConferences.pending, (state, action) => {
            state.conferenceLookupStatus = 'fetching'
        }).addCase(fetchPaper.pending, (state, action) => {
            state.findStatus = 'fetching';
        }).addCase(fetchPaper.fulfilled, (state, action) => {
            if (action.payload.length === 0) {
                state.findStatus = 'failed';
                state.error = "No paper found"
            } else {
                state.findStatus = 'succeeded';
            }
            state.findStatus = 'idle'
        }).addCase(fetchPaper.rejected, (state, action) => {
            state.findStatus = 'failed';
            state.error = "Could not connect to server"
        })
    },
})

export const {
    changeConference,
    changePaperCode
} = findSlice.actions

export default findSlice.reducer