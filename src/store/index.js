import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import user from "./userredux";
import saga from "./sagaindex";
import bundle from "./bundleredux"
import taskScript from "./taskScriptredux"
 
 
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user","bundle",'taskScript'],
};
const reducer = combineReducers({
  user,bundle,taskScript
});
const persistedReducer = persistReducer(persistConfig, reducer);
let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false

    }),
    sagaMiddleware,
  ],
});
sagaMiddleware.run(saga);

const persistor = persistStore(store);

export { persistor, store };
