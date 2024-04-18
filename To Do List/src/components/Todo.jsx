
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



const Todocomponent = () => {


    return(
        <div className="Every_Todo">
            <div className="Todo_class">
                <p>Wassup Brother</p>
                <div className="Icons">
                    <FontAwesomeIcon className="edit-icon ico" icon={faPenToSquare}/>
                    <FontAwesomeIcon className="delete-icon ico" icon={faTrash}/>
                </div>
            </div>            
        </div>
    );
}

export default Todocomponent;