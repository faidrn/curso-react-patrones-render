import './TodoListAdd.css';

function TodoListAdd(props){
    return (
      
      <div className='container-list-add'>
        <h2>
          To do
        </h2>

        {props.loading && props.onLoading()}

        {/* {(!props.loading && !props.searchedTodosListed.length) && props.onEmptyTodos()} */}
        
        <ul>
          {props.children}
        </ul>
      </div>
    );
  }
  
  export { TodoListAdd };