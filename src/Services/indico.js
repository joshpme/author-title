import {createAsyncThunk} from "@reduxjs/toolkit";

const baseUrl = "https://faas-syd1-c274eac6.doserverless.co/api/v1/web/fn-19977d5d-a466-4a2d-bfd5-e29ba32197eb/indico";

const fetchConferences = createAsyncThunk(
    'fetch/conferences',
    async (_, thunkAPI) => {
        const response = await fetch(baseUrl + "/conferences")
        return await response.json()
    }
)

const fetchPaper = createAsyncThunk(
    'fetch/paper',
    async (params, thunkAPI) => {
        const response = await fetch(baseUrl + "/find?" + new URLSearchParams(params))
        return await response.json()
    }
)

export {fetchConferences, fetchPaper }