import axios from "axios";
import React, { useEffect, useState } from "react";

const TaskUpdateLists = () => {
  const [taskUpdate, setTaskUpdate] = useState([]);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("Emp-token");
  useEffect(() => {
    const fetchTaskUpdate = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/empapi/taskupdateschart/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        setTaskUpdate(response.data);
      } catch (error) {
        console.log("error to fetch teams");
      }
    };

    fetchTaskUpdate();
  }, []);

  return (
    <div className="mt-8 h-96 overflow-y-auto relative">
      <hr />
      <h1 className="text-2xl font-semibold mb-4 absolute top-0 left-0 w-full bg-white py-2 px-4 z-10">
        Updated Tasks
      </h1>
      {taskUpdate.length > 0 ? (
        <div className="overflow-x-auto pt-14">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-md shadow-md">
              <thead className="bg-gray-200 sticky top-0">
                <tr>
                  <th className="py-3 px-4 border-b border-gray-300">Id</th>
                  <th className="py-3 px-4 border-b border-gray-300">Task</th>
                  <th className="py-3 px-4 border-b border-gray-300">
                    Updated By
                  </th>
                  <th className="py-3 px-4 border-b border-gray-300">
                    Date Updated
                  </th>
                  <th className="py-3 px-4 border-b border-gray-300">
                    Name (Stage)
                  </th>
                  <th className="py-3 px-4 border-b border-gray-300">
                    Description
                  </th>
                  <th className="py-3 px-4 border-b border-gray-300">
                    Performance Level
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {taskUpdate.map((taskupdate, index) => (
                  <tr key={index}>
                    <td className="py-3 px-4 border whitespace-nowrap">
                      {taskupdate.id}
                    </td>
                    <td className="py-3 px-4 border whitespace-nowrap">
                      {taskupdate.task}
                    </td>
                    <td className="py-3 px-4 border whitespace-nowrap">
                      {taskupdate.updated_by}
                    </td>
                    <td className="py-3 px-4 border whitespace-nowrap">
                      {new Date(taskupdate.date_updated).toLocaleString(
                        "en-IN",
                        { timeZone: "Asia/Kolkata" }
                      )}
                    </td>
                    <td className="py-3 px-4 border whitespace-nowrap">
                      {taskupdate.name}
                    </td>
                    <td className="py-3 px-4 border whitespace-nowrap">
                      {taskupdate.description}
                    </td>
                    <td className="py-3 px-4 border whitespace-nowrap">
                      {taskupdate.performance_level}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p className="mt-4">No Updates found.</p>
      )}
    </div>
  );
};

export default TaskUpdateLists;
