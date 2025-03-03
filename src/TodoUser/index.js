import profile from './profile.png';
import './TodoUser.css';

function TodoUser({ name }){
    return (
        <div className='container-header'>
            <div className='container-img'>
                <img 
                    src={profile} 
                    alt="profile" 
                />
            </div>
            <div className='container-name'>
                <p className='name-user'>
                    {name}
                </p>
            </div>
            
        </div>
        
    );
  }
  
  export { TodoUser };