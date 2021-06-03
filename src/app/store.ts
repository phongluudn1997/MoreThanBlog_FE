import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

export default function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
  });

  return store;
}

export const store = configureAppStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
