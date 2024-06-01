import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ViewReviews() {

    const [teamReview , setTeamReview] = useState([])
    console.log(teamReview);
    const token = localStorage.getItem("HRtoken");

    const getReviews = async()=>{
        try {
            const response = await axios.get('http://127.0.0.1:8000/hrapi/review/',{
                headers:{
                    Authorization:`Token ${token}`
                }
            })
            setTeamReview(response.data)
        } catch (error) {
            console.error("Failed to fetch team details:", error);
        }
    }

    useEffect(()=>{
        getReviews()
    },[])
  return (
    <div>
         <div className="wrapper h-96 sticky top-0 overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-4">TeamLead Reviews</h1>
      
        {teamReview.length>0?(<div className="relative">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-md shadow-md">
              <thead className="bg-gray-200 sticky top-0">
                <tr>
                  <th className="py-3 px-4 border-b border-gray-300">Id</th>
                  <th className="py-3 px-4 border-b border-gray-300">
                    Team Lead
                  </th>
                  <th className="py-3 px-4 border-b border-gray-300">
                    Employee
                  </th>
                  <th className="py-3 px-4 border-b border-gray-300">
                    Rating
                  </th>
                  <th className="py-3 px-4 border-b border-gray-300">
                    comments
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
               
                  {teamReview.map((item)=>(<tr >
                    <td className="py-3 px-4 border whitespace-nowrap">
                     {item.id}
                    </td>
                    <td className="py-3 px-4 border whitespace-nowrap">
                     {item.teamlead}
                    </td>
                    <td className="py-3 px-4 border whitespace-nowrap">
                      {item.emp}
                    </td>
                    <td className="py-3 px-4 border whitespace-nowrap">
                     {item.rating}
                      
                    </td>
                    <td className="py-3 px-4 border whitespace-nowrap">
                     {item.comment}
                    </td>
                  </tr>))}
            
              </tbody>
            </table>
          </div>
        </div>):<p>no data available</p>}
    
    </div>
    </div>
  )
}

export default ViewReviews