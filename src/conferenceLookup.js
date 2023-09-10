import {createAsyncThunk} from "@reduxjs/toolkit";

const baseUrl = "https://faas-syd1-c274eac6.doserverless.co/api/v1/web/fn-19977d5d-a466-4a2d-bfd5-e29ba32197eb/indico";
const conferenceLookupUrl = baseUrl + "/conferences";
const findUrl = baseUrl + "/find?";

const fetchConferences = createAsyncThunk(
    'find/fetchConferences',
    async (_, thunkAPI) => {
        const response = await fetch(conferenceLookupUrl)
        return await response.json()
    }
)

export {fetchConferences}