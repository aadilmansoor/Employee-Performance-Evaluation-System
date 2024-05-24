import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { toast } from "react-toastify";

const ProjectOfTeams = () => {
  const [teamProjects, setTeamProjects] = useState([]);
  const [formData, setFormData] = useState({ id: "" });
  const token = localStorage.getItem("Emp-token");
  console.log({ teamProjects });

  useEffect(() => {
    const fetchTeamProjects = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/empapi/assignedprojects/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        setTeamProjects(response.data);
      } catch (error) {
        console.log("Error fetching team projects:", error);
      }
    };

    fetchTeamProjects();
  }, []);

  const handleCreateButtonClick = (detailId) => {
    console.log("Detail ID:", detailId);
    setFormData({ id: detailId });
    console.log("FormData:", formData);
    handleCreate();
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/empapi/projectdetail/${formData.id}/taskchart_add/`,
        formData,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      alert("Task Chart Created");
      console.log("API Response:", response.data);
    } catch (error) {
      toast.warning("Task chart already created.");
      console.error("Error creating project task:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="mt-8 max-w-lg w-full overflow-y-auto">
        <div className="grid gap-6 mt-16">
          {teamProjects.length > 0 ? (
            teamProjects.map((project, index) => (
              <Card
                key={index}
                className="w-full border-4 border-gray-300 rounded-lg shadow-xl"
              >
                <CardBody>
                  <h1 className="text-2xl mt-4 font-semibold text-center">
                    Projects
                  </h1>

                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Project of Team
                  </Typography>
                  <Typography>
                    <span className="font-semibold">Project Id:</span>{" "}
                    {project.id}
                  </Typography>
                  <Typography>
                    <span className="font-semibold">Team Lead:</span>{" "}
                    {project.teamlead}
                  </Typography>
                  <Typography>
                    <span className="font-semibold">Project:</span>{" "}
                    {project.project}
                  </Typography>
                  <Typography className="mb-4">
                    <span className="font-semibold">Team Name:</span>{" "}
                    {project.team}
                  </Typography>
                  {project.project_details.length === 0 ? (
                    ""
                  ) : (
                    <>
                      <hr className="my-4" />
                      <h1 className="text-2xl font-semibold mb-4 text-center">
                        Project Details
                      </h1>
                      {project.project_details.map((detail, detailIndex) => (
                        <div key={detailIndex}>
                          <Typography className="mt-4">
                            <span className="font-semibold">Id:</span>{" "}
                            {detail.id}
                          </Typography>
                          <Typography>
                            <span className="font-semibold">
                              Assigned Person:
                            </span>{" "}
                            {detail.assigned_person}
                          </Typography>
                          <Typography>
                            <span className="font-semibold">
                              Assigned Part:
                            </span>{" "}
                            {detail.assigned_part}
                          </Typography>
                          <Typography>
                            <span className="font-semibold">Status:</span>{" "}
                            {detail.status}
                          </Typography>
                          <button
                            onClick={() => handleCreateButtonClick(detail.id)}
                            className="w-40 h-12 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          >
                            Create Chart
                          </button>
                        </div>
                      ))}
                    </>
                  )}
                </CardBody>
              </Card>
            ))
          ) : (
            <p className="mt-4 text-center">No team projects found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectOfTeams;
