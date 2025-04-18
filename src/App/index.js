import React from 'react';
import './App.css';
import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoListAdd } from '../TodoListAdd';
import { TodoTabs } from '../TodoTabs';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoListDoing } from '../TodoListDoing';
import { TodoItemDoing } from '../TodoItemDoing';
import { TodoListDone } from '../TodoListDone';
import { TodoItemDone } from '../TodoItemDone';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoHeader } from '../TodoHeader';
import { TodoUser } from '../TodoUser';
import { ChangeAlert } from '../ChangeAlert';


function App() {
  const {
    loading, 
    error, 
    searchedTodosListed,
    doingTodo,
    deleteTodo,
    searchedTodosDoing,
    completeTodo,
    returnTodo,
    searchedTodosDone,
    openModal, 
    setOpenModal, 
    completedTodos,
    totalTodos, 
    searchValue,
    setSearchValue, 
    addTodo, 
    sincronizeTodos, 
  } = useTodos();

  return (
    //<React.Fragment> = <>
    <>

      <TodoUser name={'Fredy Izquierdo'} />

      {error ? (
        <TodosError /> //Mostrar mensaje de error
      ) : (
        <>

          <TodoHeader loading={loading}>
            <TodoCounter 
              totalTodos={totalTodos} 
              completedTodos={completedTodos}
            /> 
                          
            <TodoSearch 
              searchValue={searchValue} 
              setSearchValue={setSearchValue}
            />
          </TodoHeader> 
         

          {(!loading && searchedTodosListed.length === 0 && searchedTodosDoing.length=== 0
            && searchedTodosDone.length === 0) &&
              <EmptyTodos 
              totalTodos={totalTodos}
              searchText={searchValue}
              />
          }
              
          <TodoTabs />
                
                
          <div className='todo-container'> 
            <TodoListAdd
              loading={loading}
              searchedTodosListed={searchedTodosListed}
              onLoading={() => <TodosLoading />}
              //onEmptyTodos={() => <EmptyTodos />}
              render={todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  onDoing={() => doingTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                /> 
              )}
            >
              {!loading && (
                <CreateTodoButton setOpenModal={setOpenModal} />
              )}
              
            </TodoListAdd>

            
            {openModal && (
                <Modal>
                  <TodoForm 
                    addTodo={addTodo} 
                    setOpenModal={setOpenModal}
                  />
                </Modal>
            )}
                
            <TodoListDoing 
              loading={loading}
              searchedTodosDoing={searchedTodosDoing}
              onLoading={() => <TodosLoading />}
              render={todo => (
                <TodoItemDoing 
                  key={todo.text} 
                  text={todo.text} 
                  onComplete={() => completeTodo(todo.text)}
                  onTodo={() => returnTodo(todo.text)}
                />
              )}
            />
            
        
            <TodoListDone 
              loading={loading} 
              searchedTodosDone={searchedTodosDone}
              onLoading={() => <TodosLoading />}
              render={todo => (
                <TodoItemDone 
                  key={todo.text} 
                  text={todo.text}            
                />
              )}
            />
            
          </div>
          
        </>
      )}

      <ChangeAlert 
        sincronize={sincronizeTodos}
      />

    </>
    //</React.Fragment> = </>
  );
}



export default App;
