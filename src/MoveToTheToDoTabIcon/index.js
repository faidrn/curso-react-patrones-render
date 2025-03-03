import React from "react";
import { TodoIcon } from '../TodoIcon';

function MoveToTheToDoTabIcon({ onTodo }){
    return (
        <TodoIcon 
            type="todo" 
            fill="gray"
            onClick={onTodo}
        />
    );
}

export { MoveToTheToDoTabIcon };