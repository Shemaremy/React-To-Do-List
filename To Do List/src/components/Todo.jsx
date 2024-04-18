
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



const Todocomponent = () => {

    const X = "Hello Bro";

    return(
        <div className="Todo_class">
            <p>{X}</p>
            <div className="Icons">
                <FontAwesomeIcon className="edit-icon ico" icon={faPenToSquare}/>
                <FontAwesomeIcon className="delete-icon ico" icon={faTrash}/>
            </div>
        </div>
    );
}

export default Todocomponent;