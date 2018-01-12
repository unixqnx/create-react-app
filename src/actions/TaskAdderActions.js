// export const AddTask= (task) => {
//     return {type: "TaskAdderActions.AddTask",
//             payload: task};
// }

class TaskAdderActions{
    static get Add(){
        return "TaskAdderActions.AddTask";
    }

    static AddTask(task){
        return {type: TaskAdderActions.Add,
                payload: task};
    }
}

export default TaskAdderActions;