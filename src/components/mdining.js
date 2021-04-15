import React from "react";
import { useState , useEffect } from 'react'

import '../css/App.css';
import '../css/qotd.css';

export default class MDINING extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: "2021/04/14", // temp
            item: "",
            dininghall: "default dining hall", // temp
            options: { weekday: 'long', month: 'long', day: 'numeric' }
        }
    } // constructor

    getDate(){
        // temp
//        this.state.date = "2021/04/14";
        
        const today = new Date();
        const date = today.getFullYear() + '-0' + (today.getMonth()+1) + '-' + today.getDate();
        this.state.date = date;
        console.log("Date: ", this.state.date);
        
    } // getDate()
    
    getHall(item) {
        // temp
        this.state.date = "2021/04/14";
        this.state.dininghall = "temp hall";
        
//        getDate();
        console.log("Searching for hall");
        console.log("Date: ", this.state.date);
        
    } // getHall()

    useEffect() {
      fetch('https://michigan-dining-api.tendiesti.me/v1/foods?name=' + this.state.item + '&date=' + this.state.date + '&meal=DINNER',
        { 'method': 'GET'})
      .then((response) => {
        if(!response.ok) throw Error(response.statusText);
        if(!response.data.foods[0].diningHallMatch) {
            alert("No food matches search term!");
        }
        this.info = response.data.foods[0].diningHallMatch;
        return response.json();
      })
      .then((data) => {
//            getHall(data)
      })
      .catch((error) => console.log(error));
    }
    
    render(){
        // render dining hall
        return(
            <div class = "mdining">
               <h1>MDining Menu Search</h1>
               <p><b>Enter the name of the food:</b></p>
               <input type = "text" name = "name"/>
               <input type = "submit" value = "search" onClick={this.getHall.bind(this)}/>
               <p><b>Available at:</b></p>
               <p>{this.state.dininghall}</p>
            </div>
        );
    } // render()
} // MDINING
