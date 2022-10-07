import React from 'react'

function useLocalStorage(itemName,initialValue){

    const[error,setError]=React.useState(false)
    const[loading,setLoading]=React.useState(true)
    const[item,setItem]=React.useState(initialValue)
  
  React.useEffect(()=>{
    setTimeout(()=>{
  
      try{const localStorageItems = localStorage.getItem(itemName);
      let parsedItems;
    
      if (!localStorageItems) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItems = initialValue;
      } else {
        parsedItems = JSON.parse(localStorageItems);
      }
    
      setItem(parsedItems);
    
      setLoading(false)}
    
    
    catch{
      setError(error)
    }
    },1000)
  })
  
  
  const saveItem = (newItems) => {
   try{ const stringifiedItems = JSON.stringify(newItems);
    localStorage.setItem(itemName, stringifiedItems);
    setItem(newItems);
      }
    catch(error){
      setError(error)
      }
    }
    return{
      item,
      saveItem,
      loading,
      error
    }
  }

  export {useLocalStorage}