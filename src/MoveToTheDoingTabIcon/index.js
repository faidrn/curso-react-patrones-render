import React from "react";
import { TodoIcon } from '../TodoIcon';

function MoveToTheDoingTabIcon({ onDoing }){
    return (
        <TodoIcon 
            type="doing" 
            fill="gray"
            onClick={onDoing}
        />
    );
}

export { MoveToTheDoingTabIcon };