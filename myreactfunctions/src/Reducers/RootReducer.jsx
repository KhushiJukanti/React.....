import { combineReducers } from "redux";

import CounterReducer from "./CounterReducer";
import ContactReducer from "./ContactReducer";

const rootReducer = combineReducers({counter:CounterReducer, contacts:ContactReducer})

export default rootReducer