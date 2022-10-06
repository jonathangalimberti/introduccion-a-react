import React from 'react'
import { AppUI } from "./AppUI";
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

  if(searchValue === 0){
    searchedTodos= todos
  }else {
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text ===text)
    const newtodos=[...todos]
    newtodos[todoIndex].completed =true
    setTodos(newtodos)
    }
  

  return (
    <AppUI
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodos = {completeTodos}
    
    />
  )
}

export default App;
