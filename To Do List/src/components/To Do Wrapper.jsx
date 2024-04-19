import EditTheForm from './EditToDoForm';
import TheForm from './To Do form';
import Todocomponent from './Todo';
import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

function TodoWrapper(){
    const [todos, setTodos] = useState([]);




      // Function to add a new todo
      function addTodo (todo) {
          setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
      }




      // Function to enable typing in a new value in the textbox again. But it doesnt update with new value
      function editTodo (id) {                         
        function M (todo) {
                  
          if (todo.id === id) {
            return { ...todo, isEditing: !todo.isEditing };
          } else {
            return todo;
          }
        }

        const updatedTodos = todos.map(M);      
        setTodos(updatedTodos);
      }


  
      // Function to update the value entered due to this function above. Without the above method this one wouldn't work because we were unable to input
      function editTask(task, id) {
        function P(todo) {
          if (todo.id === id) {
              return { ...todo, task: task, isEditing: !todo.isEditing };
          } else {
              return todo;
          }
        }

        setTodos(todos.map(P));
      }




      // Function to delete a todo when trash is clicked
      function deleteTodo(id) {
        function N (todo) {
          if (todo.id !== id) {
              return true;
          } else {
              return false;
          }
        }

        setTodos(todos.filter(N));
      }
    

  


      // Function for the final rendering based on the state
      function R (todo, index){
        if (todo.isEditing) {
          return <EditTheForm editTodo={editTask} task={todo} />;
        } else {
          return <Todocomponent Flacko2={todo} key={index} editTodo={editTodo} deleteTodo={deleteTodo} />;
        }
       }

    const FinalRender =  todos.map(R);
    





  return (
    <div className='Everything'>
      <h1>Get Things Done Today !!</h1>

      <TheForm   Flacko = {addTodo} />
      {FinalRender}

        
    </div>

  );
};

export default TodoWrapper;

