import React, { Component } from 'react';


const ChangeDate = (title, callback) => {
    return (
        <button className="change-date" onClick={callback}>
        <i className="far fa-calendar-alt"></i>    
        Change Date
        </button>
    )
}

export default ChangeDate;