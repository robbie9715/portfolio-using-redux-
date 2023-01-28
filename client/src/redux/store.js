import { createStore, applyMiddleware } from "redux";
import AuthReducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';



const middleware = [thunk];

const Store = createStore(
    AuthReducer,
    composeWithDevTools(applyMiddleware(...middleware))
    );

export default Store;