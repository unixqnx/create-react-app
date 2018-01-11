import React, {Component} from 'react';

import TaskItem from './TaskItem';

class TaskList extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return <table>
            <tbody>
                {this.props.List.map((current, index) => <TaskItem key={current} index={index} task={current} updateTask={this.props.updateTask} deleteTask={this.props.deleteTask}/>)}
            </tbody>
        </table>;
    }
}

export default TaskList;