import React, { useEffect, useState } from "react";
import axios from "axios";
import { DeleteIcon } from "lucide-react";
import { IconButton } from "@mui/material";
import Swal from "sweetalert2";

const HrProjectDetails = () => {
  const [projectData, setProjectData] = useState([]);
  const token = localStorage.getItem("HRtoken");
  const API_URL = "http://127.0.0.1:8000/hrapi/projects/";

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setProjectData(response.data);
      } catch (error) {
        console.error("Failed to fetch project details:", error);
      }
    };

    fetchProjectDetails();
  }, [token]);

  const handleDeletePerformance = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    });
    if(result.isConfirmed){
      try {
      await axios.delete(`http://127.0.0.1:8000/hrapi/projects/${id}/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      Swal.fire({
        icon: "success",
        title: "Project Deleted",
      });
      
      setProjectData(projectData.filter((project) => project.id !== id));

    } catch (error) {
      console.error("Failed to delete project:", error);
    }}
  };

  return (
    <div className="wrapper h-96 overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-4">Registered Projects</h1>
      {projectData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-md shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 border-b border-gray-300">Project Id</th>
                <th className="py-3 px-4 border-b border-gray-300">Project Title</th>
                <th className="py-3 px-4 border-b border-gray-300">Project Description</th>
                <th className="py-3 px-4 border-b border-gray-300">Due Date</th>
                <th className="py-3 px-4 border-b border-gray-300">Project Status</th>
                <th className="py-3 px-4 border-b border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {projectData.map((project, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 border whitespace-nowrap">{project.id}</td>
                  <td className="py-3 px-4 border whitespace-nowrap">{project.topic}</td>
                  <td className="py-3 px-4 border whitespace-nowrap">{project.description}</td>
                  <td className="py-3 px-4 border whitespace-nowrap">{project.end_date}</td>
                  <td className="py-3 px-4 border whitespace-nowrap">{project.project_status}</td>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    <IconButton
                      onClick={() => handleDeletePerformance(project.id)}
                    >
                      <DeleteIcon style={{ color: "red" }} />
                    </IconButton>
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

export default HrProjectDetails;
