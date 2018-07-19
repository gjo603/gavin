import React, { Component } from 'react';


const Button = (title, callback) => {
    return (
        <button className="button" onClick={callback}>
            Generate Countdown
        </button>
    )
}

export default Button;