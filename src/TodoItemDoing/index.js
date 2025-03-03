import { MoveToTheToDoTabIcon } from '../MoveToTheToDoTabIcon';
import { MoveToTheDoneTabIcon } from '../MoveToTheDoneTabIcon';

function TodoItemDoing(props){
    return (
      <li>
        <div className='todo-list todo-list-doing'>
          <p>{props.text}</p>
          <div className="buttons-todo-list">
            <MoveToTheToDoTabIcon 
              onTodo={props.onTodo}
            />
            
            <MoveToTheDoneTabIcon 
              onComplete={props.onComplete}
            />
          </div>
          
        </div>
      </li>
    );
  }

  export { TodoItemDoing };