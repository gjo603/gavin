import React, { Component } from 'react';

class Clock extends Component {
    render() {
        return (
            <div className="clock">
                <div className="clock__days clock__box">
                    <div className="clock__title">DAYS</div>
                    <div className="clock__amount">20</div>
                </div>
                <div className="clock__hours clock__box">
                    <div className="clock__title">HRS</div>
                    <div className="clock__amount">20</div>
                </div>
                <div className="clock__minutes clock__box">
                    <div className="clock__title">MINS</div>
                    <div className="clock__amount">20</div>
                </div>
                <div className="clock__seconds clock__box">
                    <div className="clock__title">SECS</div>
                    <div className="clock__amount">20</div>
                </div>
                
            </div>
        )
    }
}

export default Clock;