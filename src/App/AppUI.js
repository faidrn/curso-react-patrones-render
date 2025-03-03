import React from 'react';
import { TodoUser } from '../TodoUser';
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
//import { TodoAddNew } from '../TodoAddNew';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoContext } from '../TodoContext';


function AppUI(){
  const {
    loading, 
    error, 
    /* searchValue,
    setSearchValue, */
    searchedTodosListed,
    doingTodo,
    deleteTodo,
    /* showFormAddNewTask, */
    searchedTodosDoing,
    completeTodo,
    returnTodo,
    searchedTodosDone,
    /* isDisabled,
    setIsDisabled,
    disabledButton,
    addTodo,  */
    openModal, 
    setOpenModal, 
  } = React.useContext(TodoContext);
    return (
      //<React.Fragment> = <>
      <>
  
        <TodoUser name={'Fredy Izquierdo'} />

        {error ? (
          <TodosError /> //Mostrar mensaje de error
        ) : (
          <>
            {loading && <TodosLoading />}

            {(!loading && searchedTodosListed.length === 0 && searchedTodosDoing.length=== 0
              && searchedTodosDone.length === 0) &&
                <EmptyTodos />
            } 
      

                  {!loading && (searchedTodosListed.length > 0 || searchedTodosDoing.length > 0
                    || searchedTodosDone.length > 0) && (
                      <>
                        <TodoCounter /> 
                        <TodoSearch />
                      </>
                    )
                  }
                
                  <TodoTabs />
                  
                  
                  <div className='todo-container'> 
                    
                    <TodoListAdd>
                      {loading && <TodosLoading />}
                      {searchedTodosListed.map(todo => (
                        <TodoItem 
                          key={todo.text} 
                          text={todo.text} 
                          onDoing={() => doingTodo(todo.text)}
                          onDelete={() => deleteTodo(todo.text)}
                        />
                          
                      ))}
                          
                      {!loading && (
                        <CreateTodoButton 
                          /* onClick={() => showFormAddNewTask()} */
                          setOpenModal={setOpenModal}
                        />
                      )}
                      {openModal && (
                        <Modal>
                          <TodoForm />
                        </Modal>
                      )}            
                    </TodoListAdd>
                        
                    <TodoListDoing>
                      {loading && <TodosLoading />}
                      {searchedTodosDoing.map(todo => (
                        <TodoItemDoing 
                          key={todo.text} 
                          text={todo.text} 
                          onComplete={() => completeTodo(todo.text)}
                          onTodo={() => returnTodo(todo.text)}
                        />
                      ))}
                    </TodoListDoing>
                
                    <TodoListDone>
                      {loading && <TodosLoading />}
                      {searchedTodosDone.map(todo => (
                        <TodoItemDone 
                          key={todo.text} 
                          text={todo.text}            
                        />
                      ))}
                    </TodoListDone> 
                  </div>
                  {/* <TodoAddNew 
                    searchValue={searchValue} 
                    setSearchValue={setSearchValue}
                    isDisabled={isDisabled} 
                    setIsDisabled={setIsDisabled}
                    onDisabled={() => disabledButton()} 
                    onAddNew={() => addTodo()}
            
                  /> */}
                
          </>
        )}
      </>
      //</React.Fragment> = </>
    );
}

export { AppUI };