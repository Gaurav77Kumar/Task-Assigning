import React from "react";

const TaskList = ({data}) => {
  return (
    <div className="flex  mt-10 justify-between gap-5 w-screen">
      <div className="py-6 px-9 rounded-xl w-[45%] bg-red-400">
        <h2 className="text-2xl text-white">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl font-medium text-white">New Task</h3>
      </div>

      <div className="py-6 px-9 rounded-xl w-[45%] bg-blue-400">
        <h2 className="text-2xl text-white">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-medium text-white">CompletedTask</h3>
      </div>

      <div className="py-6 px-9 rounded-xl w-[45%] bg-emerald-400">
        <h2 className="text-2xl text-white">{data.taskCounts.active}</h2>
        <h3 className="text-xl font-medium text-white">Accepted Task</h3>
      </div>

      <div className="py-6 px-9 rounded-xl w-[45%] bg-red-400">
        <h2 className="text-2xl text-white">{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-medium text-white">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskList;
