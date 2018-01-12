import {createStore, combineReducers} from "redux";

import TaskAdderReducer from "./reducers/TaskAdderReducer";
import TaskListReducers from "./reducers/TaskListReducer";

export default createStore(combineReducers({TaskAdderReducer, TaskListReducers}), {List:["10", "20", "30", "40", "50"]});


