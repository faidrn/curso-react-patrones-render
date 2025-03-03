import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos }){

    return (
      <h1 className='TodoCounter'>
        {totalTodos > completedTodos ? (
          <>
            Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
          </>
        ) : (
          <>
            <span>¡Felicitaciones!</span> Has completado todos los TODOs
          </>
        )}
      </h1>
    );
  }
  
  export { TodoCounter };