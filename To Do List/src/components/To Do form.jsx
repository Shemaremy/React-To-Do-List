
import React, {useState} from 'react';
import Todocomponent from './Todo';

const TheForm = ({addTodo}) => {

    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        

        if (value === "") {
            alert("No item entered")
        } else {
            alert(value);
            addTodo(value);
            setValue(""); // Clear input value
        }

        
    }

  return (
    <form className="To_Do_Form" onSubmit={handleSubmit}>
        <div className='Two_parts'>
            <h1>Get Things Done Today !!</h1>
            <div className='Upper_part'>

                <input type="text" className="Input_one" placeholder='Whats yo plans today ?' 
                onChange={(e)=>setValue(e.target.value)}
                value={value}></input>

               
                <button className='Add_task'>Add</button>
            </div>
            

        </div>
    </form>
  );
};

export default TheForm;


