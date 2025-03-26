import './TodoListDone.css';

function TodoListDone(props){
    return (
      <div className='container-list-done hidden'>
        <h2>
          Done
        </h2>

        {props.loading && props.onLoading()}

        {!props.loading && !props.searchedTodosDone.length}

        {props.searchedTodosDone.map(props.render)}

        <ul>
          {props.children}
        </ul>
      </div>
    );
  }
  
  export { TodoListDone };