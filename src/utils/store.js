import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import homeSlice from "./homeSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        home: homeSlice,
    }
})

export default store