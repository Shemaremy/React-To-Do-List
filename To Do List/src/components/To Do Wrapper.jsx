import EditTheForm from './EditToDoForm';
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
    /**
     1) This line defines a function named addTodo using arrow function syntax. It takes a single parameter todo.
     2) Inside the function, it uses the setTodos function provided by the useState hook to update the todos state.
     3) It creates a new array using the spread operator (...todos) to copy the existing todos. Spread operator helps us to unpack array elements one by one)
     4) It then appends(add to an end) a new todo object to this array. This new todo object has properties:
     5) id: Generated using uuidv4(), ensuring it's unique.
     6) task: Set to the value of the todo parameter passed to the addTodo function.
     */



     const editTodo = id => {
      setTodos(todos.map( todo => todo.id === id ?{...todo, isEditing: !todo.isEditing}: todo ));
     }

     const deleteTodo = id => {
      setTodos(todos.filter(todo => todo.id !== id));
     }


     const editTask = (task, id) => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
     }





  return (
    <div className='Everything'>
      <h1>Get Things Done Today !!</h1>
        <TheForm   addTodo = {addTodo} />

        {todos.map((todo, index) => (
          todo.isEditing? (<EditTheForm editTodo = {editTask} task={todo} />) : (<Todocomponent task={todo} key ={index}  editTodo={editTodo}  deleteTodo={deleteTodo} />)

        ))}
        
    </div>

  );
};

export default TodoWrapper;

