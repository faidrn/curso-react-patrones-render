import React from "react";


function useLocalStorage(itemName, initialValue){

  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false); // Cambia a tru para activar la simulación de error


  //estados de carga y error
  React.useEffect(() => {
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName);
  
        let parsedItem;
  
        if (!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch(error){
        setLoading(false);
        setError(error);
      }
    }, 2000);
  }, []); // esto evita q la página se refresque cad 2 segundos




  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));

    setItem(newItem);
  };

  return {
    item, 
    saveItem, 
    loading, 
    error,
  };
}

export { useLocalStorage };


// localStorage.removeItem('TODOS_V1');

/* const defaultTodos = [
  { text: 'Cortar cebolla', status: 'done'},
  { text: 'Tomar el curso de Intro a React.js', status: 'doing'},
  { text: 'Llorar con la Llorona', status: 'listed'},
  { text: 'LALALALA', status: 'listed'},
  { text: 'Usar estados derivados', status: 'done'},
];

 localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));  */