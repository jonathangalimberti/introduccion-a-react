import React from "react";

import {TodoCounter} from '../TodoCounter'
import {TodoSearch} from '../TodoSeach'
import {TodoList} from '../TodoList'
import {CreateTodoButton} from '../CreateTodoButton'
import {TodoItem} from '../TodoItem'

function AppUI(
    {completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodos ,}
){
    return(
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
          {searchedTodos.map(todo=>(
          <TodoItem key={todo.text}
           text={todo.text} 
           completed={todo.completed}
           onComplete = {()=> completeTodos(todo.text)
          }
           />))}
        <TodoList />
        <CreateTodoButton className='contenedor-button'/> 
        
      </React.Fragment>
    )
}

export {AppUI}