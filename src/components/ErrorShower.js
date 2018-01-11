import React from 'react';

const ErrorShower = (props) => {
    return <div className='error-text'>
        <span className='error-text'>{props.error}</span>
    </div>;
};

export default ErrorShower;