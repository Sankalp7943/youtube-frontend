import { createSlice } from "@reduxjs/toolkit";
import { SUGGESTIONS_CACHE_COUNT } from "./constants";

const cacheStorage = []

const searchSlice = createSlice({
    name: "search",
    initialState: {

    },
    reducers: {
        cacheResults: (state, action) => {
            //implement LRU cache with doubly linked list or something cooler to only store more than 
            state = Object.assign(state, action.payload)
            // console.log("ACTION PAYLOAD", action.payload)

            if (cacheStorage.length > SUGGESTIONS_CACHE_COUNT){
                console.log("ACTION PAYLOAD", action.payload)
                const deletedItem = cacheStorage.pop()
                console.log("DELETED ITEM", Object.keys(deletedItem))
                const toBeDeletedKey = Object.keys(deletedItem)[0]
                delete state[toBeDeletedKey]
                console.log("Cache size", cacheStorage.length)

            }
            cacheStorage.unshift(action.payload)
            console.log("Cache size", cacheStorage.length)

        }
    }
})

export const {cacheResults} = searchSlice.actions
export default searchSlice.reducer