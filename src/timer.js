import React from "react";
import ReactDOM from "react-dom";
import './css/timer.css';


let root = document.getElementById("root");

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Layout />, root);
});


class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            timerStarted: false,
            timerStopped: false,
            hours: 0,
            minutes: 25,
            seconds: 0

        }
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
            <div className="container">
                <b>Timer</b>
                <div className="time-container">
                    <div className ="current-timer">
                        {this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds}
                    </div>
                    <div className ="timer-controls">
                        <button className="btn btn-success">Start Timer</button>
                        <button className="btn btn-alert">Stop Timer</button>
                        <button className="btn btn-info">Set timer</button>
                        <button className="btn btn-danger">Reset timer</button>
                    </div>
                </div>
            </div>
        );
    }
}