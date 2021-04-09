import React from "react";

import '../css/App.css';
import '../css/timer.css';

export default class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            timerStarted: false,
            timerStopped: true,
            hours: 0,
            minutes: 0,
            seconds: 5

        }
    }

    handleTimerStart(e){
        e.preventDefault();
        if(this.state.timerStopped) {
            this.timer = setInterval(() => {
                this.setState({timerStarted: true, timerStopped: false});
                if(this.state.timerStarted) {
                    if(this.state.seconds <= 0){
                        console.log("Tick")
                        this.setState((prevState) => ({ minutes: prevState.minutes - 1, seconds: 59 }))
                    }
                    if(this.state.minutes < 0 && this.state.hours > 0) {
                        console.log("Tock")
                        this.setState((prevState) => ({ hours: prevState.hours - 1, minutes: 59 }))
                    }
                    if(this.state.hours === 0 && this.state.minutes === 0 && this.state.seconds === 0){
                        //alert or something
                        console.log("Timer ended")
                        // stop timer
//                        e.preventDefault();
//                        this.setState({timerStarted: false, timerStopped: true});
//                        clearInterval(this.timer);
                    }
                    this.setState((prevState) => ({seconds: prevState.seconds - 1}));
                }
                
            }, 1000);
        }
//        else {
//            this.state.hours = 0;
//            this.state.minutes = 0;
//            this.state.seconds = 0;
//        }
    }

    handleTimerStop(e){
        e.preventDefault();

        this.setState({timerStarted: false, timerStopped: true});
        clearInterval(this.timer);

    }

    handleTimerReset(){
        this.setState({timerStarted: false, timerStopped: true, seconds: 0, minutes: 0, hours: 0});
        clearInterval(this.timer);
    }

    handleTimerSetMinute(){
        this.setState({timerStarted: false, timerStopped: true});
        clearInterval(this.timer);

        if(this.state.minutes >= 59){
            this.setState(prevState => ({hours: prevState.hours + 1, minutes: 0}));
        }

        else{
            this.setState(prevState => ({minutes: prevState.minutes + 1}))
        }

    }

    handleTimerSetHour(){
        this.setState({timerStarted: false, timerStopped: true});
        clearInterval(this.timer);
        
        this.setState(prevState => ({hours: prevState.hours + 1}))
        

    }

    render(){
        // format time to look like 00:00:00
        var hoursStr = this.state.hours
        var minutesStr = this.state.minutes
        var secondsStr = this.state.seconds
        if (this.state.hours < 10)
            hoursStr = "0" + this.state.hours
        if (this.state.minutes < 10)
            minutesStr = "0" + this.state.minutes
        if (this.state.seconds < 10)
            secondsStr = "0" + this.state.seconds
            
        // render time
        return(
                <div className="time-container">
                    <div className ="current-timer">
                        {hoursStr + ":" + minutesStr + ":" + secondsStr}
                    </div>
                    <div className ="timer-controls">
                        <button className="btn btn-success" onClick={this.handleTimerStart.bind(this)}>Start Timer</button>
                        <button className="btn btn-alert" onClick={this.handleTimerStop.bind(this)}>Stop Timer</button>
                        <button className="btn btn-info" onClick={this.handleTimerSetHour.bind(this)}>Add Hour</button>
                        <button className="btn btn-info" onClick={this.handleTimerSetMinute.bind(this)}>Add minute</button>
                        <button className="btn btn-danger" onClick={this.handleTimerReset.bind(this)}>Reset timer</button>
                    </div>
                </div>
        );
    }
}
