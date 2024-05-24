import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import UpdateTask from "./UpdateTask";
import TaskUpdateLists from "./TaskUpdateLists";

const TaskChart = () => {
  const [taskChart, setTaskChart] = useState([]);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("Emp-token");

  useEffect(() => {
    const fetchTaskChart = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/empapi/taskchart/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        setTaskChart(response.data);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch team details:", error);
        setError("Failed to fetch team details. Please try again.");
      }
    };

    fetchTaskChart();
  }, []);

  return (
    <div className="wrapper overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-4">Task chart</h1>
      {error ? (
        <p className="mt-4">{error}</p>
      ) : taskChart.length > 0 ? (
        <div className="relative">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Task Id</th>
                <th className="border border-gray-300 px-4 py-2">
                  Project Detail
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Assigned Person
                </th>
                <th className="border border-gray-300 px-4 py-2">Start Date</th>
                <th className="border border-gray-300 px-4 py-2">Total Days</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {taskChart.map((task, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    {task.id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {task.project_detail}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {task.assigned_person}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {task.start_date}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {task.total_days}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <Link to={`/update-tasks/${task.id}`}>
                      <button
                        type="button"
                        className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Update
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="mt-4">No Tasks.</p>
      )}

      <TaskUpdateLists />
    </div>
  );
};

export default TaskChart;
