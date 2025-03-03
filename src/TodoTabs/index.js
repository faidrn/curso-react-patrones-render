import './TodoTabs.css';

function TodoTabs(){
    return (
      <div className='container-tabs'>
        <div 
          className="todo-tab tabs active-underline" 
          onClick={
            (event) => {
              activeTodoTab(0)
            }
          }
        >
            <p id='paragraph-todo-tab' className='tab-active'>To Do</p>
        </div>
        <div 
          className="doing-tab tabs" 
          onClick={
            (event) => {
              activeTodoTab(1)
            }
          }
        >
            <p id='paragraph-doing-tab' className='tab-inactive'>Doing</p>
        </div>
        <div 
          className="done-tab tabs"
          onClick={
            (event) => {
              activeTodoTab(2)
            }
          }
        >
            <p id='paragraph-done-tab' className='tab-inactive'>Done</p>
        </div>
      </div>
      
     
    );

    

    function activeTodoTab(indexTab) {
      const setTabs = [
        'todo-tab',
        'doing-tab',
        'done-tab'
      ];
  
      const setTitlesTabs = [
        'paragraph-todo-tab',
        'paragraph-doing-tab',
        'paragraph-done-tab'
      ];

      const todoLists = [
        'container-list-add', 
        'container-list-doing',
        'container-list-done'
      ];
      setTabs.forEach((tab, index) => {
        const activeTab = document.querySelector(`.${setTabs[index]}`); 
        const titleTab = document.getElementById(`${setTitlesTabs[index]}`);
        const list = document.querySelector(`.${todoLists[index]}`);

        if (index === indexTab){
          titleTab.classList.remove('tab-inactive');
          list.classList.remove('hidden');
          titleTab.classList.add('tab-active');
          activeTab.classList.add('active-underline');
        } else {
          titleTab.classList.remove('tab-active');
          titleTab.classList.add('tab-inactive');
          list.classList.add('hidden');
          activeTab.classList.remove('active-underline');

        }
      })
    }
  
  }
  
  export { TodoTabs };