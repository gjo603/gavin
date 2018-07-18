import React, { Component } from 'react';

class Clock extends Component {
    render() {
        return (
            <div className="clock">
                <div className="clock__days">
                    <div className="clock__title">DAYS</div>
                    <div className="clock__amount">20</div>
                </div>
                <div className="clock__hours">
                    <div className="clock__title">Hours</div>
                    <div className="clock__amount">20</div>
                </div>
                <div className="clock__minutes">
                    <div className="clock__title">MINUTES</div>
                    <div className="clock__amount">20</div>
                </div>
                <div className="clock__seconds">
                    <div className="clock__title">SECONDS</div>
                    <div className="clock__amount">20</div>
                </div>
                
            </div>
        )
    }
}

export default Clock;