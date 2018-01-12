import React, {Component} from 'react';
import { connect } from 'react-redux';

import List from "./List";
import TaskList from "./TaskList";
import TaskAdder from "./TaskAdder";
import ErrorShower from "./ErrorShower";

import TaskAdderActions from "../actions/TaskAdderActions";
import TaskListActions from "../actions/TaskListActions";

 class ToDoListApp extends Component{
    
    constructor(props){
        super(props);
        this.state = { List: this.props.arr, Error:'' };
        this.updateTask = this.updateTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.getErrortext = this.getErrortext.bind(this);
    }
    
    updateTask(task, index){
        const error = this.getErrortext(task);
        this.setState({Error:error});
        if(error){
            return false;
        }       
        this.setState(prevState =>{
            prevState.List[index] = task;
            return {List: prevState.List};
        });
        return true;
    }

    addTask(task){
        const error = this.getErrortext(task);
        this.setState({Error:error});
        if(error){
            return false;
        }
        this.setState((prevState, props)=>{
            prevState.List.push(task);
            return {List: prevState.List};
        });
        return true;
    }

    deleteTask(index){
        this.setState((prevState) => {
            prevState.List.splice(index, 1);
            return {List: prevState.List};
        });
    }

    getErrortext(value){
        if(!(this.state.List.indexOf(value) == -1)){
            return 'TASK ALREADY EXISTS!';
        }
        if(!value){
            return 'PLEASE ENTER TASK!';
        }
        return null;
    }


    render(){
        return <div>
            <h1>Hello world!</h1>
            {/* <List arr={this.props.arr}></List> */}
            <TaskAdder List={this.state.List} error={this.state.Error} addTask={this.addTask} repeatValueValidator={this.repeatValueValidator}/>
            <ErrorShower error={this.state.Error}/>
            <TaskList List={this.state.List} error={this.state.Error} updateTask={this.updateTask} deleteTask={this.deleteTask} repeatValueValidator={this.repeatValueValidator}/>
        </div>;
    }
};

const mapStateToProps = (props) => {
    return { List: props.List };
};

const mapDispatchToProps = (dispatch) => {
    return { AddTask: (task) => dispatch(TaskAdderActions.AddTask(task)),
             EditTask: (index, newValue) => dispatch(TaskListActions.EditTask(index, newValue)),
             DeleteTask: (index) => dispatch(TaskListActions.DeleteTask(index))
           };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListApp);
//export default ToDoListApp;