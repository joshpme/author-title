import {createSlice} from '@reduxjs/toolkit'
import {fetchPaper} from "../Services/indico";

const initialState = {
    paper: {
        title: null,
        specialThanks: null,
    },
    warnings: {
        title: null,
    },
}

const updateTitle = (newTitle, currentState) => {
    return {
        paper: {...currentState.paper, title: newTitle},
        warnings: {...currentState.warnings, title: getTitleWarning(newTitle)}
    };
}

const getTitleWarning = (title) => {
    if (title.length === 0) {
        return "Title is missing";
    } else if (/[a-z]/.test(title)) {
        return "Title contains lowercase letters";
    } else {
        return null;
    }
};

export const paperSlice = createSlice({
    name: 'paper',
    initialState,
    reducers: {
        changeTitle: (state, action) => {
            state = updateTitle(action.payload, state)
        },
        changeSpecialThanks: (state, action) => {
            state.specialThanks = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPaper.fulfilled, (state, action) => {
            if (action.payload.length > 0) {
                const newState = updateTitle(action.payload[0]['Title'].toUpperCase(), state);
                state.paper = newState.paper;
                state.warnings = newState.warnings;
            }
        })
    }
})

export const {
    changeTitle,
    changeSpecialThanks
} = paperSlice.actions

export default paperSlice.reducer