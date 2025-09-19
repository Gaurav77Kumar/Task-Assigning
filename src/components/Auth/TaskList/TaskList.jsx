import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] flex items-center w-full overflow-x-auto justify-start gap-5  py-3 mt-8   " >

        {data.tasks.map((elem, idx) => {
      
          if(elem.active ) {
            return  <AcceptTask key={idx}/>
          }
          if(elem.newTask) {
            return <NewTask key = {idx}/>
          }
          if(elem.completed){
            return <CompletedTask key = {idx} />
          }
          if(elem.failed) {
            return <FailedTask  key ={idx}/>
          }
        })}
      
    </div>
  );
};

export default TaskList;
