import { combineSlices } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { managerSlice } from "./managerSlice/managerSlice";
import { parentsSlice } from "./parentsSlice/parentsSlice";


const reducer = combineSlices(managerSlice, parentsSlice);

export const STORE = configureStore({
    reducer: reducer
});
STORE.getState()