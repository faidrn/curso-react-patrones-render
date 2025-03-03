import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';


function TodoSearch(){
  const {
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext);

  return (
      <div className='container-todo-search'>
        <input 
          placeholder="Search..." 
          className='input-search' 
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000" className='icon-search'>
          <path d="M787.64-137.33 530.87-394.1q-29.9 25.86-69.4 40.06-39.51 14.19-81.78 14.19-102.1 0-172.82-70.68-70.71-70.68-70.71-171.84 0-101.17 70.68-171.91t171.99-70.74q101.31 0 172.03 70.69 70.73 70.7 70.73 171.9 0 42.3-14.39 81.84-14.38 39.54-40.53 70.69l257.17 256.1-36.2 36.47ZM379.28-390.1q80.41 0 136.23-55.96 55.82-55.97 55.82-136.38t-55.82-136.37q-55.82-55.96-136.23-55.96-80.75 0-136.81 55.96t-56.06 136.37q0 80.41 56.06 136.38 56.06 55.96 136.81 55.96Z"/>
        </svg>
      </div>
      
    );
  }
  
  export { TodoSearch };