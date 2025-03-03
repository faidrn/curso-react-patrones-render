import { ReactComponent as MoveIconSVG} from './moveNextIcon.svg';
import { ReactComponent as DeleteIconSVG} from './deleteIcon.svg';
import { ReactComponent as CompleteIconSVG} from './checkIcon.svg';
import './TodoIcon.css';


const iconTypes = {
    "doing": <MoveIconSVG className='icon' />,
    "delete": <DeleteIconSVG className='icon' />, 
    "todo": <MoveIconSVG className='icon' />, 
    "done": <MoveIconSVG className='icon' />, 
    "completed": <CompleteIconSVG className='icon' />, 
};

const titleIcons = {
    "doing": "Move task to the Doing tab",
    "delete": "Delete task", 
    "todo": "Move task to the To Do tab", 
    "done": "Move task to the Done tab", 
    "completed": "Task completed", 
};

const classIcons = {
    "doing": "padding-right-doing",
    "todo": "move-todo-tab",
    "completed": "status-compeleted",
};


function TodoIcon({ type, fill, onClick }){
    return (
        <span
            className={`icon-fill-${fill} ${classIcons[type]} cursor-pointer`} 
            title={titleIcons[type]}
            onClick={onClick}
        >
            {iconTypes[type]}
        </span>
    );
}

export { TodoIcon }; 