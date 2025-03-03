import { CompleteIcon } from '../CompleteIcon';

function TodoItemDone(props){
    return (
      <li>
        <div className='todo-list todo-list-done'>
          <CompleteIcon />
          <p>{props.text}</p>
          
        </div>
      </li>
    );
  }

  export { TodoItemDone };