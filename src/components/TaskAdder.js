import React, {Component} from 'react';

class TaskAdder extends Component{
    constructor(props){
        super(props);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.state = {value: '', 
                      hasError: false};
    }

    onChangeValue(e){
        this.setState({value:e.target.value});
    }

    onAdd(e){
        this.setState(()=>{
            if(this.props.addTask(this.state.value)){
                return {value: '', hasError: false};
            }
            return {hasError: true};
        });
    }

    render(){
        return <div>
            <input type='text' className={this.state.hasError ? 'error':''} onChange={this.onChangeValue} value={this.state.value}/>
            <input type='button' value='Add' onClick={this.onAdd}/>
        </div>;
    }

}

export default TaskAdder;
