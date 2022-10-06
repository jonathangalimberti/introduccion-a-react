import React from 'react'
import './TodoCounter.css'

function TodoCounter({totalTodos,completedTodos}){
    return(
        <h1 className='titulo'>Completaste {completedTodos} de {totalTodos} tareas</h1>
    )
}

export {TodoCounter}
