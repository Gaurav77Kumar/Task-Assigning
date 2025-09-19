import React from "react";

const AllTask = () => {

  const{userData, setUserData} = useContext(AuthContext)
  
  return (
    <div className="bg-[1c1c1c] p-5 rounded mt-5  h-48">
      <div className=" bg-red-400 mb-1 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5 ">Employee Name</h2>
        <h2 className="w-1/5 ">New Task</h2>
        <h5 className="w-1/5 ">Active Task</h5>
        <h5 className="w-1/5 ">Completed</h5>
        <h5 className="w-1/5 ">Failed</h5>
      </div>

      <div className="overflow-auto ">
          {authData.employees.map(function (elem,idx) {
        return;
        <div key={idx} className=" bg-red-400 mb-1 py-2 px-4 flex justify-between rounded">
          <h2 className="w-1/5 text-lg font-medium text-white-600">{elem.firstName}</h2>
          <h2 className="w-1/5 text-lg font-medium text-blue-600">{elem.taskCounts.active}</h2>
          <h5 className="w-1/5 text-lg font-medium bg-red-600">{elem.taskCounts.completed}</h5>
          <h5 className="w-1/5 text-lg font-medium text-green-600">{elem.taskCounts.failed}</h5>
         
        </div>;
      })}
    </div>
      </div>


  );
};

export default AllTask;
