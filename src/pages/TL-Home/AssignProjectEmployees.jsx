import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { toast } from "react-toastify";

function AssignProjectEmployees() {
  const [assigned_part, setAssignedPart] = useState("");
  const [assigned_person, setAssignedPerson] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("TlToken");
  const { id } = useParams();
  console.log(id);

  const AssignToEmp = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/teamleadapi/assignedprojects/${id}/assign_to_emp/`,

        {
          assigned_part,
          assigned_person,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Assignation Successful",
          text: "You have successfully Created.",
        }).then(() => {
          navigate("/team-lead");
        });
      }
    } catch (error) {
      let message = "";
      if (error?.response?.data?.assigned_person) {
        message = error?.response?.data?.assigned_person[0];
      } else {
        message = error?.response?.data?.detail;
      }
      toast.warning(message || "Please enter valid trainee id");
      console.error("Creation error:", error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    await AssignToEmp();
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Assign Project Trainees
        </h2>
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-900"
            >
              Assigned Part
            </label>
            <input
              value={assigned_part}
              onChange={(e) => setAssignedPart(e.target.value)}
              type="text"
              required
              className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Assigned to
            </label>
            <input
              value={assigned_person}
              onChange={(e) => setAssignedPerson(e.target.value)}
              type="text"
              required
              className="block w-full py-2 pl-3 pr-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Assign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AssignProjectEmployees;
