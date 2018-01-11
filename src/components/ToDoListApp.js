import React, {Component} from 'react';

import List from "./List";
import TaskList from "./TaskList";
import TaskAdder from "./TaskAdder";

 class ToDoListApp extends Component{
    
    constructor(props){
        super(props);
        this.state = { List: this.props.arr };
        this.updateTask = this.updateTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.addTask = this.addTask.bind(this);
    }
    
    updateTask(value, index){
        this.setState(prevState =>{
            prevState.List[index] = value;
            return {List: prevState.List};
        });
    }

    deleteTask(index){
        this.setState((prevState) => {
            prevState.List.splice(index, 1);
            return {List: prevState.List};
        });
    }

    addTask(task){
        this.setState((prevState, props)=>{
            prevState.List.push(task);
            return {List: prevState.List};
        });
    }

    render(){
        return <div>
            <h1>Hello world!</h1>
            <List arr={this.props.arr}></List>
            <TaskAdder List={this.state.List} addTask={this.addTask}/>
            <TaskList List={this.state.List} updateTask={this.updateTask} deleteTask={this.deleteTask}/>
        </div>;
    }
};

export default ToDoListApp;