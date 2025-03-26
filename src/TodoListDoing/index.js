import './TodoListDoing.css';

function TodoListDoing(props){
    return (
      <div className='container-list-doing hidden'>
        <h2>
          Doing
        </h2>

        {props.loading && props.onLoading()}

        {!props.loading && !props.searchedTodosDoing.length}

        {props.searchedTodosDoing.map(props.render)}

        <ul>
          {props.children}
        </ul>
      </div>
    );
  }
  
  export { TodoListDoing };