import React from 'react'
import './CreateTodoButton.css'

function CreateTodoButton(props){
    const onCLickButton = ()=>{
        props.setOpenModal (prevState => !prevState)
    }

    return(
        <button className='button'
        onClick={onCLickButton}> + </button>
    )
}

export {CreateTodoButton}