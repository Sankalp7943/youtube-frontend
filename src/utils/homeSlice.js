import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: "home",
    initialState: {
        isHomeOpen: true,
    },
    reducers: {
        toggleHome: (state) => {
            state.isHomeOpen = !state.isHomeOpen
        },
        closeHome: (state) => {
            state.isHomeOpen = false
        },
        openHome: (state) => {
            state.isHomeOpen = true
        },
    }
})

export const {toggleHome, closeHome, openHome} = homeSlice.actions
export default homeSlice.reducer
