import { ArticleSharp } from "@mui/icons-material";
import { rootReducer } from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducer,
});

export default store;

