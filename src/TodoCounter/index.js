import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }){

  return (
      <h1 
        className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}
      >
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