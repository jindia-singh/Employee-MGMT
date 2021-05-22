import { combineReducers } from 'redux'
import getEmployeeBySearch from "../getEmployeeBySearch";

const rootReducer = combineReducers({
    GetEmployeeBySearch:getEmployeeBySearch
});

export default rootReducer;