import React, { useEffect, useState } from "react";
import axios from "axios";

const AssignedProjects = () => {
  const [assignedProjectData, setAssignedProjectData] = useState([]);
  const token = localStorage.getItem("HRtoken");

  useEffect(() => {
    const fetchAssignedProjectDetails = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/hrapi/assignedprojects/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        setAssignedProjectData(response.data);
      } catch (error) {
        console.error("Failed to fetch assigned project details:", error);
      }
    };

    fetchAssignedProjectDetails();
  }, [token]);
  console.log(assignedProjectData);

  return (
    <div className="wrapper h-96 overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-4">Assigned Projects</h1>
      {assignedProjectData.length > 0 ? (
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
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {assignedProjectData.map((assigned, index) => (
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

export default AssignedProjects;
