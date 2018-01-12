// export const EditTask = (index, newValue) => {
//     return {type: "TaskListActions.EditTask",
//             payload: newValue,
//             index: index,
//     }
// };

// export const DeleteTask = (index) => {
//     return {type: "TaskListActions.DeleteTask",
//             payload: index}
// };

class TaskListActions{
    static get Delete(){
        return "TaskListActions.DeleteTask"
    }
    
    static get Edit(){
        return "TaskListActions.EditTask"
    }   
    
    static DeleteTask(index) {
        return {type: TaskListActions.Delete,
                payload: index}
    }

    static EditTask(index, newValue) {
        return {type: TaskListActions.Edit,
                payload: newValue,
                index: index,
        }
    }
}

export default TaskListActions;