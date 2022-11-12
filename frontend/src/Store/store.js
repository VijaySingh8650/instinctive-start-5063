import {combineReducers, legacy_createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/auth.reducer";
import { googleReducer } from "./Google/google.reducer";

const rootReducer = combineReducers({
    auth:authReducer,
    google:googleReducer,
})
const createCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer,createCompose(applyMiddleware(thunk)))