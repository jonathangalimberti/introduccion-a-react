import React from 'react'
import {TodoCounter} from './TodoCounter.js'
import {TodoSearch} from './TodoSeach'
import {TodoList} from './TodoList'
import {CreateTodoButton} from './CreateTodoButton'
import {TodoItem} from './TodoItem'
/* import './App.css';
 */
let defaultTodos = [
  {text:'cortar cebolla', completed:false},
  {text:'tomar curso react', completed:false},
  {text:'llorar con la llorona', completed:false},
  {text: 'descansar de Juan DC', completed:false}
]

function App() {

  const [todos, setTodos]= React.useState(defaultTodos)
  const [searchValue, setSearchValue]= React.useState('')
  const completedTodos=todos.filter(todo =>!!todo.completed).length
  const totalTodos=todos.length
  let searchedTodos=[]

  if(searchValue == 0){
    searchedTodos= todos
  }else {
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  return (
    <React.Fragment >
      <TodoCounter 
      className='contenedor-counter' 
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      />
      <TodoSearch 
      className='contenedor-search'
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
     
       <TodoList className='contenedor-list'/>
        {searchedTodos.map(todo=>(<TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>))}
      <TodoList />
      <CreateTodoButton className='contenedor-button'/> 
      
    </React.Fragment>
  )
}

export default App;
