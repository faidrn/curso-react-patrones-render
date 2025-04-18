import React from 'react';
import './TodoListAdd.css';

function TodoListAdd(props){
  //const renderFunc = props.children || props.render;

    return (
      
      <div className='container-list-add'>
        <h2>
          To do
        </h2>

        {props.loading && props.onLoading()}

        {!props.loading && !props.searchedTodosListed.length}

        {props.searchedTodosListed.map(props.render)}
        
        <ul>
          {props.children} 
        </ul>
        {/* {(!props.loading && !props.console.error) && props.searchedTodosListed.map(renderFunc)} */}
      </div>
    );
  }
  
  export { TodoListAdd };