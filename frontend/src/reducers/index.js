import counterReducer from "./counter";
import userReducer from './user'
import deviceReducer from './device'

import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    device: deviceReducer,
    user: userReducer
});

export default allReducers;