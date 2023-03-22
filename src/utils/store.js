import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import homeSlice from "./homeSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        home: homeSlice,
        search: searchSlice,
    }
})

export default store