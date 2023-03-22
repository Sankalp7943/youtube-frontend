import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "search",
    initialState: {

    },
    reducers: {
        cacheResults: (state, action) => {
            //implement LRU cache with doubly linked list or something cooler to only store more than 
            state = Object.assign(state, action.payload)

        }
    }
})

export const {cacheResults} = searchSlice.actions
export default searchSlice.reducer