import React from "react";
import { TodoIcon } from '../TodoIcon';

function DeleteIcon({ onDelete }){
    return (
        <TodoIcon 
            type="delete" 
            fill="red" 
            onClick={onDelete}
        />
    );
}

export { DeleteIcon };