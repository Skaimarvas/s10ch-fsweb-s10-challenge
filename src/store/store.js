import { reducer } from "./reducers/reducers";
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";

//unutmamak adına combinereducers ekledim

// const  comReducer = combineReducers({
//     deneme: deneme,
//     deneme1: deneme1,
// })

export const store = createStore(reducer, applyMiddleware(thunk));
