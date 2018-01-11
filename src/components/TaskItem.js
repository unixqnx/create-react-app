import React, { Component } from 'react';

class TaskItem extends Component{
    
    constructor(props){
        super(props);
        this.state = { editMode: false, 
                       value:this.props.task
                    };
        this.editButtonHandler = this.editButtonHandler.bind(this);
        this.deleteButtonHandler = this.deleteButtonHandler.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this._calculateButton = this._calculateButton.bind(this);
    }

    _calculateButton (){
        this.setState(prevState  => {
            return {editMode: !prevState.editMode};
        })
    }

    editButtonHandler(e){
        if(this.state.editMode){
            this.props.updateTask(this.state.value, this.props.index);
        }
        this._calculateButton ();
    }

    deleteButtonHandler(e){
        if(this.state.editMode){
            this.setState((prevState, props) => {
                return {value: props.task};
            });
            this._calculateButton ();
        }else{
            this.props.deleteTask(this.props.index);
        }
    }

    onChangeValue(e){
       this.setState({value:e.target.value});
    }

    render(){
        let editButtonValue = null;
        let deleteButtonValue = null;

        if(this.state.editMode){
            editButtonValue = 'Save';
            deleteButtonValue = 'Cancel';

        }else{
            editButtonValue = 'Edit';
            deleteButtonValue = 'Delete';
        }

        return <tr>
                { 
                    (this.state.editMode) 
                    ? <td><input type='text' value={this.state.value} onChange={this.onChangeValue}/> </td>
                    : <td> <span>{this.props.task}</span></td>
                }

                <td><input onClick={this.editButtonHandler} type='button' value={editButtonValue}/></td>
                <td><input onClick={this.deleteButtonHandler} type='button' value={deleteButtonValue}/></td>
                <td>{this.props.index}</td>
            </tr>;
    }
}

export default TaskItem;














// import React, { Component } from 'react';

// class TaskItem extends Component{
    
//     constructor(props){
//         super(props);
//         this.state = {
//                     value: this.props.task,
//                     editMode: false,
//                 };
//         this.editButtonHandler = this.editButtonHandler.bind(this);
//         this.deleteButtonHandler = this.deleteButtonHandler.bind(this);
//         this.onChangeValue = this.onChangeValue.bind(this);
//         this._calculateButton = this._calculateButton.bind(this);
//     }

//     _calculateButton (){
//         this.setState(prevState  => {
//             return {editMode: !prevState.editMode};
//         })
//     }

//     editButtonHandler(e){
//         if(this.state.editMode){
//             this.props.updateFun(this.state.value, this.props.index);
//         }
//         this._calculateButton ();
//     }

//     deleteButtonHandler(e){
//         if(this.state.editMode){
//             this.setState((prevState, props) => {
//                 return {value: props.task};
//             });
//             this._calculateButton ();
//         }else{
//             this.props.deleteFun(this.props.index);
//         }
//     }

//     onChangeValue(e){
//        this.setState({value:e.target.value});
//     }

//     render(){
//         let editButtonValue = null;
//         let deleteButtonValue = null;

//         if(this.state.editMode){
//             editButtonValue = 'Save';
//             deleteButtonValue = 'Cancel';

//         }else{
//             editButtonValue = 'Edit';
//             deleteButtonValue = 'Delete';
//         }

//         return <tr>
//                 { 
//                     (this.state.editMode) 
//                     ? <td><input type='text' value={this.state.value} onChange={this.onChangeValue}/> </td>
//                     : <td> <span>{this.props.task}</span></td>
//                 }

//                 <td><input onClick={this.editButtonHandler} type='button' value={editButtonValue}/></td>
//                 <td><input onClick={this.deleteButtonHandler} type='button' value={deleteButtonValue}/></td>
//                 <td>{this.props.index}</td>
//             </tr>;
//     }
// }

// export default TaskItem;