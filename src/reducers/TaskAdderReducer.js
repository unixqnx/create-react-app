import TaskAdderActions from '../actions/TaskAdderActions';

const TaskAdderReducer = (state, action) => {
    switch(action.type){
        case TaskAdderActions.Add:
            state.List.push(action.payload);
            state =  {...state};
        break;
    }
    return state;
};

export default TaskAdderReducer;