import { createStore } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
const initialState={}
export default createStore(rootReducer,initialState,composeWithDevTools());