import React, { Component} from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/Header'
class App extends Component {

  state = {
    todos : [
      {
        id: 1,
        title: 'take out the trash',
        completed: false
      }, 
      {
        id: 2,
        title: 'dinner with hubby',
        completed: false
      }, 
      {
        id: 3,
        title: 'meeting with bawse',
        completed: false
      }
    ]
  }

  //use arrow function to use this.props
  //else we have to use this.markComplete.bind()
  //toggle complete
  markComplete = (id) => {
    this.setState({ todos : this.state.todos.map(todo => {
        if(todo.id === id){
          //if false change to true and vice versa
          todo.completed = !todo.completed 
          }
        return todo;
      })
    })
  }

  //delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id 
    !== id)] });
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Todos todos = {this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>  
      </div>
    );
  }
}

export default App;