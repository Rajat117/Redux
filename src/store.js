import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
const persistConfig = {
    key: "root",
    storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);

export default () => {
    return { store, persistor };
};
