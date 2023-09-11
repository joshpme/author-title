import {createSlice} from '@reduxjs/toolkit'
import {fetchPaper} from "../Services/indico";

const initialState = {
    paper: {
        title: null,
        specialThanks: null,
        authorStyle: 'initial', // initial, full
        authors: [],
        organisationStyle: 'institute', // institute, location, zip-code
        organisations: [],
        affiliationStyle: 'group-authors', // group-authors, authors-then-organisations
    },
    warnings: {
        title: null,
        authors: [],
        organisations: [],
    }
}

const updateTitle = (newTitle, currentState) => {
    return {
        paper: {...currentState.paper, title: newTitle},
        warnings: {...currentState.warnings, title: getTitleWarning(newTitle)},
    };
}

const updateAuthorStyle = (newAuthorStyle, currentState) => {
    const newAuthors = currentState.paper.authors.map(
        (author) => {
            return {
                ...author, name: generateName(author, newAuthorStyle)
            }
        });

    return {
        paper: {
            ...currentState.paper,
            authorStyle: newAuthorStyle,
            authors: newAuthors
        },
        warnings: {...currentState.warnings, authors: getAuthorWarnings(newAuthors)},
    };
}

const getAuthorWarnings = (authors) => {
    return authors.map((author) => {
        return null
    });
};

const getTitleWarning = (title) => {
    if (title.length === 0) {
        return "Title is missing";
    } else if (/[a-z]/.test(title)) {
        return "Title contains lowercase letters";
    } else {
        return null;
    }
};

const generateName = (author, authorStyle) => {
    if (authorStyle === 'initial') {
        return `${author.first_name[0]}. ${author.last_name}`;
    } else {
        return `${author.first_name} ${author.last_name}`;
    }
}

const updateFromMiddleware = (newPaper, currentState) => {
    const newState = updateTitle(newPaper.title.toUpperCase(), currentState);

    const authors = [];
    for (const [_, value] of Object.entries(newPaper.authors)) {
        authors.push({...value, name: generateName(value, newState.paper.authorStyle)});
    }

    return {
        paper: {...newState.paper, authors: authors, organisations: newPaper.organisations},
        warnings: {...newState.warnings, authors: getAuthorWarnings(authors) }
    }
}

export const paperSlice = createSlice({
    name: 'paper',
    initialState,
    reducers: {
        changeTitle: (state, action) => {
            const newState = updateTitle(action.payload, state)
            state.paper = newState.paper;
            state.warnings = newState.warnings;
        },
        changeSpecialThanks: (state, action) => {
            state.specialThanks = action.payload
        },
        changeAuthorStyle: (state, action) => {
            const newState = updateAuthorStyle(action.payload, state)
            state.paper = newState.paper;
            state.warnings = newState.warnings;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPaper.fulfilled, (state, action) => {
            if (action.payload.length > 0) {
                const newState = updateFromMiddleware(action.payload[0], state);
                state.paper = newState.paper;
                state.warnings = newState.warnings;
            }
        })
    }
})

export const {
    changeTitle,
    changeSpecialThanks,
    changeAuthorStyle
} = paperSlice.actions

export default paperSlice.reducer