import axios from "axios";
import { useEffect, useState } from "react";

const TaskChartList = () => {
  const [taskUpdates, setTaskUpdates] = useState([]);
  const token = localStorage.getItem("TlToken");

  useEffect(() => {
    const fetchTaskUpdates = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/teamleadapi/taskchart/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        setTaskUpdates(response.data);
      } catch (error) {
        console.log("error to fetch teams");
      }
    };

    fetchTaskUpdates();
  }, []);

  return (
    <div className="wrapper">
      <h1 className="text-2xl font-semibold mb-4">Updated Tasks by Trainees</h1>
      {taskUpdates.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-md shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 border-b border-gray-300">Id</th>
                <th className="py-3 px-4 border-b border-gray-300">
                  Project Name
                </th>
                <th className="py-3 px-4 border-b border-gray-300">
                  Project Lead
                </th>
                <th className="py-3 px-4 border-b border-gray-300">
                  Assigned Part
                </th>
                <th className="py-3 px-4 border-b border-gray-300">Status</th>
                <th className="py-3 px-4 border-b border-gray-300">
                  Assigned Person
                </th>
                <th className="py-3 px-4 border-b border-gray-300">
                  Start Date
                </th>
                <th className="py-3 px-4 border-b border-gray-300">End Date</th>
                <th className="py-3 px-4 border-b border-gray-300">
                  Total Days
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {taskUpdates.map((task, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    {task.id}
                  </td>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    {task.project_detail.projectassigned}
                  </td>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    {task.project_detail.teamlead}
                  </td>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    {task.project_detail.assigned_part}
                  </td>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    {task.project_detail.status}
                  </td>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    {task.assigned_person}
                  </td>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    {task.start_date}
                  </td>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    {task.end_date}
                  </td>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    {task.total_days}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="mt-4">No Updates found.</p>
      )}
    </div>
  );
};

export default TaskChartList;
