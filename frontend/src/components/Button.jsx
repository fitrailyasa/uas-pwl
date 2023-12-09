import React from 'react';

function Button({ value, text }) {
    return (
        <Button className={value}>{text}</Button>
    );
}

export default Button;
