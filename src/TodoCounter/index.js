import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos }){
console.log(completedTodos);
    return (
      <h1 className='TodoCounter'>
        {totalTodos === 0 ? (
          <p>No hay TODOs por completar</p>
        ) : totalTodos === completedTodos ? (
          <p><span>¡Felicitaciones!</span> Has completado todos los TODOs</p>
        ) : (
          <p>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs</p>
        )}
      </h1>
    );
  }
  
  export { TodoCounter };