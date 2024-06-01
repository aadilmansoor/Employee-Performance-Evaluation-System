import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const AssignedProject = () => {
  const [assignedProject, setAssignedProject] = useState([]);
  const token = localStorage.getItem("TlToken");

  useEffect(() => {
    const fetchAssignedProjectDetail = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/teamleadapi/assignedprojects/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        setAssignedProject(response.data);
      } catch (error) {
        console.error("Failed to fetch assigned project details:", error);
      }
    };

    fetchAssignedProjectDetail();
  }, [token]);

  const handleAssignToEmp = async (projectId) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/teamleadapi/assignedprojects/${projectId}/project_completed/`,
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Assignment marked as complete");
        const updatedProjects = assignedProject.map((project) => {
          if (project.id === projectId) {
            return { ...project, status: "completed" };
          }
          return project;
        });
        setAssignedProject(updatedProjects);
      }
    } catch (error) {
      console.error("Failed to mark project as complete:", error);
    }
  };

  const isCompleted = (projectId) => {
    const project = assignedProject.find((p) => p.id === projectId);
    return project && project.status === "completed";
  };

  return (
    <div className="wrapper mt-8 h-96 overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-4">Assigned Project</h1>
      {assignedProject.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-md shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 border-b border-gray-300">Id</th>
                <th className="py-3 px-4 border-b border-gray-300">Project</th>
                <th className="py-3 px-4 border-b border-gray-300">
                  Team Lead
                </th>
                <th className="py-3 px-4 border-b border-gray-300">
                  Team Name
                </th>
                <th className="py-3 px-4 border-b border-gray-300">
                  Assigned to Trainees
                </th>
                <th className="py-3 px-4 border-b border-gray-300">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {assignedProject.map((assigned, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    {assigned.id}
                  </td>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    {assigned.project}
                  </td>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    {assigned.teamlead}
                  </td>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    {assigned.team}
                  </td>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    <Link to={`/assign-to-emp/${assigned.id}`}>
                      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Assign to Trainees
                      </Button>
                    </Link>
                  </td>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    {isCompleted(assigned.id) ? (
                      <span className="text-green-600">Completed</span>
                    ) : (
                      <button
                        onClick={() => handleAssignToEmp(assigned.id)}
                        type="button"
                        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                        Complete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="mt-4">No projects found.</p>
      )}
    </div>
  );
};

export default AssignedProject;
