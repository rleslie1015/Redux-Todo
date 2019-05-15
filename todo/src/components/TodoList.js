import React from "react";
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from "../actions";

class TodoList extends React.Component {
    state = {
        newTodo: ""
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: ""})
    }
    toggleTodo = id => {
        this.props.toggleTodo(id);
       
    }
    render(){
        return (
            <div>
                <h1>Leslie's Redux Todo App</h1>

                <div className="todoList">
                    <ul>
                    {this.props.todos.map((todo) =>
                        (<li onClick = {() => this.toggleTodo(todo.id)} key={todo.id} style={{
                            textDecoration:
                              todo.completed === true ? "line-through" : "none"
                          }} >{todo.value} </li>))}
                    </ul>
                </div>

                <input 
                type="text"
                name="newTodo"
                value={this.state.newTodo}
                onChange={this.handleChange}>
                </input>

                <button onClick={this.addTodo}>Add Todo</button>
              
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
}

export default connect(mapStateToProps, {addTodo, toggleTodo})(TodoList); 