import React, { useState } from "react";
import "./Todo.css";
import  { useSelector, useDispatch } from "react-redux";
import {addTask, deleteTask } from "../Actions/homeActions";

function Todo() { 


   const [inputTask, setInputTask] = useState("");
   const [inputDesc, setInputDesc] = useState("");
   const list = useSelector((state) => state.todoReducers.list);
   const dispatch = useDispatch();
  return (
    <>

        <div className="child-div text-center">
          <figure>
            <h5 className="subTitle">Task List </h5>
          </figure>
        </div>

  <div className="main-div bg-light">
   <form className="col-8 mx-auto my-4">
  <div className="form-group row my-2">
    <label htmlFor="task" className="col-sm-2 col-form-label">Task Name</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="taskName" placeholder="Enter the title..." 
      value={inputTask} onChange ={(event)=> setInputTask(event.target.value)}/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Description</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="=taskDesc" placeholder="Enter the description..." 
       value={inputDesc} onChange ={(event)=> setInputDesc(event.target.value)}/>
    </div>
  </div>
</form>


    <div className="addItems d-grid gap-2 col-6 mx-auto">

      <button type="button" className="btn btn-secondary" onClick={() => dispatch(addTask(inputTask, inputDesc), setInputTask(''),setInputDesc(''), alert("Successfully Added"))}>
        <i className="fa-solid fa-pen-to-square"></i> Add The Task
        </button>
        </div>

      <div className="showList my-2 list-group-item-primary ">
        {
          list.map((elem) => {
            return(
            <div className="eachItem col-8 mx-auto d-flex justify-content-between" key={elem.id}>
             <h5>{elem.task}</h5>
             <h5>{elem.description}</h5>
             <span class="material-symbols-outlined" title="Delete Item" onClick={()=>{dispatch(deleteTask(elem.id)), alert("Successfully Deleted")}} >delete</span>
           </div>
            )  
          })
        }

      </div>
      </div>
    </>
  );
}

export default Todo;