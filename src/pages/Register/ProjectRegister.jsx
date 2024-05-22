import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const ProjectRegister = ({ projectData, setProjectData }) => {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const token = localStorage.getItem("HRtoken");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      topic: event.target.elements.topic.value,
      description: event.target.elements.description.value,
      end_date: event.target.elements.due.value,
    };

    try {
      const response = await registerProject(formData);
      if (response && response.data) {
        setProjectData([...projectData, response.data]);
        // Redirect to ProjectAssign page with project ID in URL
      }
      Swal.fire({
        icon: "success",
        title: "Project Registered Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(`/manager`);
    } catch (error) {
      console.error("Project registration failed:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.detail ===
          "Authentication credentials were not provided."
      ) {
        Swal.fire({
          icon: "error",
          title: "Authentication Error",
          text: "Authentication credentials were not provided. Please login again.",
        });
      } else if (error.response && error.response.data) {
        const { data } = error.response;
        if (data.topic) {
          setErrorMessages(data);
        } else {
          Swal.fire({
            icon: "error",
            title: "Registration Error",
            text: "Failed to register project. Please try again later.",
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration Error",
          text: "An unexpected error occurred. Please try again later.",
        });
      }
    }
  };

  const registerProject = async (formData) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/hrapi/projects/",
        formData,
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessages(error.response.data);
      } else {
        throw error;
      }
    }
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md border border-gray-300">
      <h1 className="text-2xl font-semibold mb-6">Project Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            id="topic"
            name="topic"
            placeholder="Project Title"
            className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
          {errorMessages.topic && (
            <p className="text-red-500">{errorMessages.topic[0]}</p>
          )}
        </div>
        <div className="mb-4">
          <textarea
            id="description"
            name="description"
            placeholder="Project Description"
            className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
            rows="5"
            required
          ></textarea>
          {errorMessages.description && (
            <p className="text-red-500">{errorMessages.description[0]}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="due"
            className="block text-sm font-medium text-gray-700"
          >
            Due
          </label>
          <input
            type="date"
            id="due"
            name="due"
            className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
          {errorMessages.end_date && (
            <p className="text-red-500">{errorMessages.end_date[0]}</p>
          )}
        </div>
        <button
          type="submit"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProjectRegister;
