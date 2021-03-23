import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./rootReducer";

const store = createStore(rootReducer, composeWithDevTools());

export default store;

console.log(store);

// const store = {
//     state: {
//         a: "dfgh"
//     },
//     getState(){
//         return this.state
//     },
//     dispatch(data){
//         this.state = {...data}
//     }

// }
