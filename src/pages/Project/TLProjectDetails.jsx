import { useEffect, useState } from "react";
import axios from "axios";
import { assignProject } from "../../Services/allAPI";

const TLProjectDetails = ({ teamLeadName, updateRequests }) => {
  const token = localStorage.getItem("TlToken");
  const [projectData, setProjectData] = useState([]);
  console.log({ projectData });
  // const [requests, setRequests] = useState([]);
  const [formData, setFormData] = useState([
    {
      id: "",
    },
  ]);

  const [selectedProject, setSelectedProject] = useState(() => {
    return localStorage.getItem("selectedProject") || null;
  });

  const fetchProjectDetails = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/teamleadapi/projects/",
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      setProjectData(response.data);
    } catch (error) {
      console.error("Failed to fetch project details:", error);
    }
  };

  useEffect(() => {
    fetchProjectDetails();
  }, [token]);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/teamleadapi/projects/${formData.id}/project_assign/`,
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Assign successful");
        window.location.reload();
      }
    } catch (error) {
      console.error("Failed to fetch project details:", error);
    }
  };
  // handleSubmit();

  // const handleSelectProject = (projectId) => {
  //   setSelectedProject(projectId);
  //   localStorage.setItem('selectedProject', projectId);
  //   sendRequestToHR(projectId);
  // };

  // const handleRemoveSelected = () => {
  //   setSelectedProject(null);
  //   localStorage.removeItem('selectedProject');
  //   // Remove the selected project from hrRequests
  //   const updatedRequests = requests.filter(request => request.projectId !== selectedProject);
  //   localStorage.setItem('hrRequests', JSON.stringify(updatedRequests));
  //   // Call updateRequests to update requests in HrInbox
  //   updateRequests(updatedRequests);
  // };
  // const sendRequestToHR = (projectId) => {
  //   const requests = JSON.parse(localStorage.getItem('hrRequests')) || [];
  //   const selectedProject = projectData.find(project => project.id === projectId);
  //   requests.push({ projectId, projectName: selectedProject.topic, teamLeadName });
  //   localStorage.setItem('hrRequests', JSON.stringify(requests));
  //   console.log(`Request for project ${projectId} sent to HR inbox by ${teamLeadName}`);
  // };

  const handleAssign = async (projectId) => {
    console.log({ projectId });
    const token = localStorage.getItem("TlToken");
    const result = await assignProject(projectId, token);
    console.log({ result });
    if (result.status === 200) {
      fetchProjectDetails();
    }
  };

  return (
    <div className="wrapper mt-8 h-96 overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-4">Registered Projects</h1>
      {projectData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-md shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 border-b border-gray-300">
                  Project Id
                </th>
                <th className="py-3 px-4 border-b border-gray-300">
                  Project Title
                </th>
                <th className="py-3 px-4 border-b border-gray-300">
                  Project Description
                </th>
                <th className="py-3 px-4 border-b border-gray-300">Due Date</th>
                <th className="py-3 px-4 border-b border-gray-300">
                  Project Status
                </th>
                {/* <th className="py-3 px-4 border-b border-gray-300">Project Selection</th> */}
                <th className="py-3 px-4 border-b border-gray-300">
                  Assign Project
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {projectData.map((project, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    {project.id}
                  </td>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    {project.topic}
                  </td>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    {project.description}
                  </td>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    {project.end_date}
                  </td>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    {project.project_status}
                  </td>
                  {/* <td className="py-3 px-4 border whitespace-nowrap">
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => handleSelectProject(project.id)}
                        disabled={selectedProject !== null && selectedProject !== project.id}
                        className={`flex justify-center items-center w-full py-2 px-4 border rounded-md shadow-sm text-sm font-medium ${selectedProject == project.id ? "bg-green-500 text-white hover:bg-green-600" : selectedProject !== null ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
                          }`}

                      >
                        {selectedProject == project.id ? "Selected" : "Select"}
                      </button>
                      {selectedProject == project.id && (
                        <button
                          type="button"
                          onClick={handleRemoveSelected}
                          className="flex justify-center items-center p-2 border border-transparent rounded-lg shadow-sm text-xs text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                          Decline
                        </button>
                      )}
                    </div>
                  </td> */}
                  <td className="py-3 px-4 border whitespace-nowrap">
                    <div className="flex space-x-4">
                      {/* <Link to={`/project-assign/${project.id}`}> */}
                      <button
                        onClick={() => handleAssign(project.id)}
                        type="button"
                        className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-800 shadow-lg  shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        disabled={project.project_status !== "pending"}
                      >
                        {project.project_status === "pending"
                          ? "Assign"
                          : "Assigned"}
                      </button>

                      {/* </Link> */}
                    </div>
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

export default TLProjectDetails;
