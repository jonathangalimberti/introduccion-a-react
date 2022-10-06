import React from 'react'
import {TodoCounter} from './TodoCounter.js'
import {TodoSearch} from './TodoSeach'
import {TodoList} from './TodoList'
import {CreateTodoButton} from './CreateTodoButton'
import {TodoItem} from './TodoItem'
import './App.css';

let todos = [
  {text:'cortar cebolla', completed:false},
  {text:'tomar curso react', completed:false},
  {text:'llorar con la llorona', completed:false},
  {text: 'descansar de Juan DC', completed:false}
]

function App() {
  return (
    <React.Fragment >
      <TodoCounter className='contenedor-counter' />
      <TodoSearch className='contenedor-search'/>
     
       <TodoList className='contenedor-list'/>
        {todos.map(todo=>(<TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>))}
      <TodoList />
      <CreateTodoButton className='contenedor-button'/> 
      
    </React.Fragment>
  )
}

export default App;
