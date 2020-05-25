import React, {Component} from 'react';
import {Todo, AddTodo, Title} from "./components"

import style from "./App.module.css"

class App extends Component {
  state = { 
    todos:[]
   }

   addTodo = (todoItem) => {
     const newTodo = {
       id:this.state.todos.length +1,
       todo:todoItem,
       completed:false
     }
     this.setState({todos:[...this.state.todos,newTodo]})
   }

   delTodo = (id) => {
      this.setState({
        todos:this.state.todos.filter((todo) => (todo.id != id))
      })
   }

   handleChange = (id) => {
     console.log(id)
     this.setState({
       todos:this.state.todos.map((todo) => {
         if (todo.id == id) {
           todo.completed = !todo.completed
         }
         return todo
       })
     })
   }
  render() { 
    return ( 
      <div className={style.container}>
        <Title />

        <AddTodo 
        addTodo={this.addTodo}
        activeItem={this.state.activeItem}/>

        <Todo 
        delTodo={this.delTodo}
        todos={this.state.todos}
        handleChange={this.handleChange}/>
      </div>
     );
  }
}


export default App;
