import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import homeSlice from "./homeSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        home: homeSlice,
        search: searchSlice,
        chat: chatSlice,
    }
})

export default store