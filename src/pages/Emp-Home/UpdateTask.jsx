import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { Input, Option, Select } from "@material-tailwind/react";

function UpdateTask() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [performance_level, setPerformance] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("Emp-token");
  const { id } = useParams();

  // useEffect(() => {
  //   const fetchTaskDetails = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://127.0.0.1:8000/empapi/taskchart/${id}`
  //       );
  //       const { name, description, performance_level } = response.data;
  //       setName(name);
  //       setDescription(description);
  //       setPerformance(performance_level);
  //     } catch (error) {
  //       console.error("Failed to fetch task details:", error);
  //     }
  //   };

  //   fetchTaskDetails();
  // }, [id]);

  const taskUpdate = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/empapi/taskchart/${id}/taskupdates_add/`,
        {
          name,
          description,
          performance_level,
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
          title: "Updated Successfully",
          text: "You have successfully updated the task.",
        }).then(() => {
          navigate("/task-chart");
        });
      } else {
        setErrorMessage("Update failed");
      }
    } catch (error) {
      console.error("Update error:", error);
      setErrorMessage(error.message || "Update failed");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    await taskUpdate();
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Update Task
        </h2>
        <form onSubmit={handleUpdate} className="space-y-6">
          <div>
            <Input
              label="Stage"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <Input
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <Select
              label="Performance Level"
              value={performance_level}
              onChange={(newValue) => setPerformance(newValue)}
            >
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
            </Select>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update
            </button>
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default UpdateTask;
