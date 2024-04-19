
import React, {useState} from 'react';


function TheForm ({Flacko}){                  

    const [value, setValue] = useState("");



    // A function which will be called after a form is submitted. Takes event object e as a parameter
    function handleSubmit(e) {
        e.preventDefault();                         // Preventdefault method prevents the page auto reload default behaviour      

        if (value === "") {
            alert("No item entered")
        } else {
            Flacko(value);
            setValue(""); // Clear input value
        } 

        
    }




    //Ensures that value always holds the latest value entered by the user, and it's used later when the form is submitted.
    function X (e){
        setValue(e.target.value)
    }




  return (
    <form className="To_Do_Form" onSubmit={handleSubmit}>       
        <div className='Two_parts'>
            
            <div className='Upper_part'>

                <input type="text" className="Input_one" placeholder='Whats yo plans today ?' 
                onChange={X}
                value={value}></input>

               
                <button type='submit' className='Add_task'>Add</button>
            </div>
            

        </div>
    </form>
  );
};

export default TheForm;





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


