import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos"; //import Todos class!
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
// import { v4 as uuidv4 } from "uuid"; //Uuid is a random id generator on the fly
import axios from 'axios'

import "./App.css";


class App extends React.Component {
  //an ES6 class way to define a component!
  state = {
    todos: []
      //An array of other objects
  };

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=0')
    .then(res => this.setState({todos: res.data}))
  }

  //Toggle Complete
  markComplete = id => {
    // console.log(id)
    this.setState({
      todos: this.state.todos.map(todo => {
        //map and look for the matching id
        if (todo.id === id) {
          todo.completed = !todo.completed; //toggle to opposite of it!
        }
        return todo;
      })
    });
  };

  //delete Todo
  delTodo = id => {
    //make a copy of the state of app except this time without the passed id
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res =>this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      }));
  };

  // Add Todo
  addTodo = title => {
    // this.setState()
    // console.log(title);  //title was checked here!
    // const newTodo = {
    //   //the newTodo consists of these attributes, title that is passed on
    //   id: uuidv4(),
    //   title: title,
    //   completed: false
    // };

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos:
         [...this.state.todos, res.data] }));

    //this adds a new Todo by
    //copying existing and adding newTodo
  };

  render() {
    // console.log(this.state.todos)
    return (
      <Router>  {/*Because Router is highest parent*/}
        <div className="App">
        <div className="container">
        <Header /> {/*Header Component*/}
        <Route
          exact path="/"  //{/*This single path will load both of these components*/}
          render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} /> {/*This is the Add To Do*/}
              <Todos
                todos={this.state.todos} //Todos component
                markComplete={this.markComplete}
                delTodo={this.delTodo}
              />
            </React.Fragment>
          )}
        />
        <Route path="/about" component = {About} />
        </div>

        </div>
      </Router>
    );
  }
}

export default App;
