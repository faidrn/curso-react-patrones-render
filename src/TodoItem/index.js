import { MoveToTheDoingTabIcon } from '../MoveToTheDoingTabIcon';
import { DeleteIcon } from '../DeleteIcon';

function TodoItem(props){
    return (
      <li>

        <div className='todo-list todo-list-add'>
          
          <p>{props.text}</p>

          <div className="buttons-todo-list">
            <MoveToTheDoingTabIcon 
              onDoing={props.onDoing}
            />

              <DeleteIcon 
                onDelete={props.onDelete}
              />
          </div>
          
        </div>
      </li>
    );
  }

  export { TodoItem };