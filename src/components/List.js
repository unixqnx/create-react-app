import React from 'react';

const List = (props) =>{

    let items = props.arr.map(
        (current, index, array) => <li key='index'>{current}</li>
        );

    return (
    <ol>
        {items}
    </ol>
    );
};

export default List;