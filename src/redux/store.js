import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./language/languageSlice";

const store = configureStore({
  reducer: {
    language: languageSlice,
  },
});

export default store;
