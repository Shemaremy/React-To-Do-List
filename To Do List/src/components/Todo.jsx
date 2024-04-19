
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



function Todocomponent ({Flacko2, deleteTodo, editTodo}) {


    return(
        <div className="Every_Todo">
            <div className="Todo_class">
                <div className="Word_container">
                    <p>{Flacko2.task}</p>
                </div>

                <div className="Icons">
                    <FontAwesomeIcon className="edit-icon ico" icon={faPenToSquare}  onClick={()=> editTodo(Flacko2.id)} />
                    <FontAwesomeIcon className="delete-icon ico" icon={faTrash} onClick={()=> deleteTodo(Flacko2.id)}/>
                </div>
            </div>            
        </div>
    );
}

export default Todocomponent;