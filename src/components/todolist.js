import React from "react";

import '../css/App.css';
import '../css/todolist.css';

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: "",
            todolist: []
        };
    } // constructor()
    
    addItem = (event) => {
        // prevent page from refreshing
        event.preventDefault();

        // add item to todolist
        this.setState({todolist: this.state.todolist.concat(this.state.item)})
        
        // clear textbox after
        this.setState({item: ""})
        
    } // addItem()
    
    removeItem = (event) => {
        // remove item from todolist
        this.setState({todolist: this.state.todolist.splice(1, this.state.todolist.length - 1)})
    } // removeItem()


    setItem = (event) => {
        // set item equal to input from textbox
        this.setState({item: event.target.value}); 
    } // setItem()
    
    render() {
        return (
            <div className = "todo-list">
                <h1>To Do List</h1>
                <form onSubmit={this.addItem}>
                    <div id="gap"></div>
                    <input type="text" value={this.state.item} onChange={this.setItem}/>
                <div id="gap"></div>
                    <button type="submit">ADD TO LIST</button>
                </form>
                <div id="gap"></div>
                <button onClick={this.removeItem}>REMOVE TOP ITEM</button>
                <ol>
                    {this.state.todolist.map((item) => (
                        <li>{item}</li>
                    ))}
                </ol>
            </div>
        ) // return
    } // render()
}
