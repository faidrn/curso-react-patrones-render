import './CreateTodoButton.css';

function CreateTodoButton({setOpenModal}){
    return (
      <button className="btn-add-new"
        onClick={() => {
          setOpenModal(state => !state);
        }}
      >
        <span className='plus'>+</span> Add new task
      </button>
    );

    
  }
  
  export { CreateTodoButton };