import React from "react";

import '../css/App.css';
import '../css/mdining.css';

const moment= require('moment') 

export default class MDining extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: null,
            item: null,
            meal: 'BREAKFAST',
            diningHalls: [],
            matches: 1,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    componentDidMount() {
        const today = new Date();
        this.setState({ date: moment(today).format('YYYY-MM-DD') });
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }  

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ diningHalls: [] });
        this.setState({ matches: 0 });
        console.log('https://michigan-dining-api.tendiesti.me/v1/foods?name=' + encodeURIComponent(this.state.item) + '&date=' + this.state.date + '&meal=' + this.state.meal);
        fetch('https://michigan-dining-api.tendiesti.me/v1/foods?name=' + encodeURIComponent(this.state.item) + '&date=' + this.state.date + '&meal=' + this.state.meal,
        { 'method': 'GET' })
        .then(response => response.json())
        .then(data => {
            const date = this.state.date;
            for (const [key, value] of Object.entries(data.foods[0].diningHallMatch)) {
                var hallMatches = []
                if ((value.mealTime[this.state.date].mealNames).includes(this.state.meal)) {
                    hallMatches.push(key);
                }
            } 
            this.setState({ diningHalls: hallMatches });
            this.setState({ matches: hallMatches.length });
            console.log(this.state.diningHalls);
            console.log(this.state.matches);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    
    render() {
        return(
            <div>
                <h1>MDining Menu Search</h1>
                <form onSubmit={this.handleSubmit}>
                   <label><h2>Search for food:</h2>
                       <input type="text" value={this.state.item} name="item" onChange={this.handleChange}/>
                   </label>
                   <label>
                       <select value={this.state.meal} name="meal" onChange={this.handleChange}>
                            <option value="BREAKFAST">BREAKFAST</option>
                            <option value="LUNCH">LUNCH</option>
                            <option value="DINNER">DINNER</option>
                        </select>
                   </label>
                   <br/>
                   <br/>
                   <button type="submit">SEARCH</button>
                </form>
                { this.state.diningHalls.length > 0 &&
                <div>
                    <br/>
                    <h3>Available at:</h3>
                    <ul>
                        { this.state.diningHalls.map((hall) => { return <p><li>{hall}</li></p>; })}
                    </ul> 
                </div> }
                { this.state.matches < 1 && <div><br/><p>No matches found!</p></div>}
            </div>
        );
    }
    }
