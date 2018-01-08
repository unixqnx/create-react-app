import React, { Component } from 'react';

class TaskItem extends Component{
    
    constructor(props){
        super(props);

        this.state = {
                    value: this.props.task,
                    editMode:false,
                    editButtonValue: "Edit"
                };

        this.editButtonHandler = this.editButtonHandler.bind(this);
        this.deleteButtonHandler = this.deleteButtonHandler.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    editButtonHandler(e){
        let state = null;
        if(this.state.editMode){
            state = {
                        editMode: false,
                        editButtonValue: "Edit"
                    };
        }else{
            state = {
                        editMode: true,
                        editButtonValue: "Save"
                    };
        }
        this.setState(state);
    }

    deleteButtonHandler(e){
        alert("Delete");
    }

    onChangeValue(e){
        this.setState({value:e.target.value});
    }


    render(){
        return <tr>
                <td>
                    { 
                        (this.state.editMode) 
                        ? <input type='text' value={this.state.value} onChange={this.onChangeValue}/> 
                        : this.state.value 
                    }
                </td>

                <td><input onClick={this.editButtonHandler} type='button' value={this.state.editButtonValue}/></td>
                <td><input onClick={this.deleteButtonHandler} type='button' value='Delete'/></td>
            </tr>;
    }
}

export default TaskItem;