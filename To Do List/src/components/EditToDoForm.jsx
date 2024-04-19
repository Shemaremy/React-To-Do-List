
import React, {useState} from 'react';
import Todocomponent from './Todo';


const EditTheForm = ({editTodo, task}) => {                    // The function containing everything with a function addTodo to be passed as a prop. (Remember that props are passed as objects)

    const [value, setValue] = useState(task.task);         // Initially, the value is empty

    const handleSubmit = e => {                     // A function which will be called after a form is submitted. Takes event object e as a parameter
        e.preventDefault();                         // Preventdefault method prevents the page auto reload default behaviour
        

        if (value === "") {
            alert("Didn't update yo task")
        } else {
            editTodo(value, task.id);                        // Calling the function addTodo that we saw above and passing the value as its argument. Helping the parent class to know the value
            setValue(""); // Clear input value
        } 

        
    }

  return (
    <form className="To_Do_Form" onSubmit={handleSubmit}>       
        <div className='Two_parts'>
            <div className='Upper_part'>

                <input type="text" className="Input_one Another" placeholder='Update task' 
                onChange={(e)=>setValue(e.target.value)}
                value={value}></input>

               
                <button type='submit' className='Add_task Another2'>Update Task</button>
            </div>
            

        </div>
    </form>
  );
};

export default EditTheForm;





/**     WHAT HAPPENED HERE
 *    ----------------------
 * 
 * 
 * 1) We start by the return and see what it returns, right ?
 * 2) In return, says when the form is submitted, it calls a function named handlesubmit
 * 3) Handlesubmit is there and we see what it does
 * 4) It first prevents the default behaviour, then checks if value is empty
 * 5) What is value? Is it even declared? We check and it is declared as calling usestate hook
 * 
 * 6) Checking other codes if it has a value
 * 7) And in form, setValue updates the default value of ""
 * 8) Then the new value is there. And the value of the input field is the same as that setValue updated it to
 * 9) Now we know that value is the input field data entered
 * 
 * 10) Then it alerts the value to the screen
 * 11) Then it calls addTodo() function to contain value as an argument 
 * 12) Then setValue updates the value as empty again
 * 
 * 
 * 13) And in brief, we want to send the value to the parent class(To do wrapper) using addTodo function by containing that value as an argument.
 *     Now we expect the parent class to define that function prop and handle that value
*/


