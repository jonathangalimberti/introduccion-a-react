import React from 'react'
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'

function TodoSearch(){
    const {searchValue, setSearchValue}=React.useContext(TodoContext)

    const onSearchValue = (event) =>{
        console.log(event.target.value)
        setSearchValue(event.target.value)

    };

    return(
        <input
            className='input'
            value={searchValue}
            placeholder='Cebolla'
            onChange={onSearchValue}
             />
    );
}

export {TodoSearch}