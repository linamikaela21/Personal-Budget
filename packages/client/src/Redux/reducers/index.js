import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  debug: true,
  storage,
};

// Discomment this line to clean the persist store (reducers)
// storage.removeItem('root')

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
