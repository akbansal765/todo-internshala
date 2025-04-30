import { useState } from "react"
import ToDoItem from "./ToDoItem";

function ToDoList(){

    const [inputValue, setInputValue] = useState('');
    const [task, setTask] = useState([]);
    const [editPressed, setEditPressed] = useState(false);
    const [editElIndex, setEditElIndex] = useState('');

    function handleOnchange(e){
      setInputValue(e.target.value);
    }

    function handleTask(){
      if(inputValue){
        setTask([...task, inputValue]);
        setInputValue('');
      }
    }

    function handleDelTask(id){

      const filterElements = task.filter((_, i ) => i != id);

      setTask(filterElements);
    }

    function handleEditFunction(id){
      
       const editElement = task.find((_, index) => index == id);
       
       setInputValue(editElement);

    }


    function handleUpdate(){
      if(inputValue){
        const filterUpdateElements = task.filter((_, i) => i != editElIndex)
        setTask([...filterUpdateElements, inputValue]);
        setInputValue('');
  
        setEditPressed(false);
      }
    }

    // function handleUpdateFunction(index){
  
    //   const filterUpdateElements = task.filter((_, i) => i != index)
    //   setTask([...filterUpdateElements, inputValue]);

    //   setInputValue('');
    // }

    return (
     <div className="todolist_component">
      <input type="text" placeholder="Enter your task here" onChange={handleOnchange} value={inputValue}/>
      <button onClick={handleTask}>Add Task</button>
      {editPressed && <button onClick={handleUpdate}>Update</button>}
      <ToDoItem edit={setEditPressed} editIndex={setEditElIndex} tasks = {task} handleDelTask = {handleDelTask} handleEditFunction={handleEditFunction}/>
     </div>

    )
}

export default ToDoList;