import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "../../job-listing/utils/jobSlice";
import filterSlice from "../../job-listing/utils/filterSlice";
//import toggleReducer from "./toggleSlice"; // ✅ Ensure you import the reducer


import toggleSlice from "./toggleSlice";
/*import employerSlice from "../features/employer/employerSlice";
import employerFilterSlice from "../features/filter/employerFilterSlice";
import candidateSlice from "../features/candidate/candidateSlice";
import candidateFilterSlice from "../features/filter/candidateFilterSlice";
import shopSlice from "../features/shop/shopSlice";
*/
export const store = configureStore({
    reducer: {
        job: jobSlice,
        toggle: toggleSlice,
        filter: filterSlice,
    /*    toggle: toggleReducer, // ✅ Must match the key used in `useSelector`
        employer: employerSlice,
        employerFilter: employerFilterSlice,
        candidate: candidateSlice,
        candidateFilter: candidateFilterSlice,
        shop: shopSlice,*/
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
