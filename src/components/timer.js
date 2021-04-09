import React from "react";

import '../css/App.css';
import '../css/timer.css';


export default class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            timerStarted: false,
            timerStopped: false,
            hours: 0,
            minutes: 25,
            seconds: 0
        }
        this.handleTimerStart = this.handleTimerStart.bind(this);
    }

    handleTimerStart(e){
        e.preventDefault();

        setInterval(() => {
            if(this.state.timerStopped) {
                this.setState({timerStarted: true, timerStopped: false});
            }
        }, 1000);
    }

    render(){
        return(
            <div className="time-container">
                <div className="current-timer">
                    {this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds}
                </div>
                <div className="timer-controls">
                    <button className="btn btn-success">Start Timer</button>
                    <button className="btn btn-alert">Stop Timer</button>
                    <button className="btn btn-info">Set Timer</button>
                    <button className="btn btn-danger">Reset Timer</button>
                </div>
            </div>
        );
    }
}