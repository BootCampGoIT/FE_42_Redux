import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

import { rootReducer } from "./rootReducer";

const store = createStore(rootReducer, composeWithDevTools());
export const persistor = persistStore(store);

export default store;
