import React, {Component} from 'react';

class TaskAdder extends Component{
    constructor(props){
        super(props);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.state = {value: ''};
    }

    onChangeValue(e){
        this.setState({value:e.target.value});
    }

    onAdd(e){
        this.props.addTask(this.state.value)
        this.setState({value: ''});
    }

    render(){
        return <div>
            <input type='text' onChange={this.onChangeValue} value={this.state.value}/>
            <input type='button' value='Add' onClick={this.onAdd}/>
        </div>;
    }

}

export default TaskAdder;
