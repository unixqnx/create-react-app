import React, {Component} from 'react';

import TaskItem from './TaskItem';

class TaskList extends Component {
    
    constructor(props){
        super(props);
        //this.setState({List:[100, 200, 300]});
        this.state = { List: this.props.List };
    }
    
    render(){
// let ss = this.state.List.map((current, index) => <TaskItem key={index} task={current}/>);
        return <table>
            <tbody>
                {this.state.List.map((current, index) => <TaskItem key={index} task={current}/>)}
            </tbody>
        </table>;
    }
}

export default TaskList;