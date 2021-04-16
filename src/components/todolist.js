import React from "react";

import '../css/App.css';

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: "",
            todolist: []
        };
    }
    addItem = (event) => {
        event.preventDefault();

        //this.state.todolist.append(newitem)
        this.setState({todolist: this.state.todolist.concat(this.state.item)})
        /*
        var newArr = this.state.todolist;
        newArr.push(this.state.item);
        this.setState({todolist: newArr});
        */
    } // addItem()
    
    removeItem = (event) => {
        console.log("Item removed")
        this.setState({todolist: this.state.todolist.splice(1, this.state.todolist.length - 1)})
    } // removeItem()


    setItem = (event) => {
        this.setState({item: event.target.value}); 
    }
    
    render() {
        return (
            <div className = "todo-list">
                <h1>To Do List</h1> 
                <div style={{width: '70%', display: 'inline-block'}}>
                <form onSubmit={this.addItem}>
                    <input type="text" value={this.state.item} onChange={this.setItem} style={{width: "60%", marginRight: '1em' }}/><button type="submit">ADD</button>
                </form>
                </div>
                <button onClick={this.removeItem} style={{display: 'inline=block'}}>REMOVE</button>
                <ol>
                    {this.state.todolist.map((item) => (
                        <li>{item}</li>
                    ))}
                </ol>
            </div>
        ) // return
    } // render()
}

/*
<input type = "text" name = "name"/>
                <input type = "submit" value = "add" onClick={this.addItem.bind(this)}/>
                <input type = "submit" value = "remove" onClick={this.removeItem.bind(this)}/>

                <li><p>{this.state.todolist}</p></li>
*/
