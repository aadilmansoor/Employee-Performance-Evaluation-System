import React from 'react'

function Dailytask() {
  return (
    <>
    <div>
        <h1 style={{fontSize:"30px"}} className='text-center mt-5'>Today's Task</h1>

        <div className="max-w-md mx-auto mt-10 p-6 bg-gray rounded-lg shadow-md border border-blue-300">

            <div className="mb-4">
              <textarea
                id="task"
                name="task"
                placeholder="Task"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
                rows="5"
                required
              ></textarea>
              
            </div>
            <button
          type="submit"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Submit
        </button>
        </div>
    </div>
    </>
  )
}

export default Dailytask