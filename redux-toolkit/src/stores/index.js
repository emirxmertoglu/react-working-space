import { configureStore } from "@reduxjs/toolkit";
import todo from "./todo";
import auth from "./auth";

const store = configureStore({
  reducer: {
    todo,
    auth,
  },
});

export default store;
