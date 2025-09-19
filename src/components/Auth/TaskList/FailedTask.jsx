import React from 'react'

const FailedTask = () => {
  return (
     <div className="h-full flex-shrink-0 w-[300px] bg-emerald-400  p-5 rounded-xl">
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
          <div className="mt-2 ">
            <button className='w-full'>Failed</button>

        </div>
      </div>
  )
}

export default FailedTask
