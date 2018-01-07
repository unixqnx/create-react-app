import React, { Component } from 'react';

class TaskItem extends Component{
    
    constructor(props){
        super(props)
    }

    render(){
        return <tr>
                <td><input type='text' value={this.props.task}/></td>
                <td><input type='button' value='Edit'/></td>
                <td><input type='button' value='Delete'/></td>
            </tr>;
    }
}





export default TaskItem;