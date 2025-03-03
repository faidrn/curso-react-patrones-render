import React from "react";
import { TodoIcon } from '../TodoIcon';

function MoveToTheDoneTabIcon({ onComplete }){
    return (
        <TodoIcon 
            type="done" 
            fill="yellow"
            onClick={onComplete}
        />
    );
}

export { MoveToTheDoneTabIcon };