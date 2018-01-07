import React from 'react';

import List from "./List";
import TaskList from "./TaskList";

 const App = (props)=>{
    return (
    <div>
        <h1>Hello world!</h1>
        <List arr={props.arr}></List>
        <TaskList List={props.arr}/>
    </div>
    );
};

export default App;