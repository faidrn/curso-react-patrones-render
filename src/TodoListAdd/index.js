import './TodoListAdd.css';

function TodoListAdd({ children }){
    return (
      
      <div className='container-list-add'>
        <h2>
          To do
        </h2>

        <ul>
          {children}
        </ul>
      </div>
    );
  }
  
  export { TodoListAdd };