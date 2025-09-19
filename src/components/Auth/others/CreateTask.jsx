import React from 'react'

const CreateTask = () => {

  const{userData, setUserData} = useContext(AuthContext)


  const [taskTitle, settaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assignTo, setassignTo] = useState('')
  const [category, setcategory] = useState('')


  const[newTask, setNewTask] = usestate()



  const submitHandler = () => {
    e.preventDefault()

    setNewTask({taskTitle, taskDescription, taskDate, assignTo, category, active:false, neTask:True, completed:false, failed:false})

    const data = localStorage.getItem('employees')
    JSON.parse(data).forEach(function(elem){
     if(assignTo == elem.firstName){
    elem.tasks.push(newTask)

     }
    })

    localStorage.setItem('employees', JSON.stringify(data))


    settaskDate('')
    setassignTo('')
    setcategory('')
    settaskDescription('')
    settaskTitle('')

  }
  return (
     <div className="p-5 bg-[#1C1C1C] mt-7 rounded">
        <form onSubmit ={(e) =>{
          submitHandler()

        }} className="flex flex-wrap items-start w-full justify-between gap-5">

          {/* Left Section */}
          <div className="w-1/2 space-y-4">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
              value = {taskTitle}
              onChange = {(e) =>{
                 settaskTitle(e.target.value)
              }}

              
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400"
                type="text"
                placeholder="Make a UI design"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
               value = {taskDate}
              onChange = {(e) =>{
                 settaskTitle(e.target.value)
              }}

                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400"
                type="date"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
              <input
               value = {assignTo}
              onChange = {(e) =>{
                 setassignTo(e.target.value)
              }}

                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400"
                type="text"
                placeholder="Employee name"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
               value = {taskDescription}
              onChange = {(e) =>{
                 settaskDescription(e.target.value)
              }}

                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400"
                type="text"
                placeholder="Design, Dev, etc"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-2/5 flex flex-col items-start space-y-3">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              className="w-full bg-transparent border border-gray-400 outline-none rounded p-2 text-sm"
              rows="8"
              placeholder="Task details..."
            ></textarea>
            <button className="bg-emerald-500 px-6 py-2 rounded text-white hover:bg-gray-700 transition">
              Create Task
            </button>
          </div>

        </form>
      </div>
    
  )
}

export default CreateTask
