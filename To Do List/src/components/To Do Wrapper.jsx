import TheForm from './To Do form';
import Todocomponent from './Todo';
import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
    }


  return (
    <div>
        <TheForm   addTodo = {addTodo} />       
    </div>

  );
};

export default TodoWrapper;

