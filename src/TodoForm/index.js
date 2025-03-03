import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";


function TodoForm(){
    const {
        addTodo, 
        setOpenModal, 
    } = React.useContext(TodoContext);

    const [newTodoValue, SetNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        SetNewTodoValue(event.target.value);
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                placeholder="Digita aquí tu TODO" 
                value={newTodoValue} 
                onChange={onChange}
            />
            <div className="btn-todoForm-container">
                <button 
                    type="button" 
                    className="btn-todoForm btn-todoForm--cancel" 
                    onClick={onCancel}
                >Cancelar</button>
                <button 
                    type="submit"
                    className="btn-todoForm btn-todoForm--add"
                >Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };