import { configureStore } from "@reduxjs/toolkit";
import drumReducer from '../features/drummer/drumSlice'

export const store = configureStore({
    reducer: {
      drum: drumReducer,
    },
  })
  
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<typeof store.getState>
  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  export type AppDispatch = typeof store.dispatch