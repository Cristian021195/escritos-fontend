import { createStore, combineReducers } from "redux";
import { fontReducer } from "../Reducers/fontReducer";
import { notificationReducer } from "../Reducers/notificationReducer";
import {themeReducer} from '../Reducers/themeReducer';

const reducers = combineReducers({
    theme: themeReducer,
    notification: notificationReducer,
    font: fontReducer
})

//export const store = createStore(reducers , applyMiddleware(thunk))
//export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export const store = createStore(reducers)