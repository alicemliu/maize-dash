import React from "react";

import '../css/App.css';

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newitem: "",
            todolist: ["item1", "item2"]
        };
    }
    addItem(newitem) {
        console.log("Item added")
        this.state.todolist.append(newitem)
    } // addItem()
    
    removeItem() {
        console.log("Item removed")
        this.state.todolist.remove()
    } // removeItem()
    
    render() {
        return (
            <div className = "todo-list">
                <h2>To Do List</h2>
                <input type = "text" name = "name"/>
                <input type = "submit" value = "add" onClick={this.addItem.bind(this)}/>
                <input type = "submit" value = "remove" onClick={this.removeItem.bind(this)}/>
                <ol>
                    <li><p>{this.state.todolist}</p></li>
                </ol>
            </div>
        ) // return
    } // render()
}
