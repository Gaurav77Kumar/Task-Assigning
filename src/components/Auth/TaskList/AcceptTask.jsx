import React from 'react'

const AcceptTask = () => {
  return (
      <div className="h-full flex-shrink-0 w-[300px] bg-yellow-400  p-5 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 mt-2 ml-2 rounded ">
            High
          </h3>
          <h4 className="text-sm">15 july 2025</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">Make a Youtube Video</h2>
        <p className="text-sm mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum iste
          fugit rem aperiam!
        </p>
        <div className='flex justify-between mt-4'>
            <button className='bg-green-400 py-1 px-2 text-sm rounded-xl'>Mark as Completed</button>
            <button className='bg-red-400 py-1 px-2 text-sm>Mark as Failed rounded-xl '>Mark as Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask
