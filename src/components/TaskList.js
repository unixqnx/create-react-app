import React, {Component} from 'react';

import TaskItem from './TaskItem';

class TaskList extends Component {
    
    constructor(props){
        super(props);
        this.state = { List: this.props.List };
    }
    
    render(){
        const items = this.state.List.map((current, index) => <TaskItem key={index} task={current}/>);
        return <table>
            <tbody>
                {items}
            </tbody>
        </table>;
    }
}

export default TaskList;