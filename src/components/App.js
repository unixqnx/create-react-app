import React from 'react';
import List from "./List";

 const App = (props)=>{
    return (
    <div>
        <h1>Hello world!</h1>
        <List arr={props.arr}></List>
    </div>
    );
};

export default App;