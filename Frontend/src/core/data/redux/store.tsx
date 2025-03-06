import { configureStore } from '@reduxjs/toolkit';
import themeSettingSlice from './themeSettingSlice';
import sidebarSlice from './sidebarSlice';

import jobSlice from "../../../job-listing/utils/jobSlice";
import filterSlice from "../../../job-listing/utils/filterSlice";
import toggleSlice from "../../../common/utils/toggleSlice";

const store = configureStore({
  reducer: {
    themeSetting: themeSettingSlice,
    sidebarSlice: sidebarSlice,
    job: jobSlice,
    toggle: toggleSlice,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
