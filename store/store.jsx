import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import reducer from "../reducers/combineReducers";
import { reducerPostsList } from "../reducers/reducerPostsList";

export const store = createStore(reducerPostsList, applyMiddleware(thunk));
