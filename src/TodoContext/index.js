import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children}){
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error, 
      } = useLocalStorage('TODOS_V1', []);
    
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false); //Estado por defecto false= cerrado
    
      const completedTodos = todos.filter(todo => todo.status === 'done').length; // este todo viene de: const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
      const totalTodos = todos.length; //todos=>const [todos, setTodos] = React.useState(defaultTodos);
    
      const searchedTodosListed = todos.filter(
        (todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText) && todo.status === 'listed';
        }
      );
    
      const searchedTodosDoing = todos.filter(
        (todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
    
          return todoText.includes(searchText) && todo.status === 'doing';
        }
      );
    
      const searchedTodosDone = todos.filter(
        (todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
    
          return todoText.includes(searchText) && todo.status === 'done';
        }
      );

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          text: text, 
          status: 'listed', 
        });
        
        saveTodos(newTodos);
      };
    
    
      const completeTodo = (text) => {
        const newTodos = [...todos]; 
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
    
        newTodos[todoIndex].status = 'done';
    
        saveTodos(newTodos);
      };
    
      const doingTodo = (text) => {
        const newTodos = [...todos]; 
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
    
        newTodos[todoIndex].status = 'doing';
    
        saveTodos(newTodos);
      };
    
      const returnTodo = (text) => {
        const newTodos = [...todos]; 
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
    
        newTodos[todoIndex].status = 'listed';
    
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const newTodos = [...todos]; 
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
    
        newTodos.splice(todoIndex, 1);
    
        saveTodos(newTodos);
      };
    
      /* const addTodo = () => {
        const newTodo = {text: searchValue, status: 'listed'}; 
    
        const updatedTodos = [...todos, newTodo]; // Agrega la nueva tarea al arreglo existente
    
        saveTodos(updatedTodos);
    
        setSearchValue(''); // Limpia el input
    
        // Deshabilitar el botón después de hacer clic
        setIsDisabled(true);
    
        // Quitar la clase 'highlighted' del div contenedor
        showFormAddNewTask();
    
      }; */
    
    
      const [isDisabled, setIsDisabled] = React.useState(true); // Estado inicial: botón deshabilitado
    
      const disabledButton = () => {
        setIsDisabled(!isDisabled); // Cambia el estado para habilitar/deshabilitar el botón
      };
    
      const showFormAddNewTask = () => {
        const containerAddTodo = document.querySelector('.container-add-todo');
    
        containerAddTodo.classList.toggle('container-add-todo-hidden');
      }
    


    return(
        <TodoContext.Provider value={{
            loading, 
            error, 
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodosListed,
            doingTodo,
            deleteTodo,
            showFormAddNewTask,
            searchedTodosDoing,
            completeTodo,
            returnTodo,
            searchedTodosDone,
            isDisabled,
            setIsDisabled,
            disabledButton,
            addTodo, 
            openModal, 
            setOpenModal, 
        }}>
            {children}
        </TodoContext.Provider>
    );
}


export { TodoContext, TodoProvider };