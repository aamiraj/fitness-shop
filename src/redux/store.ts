import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import filterReducer from "./features/filter/filterSlice";
import cartReducer from "./features/cart/cartSlice";
import globalReducer from "./features/global/globalSlice";
import { baseApi } from "./api/baseApi";
import storage from "redux-persist/lib/storage";
import { PERSIST, persistReducer, REHYDRATE } from "redux-persist";
import { persistStore } from "redux-persist";

const persistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    filter: filterReducer,
    cart: cartReducer,
    global: globalReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, REHYDRATE],
      },
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
