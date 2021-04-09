import React from "react";

import '../css/App.css';

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: ["default item"]
        }
    }
    addItem() {
        console.log("Item added")
        
    } // addItem()
    
    render() {
        return (
            <div className = "todo-list">
                <p>Todo</p>
                <button onClick = {this.addItem.bind(this)}>Add item</button>
                <li for todo in todoList>
                    1
                </li>
            </div>
        ) // return
    } // render()
}
