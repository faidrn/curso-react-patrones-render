import React from 'react';
import './TodosError.css';

function TodosError(){

  return (
      <div className='container-error'>
        <div id='error-box'> 
          <div className="face2">
            <div className="eye"></div>
            <div className="eye right"></div>
            <div className="mouth sad"></div>
          </div>
          <div className="shadow move"></div>
          <div className="message">
            <h1 className="alert title">Error!</h1>
            <p className='error-message'>oh no, something went wrong.</p>
            <p  className='error-message'>Please, refresh the page.</p>
          </div>
        </div>
      </div>
      
    );
  }
  
  export { TodosError };