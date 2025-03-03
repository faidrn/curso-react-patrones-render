import React from "react";
import { TodoIcon } from '../TodoIcon';

function CompleteIcon(){
    return (
        <TodoIcon 
            type="completed" 
            fill="green"
        />
    );
}

export { CompleteIcon };