import TaskListActions from "../actions/TaskListActions";

const TaskListReducer = (state, action) => {
    switch(action.type){
        case TaskListActions.Edit:
            state.List[action.index] = action.payload;
            state = {...state}
        break;
        case TaskListActions.Delete:
            state.List.splice(action.payload, 1);
            state = {...state};
        break;
    }
    return state;
};

export default TaskListReducer;