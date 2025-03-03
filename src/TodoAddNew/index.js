//import React from 'react';
import './TodoAddNew.css';

function TodoAddNew({
  searchValue, 
  setSearchValue, 
  isDisabled, 
  setIsDisabled,
  onAddNew, 
}){

  return (
    <div className='container-add-todo container-add-todo-hidden'>
        <div className='container-input-add-todo'>
            <input 
              placeholder="Type the task..." 
              className='input-add-todo' 
              value={searchValue}
              onChange={(event) => {
                  setSearchValue(event.target.value);
                  setIsDisabled(event.target.value.trim() === ''); // Deshabilita el botón si el input está vacío
              }}
              
            />
            <button className={`btn-add-todo ${isDisabled ? 'btn-disabled' : 'btn-enabled'}`} 
                disabled={isDisabled} 
                onClick={onAddNew}
            >
                Add task
            </button>
        </div>
      </div>
      
    );
  }
  
  export { TodoAddNew };