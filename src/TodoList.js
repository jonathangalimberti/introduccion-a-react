import React from 'react'
import './TodoList.css'
function TodoList(props) {
    return (
      <section>
        <ul className='contenedor-lista'>
          {props.children}
        </ul>
      </section>
    );
  }
export {TodoList}