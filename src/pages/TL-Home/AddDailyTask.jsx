import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

function AddDailyTask() {
  const [Dailytask, setDailyTask] = useState({
    id: "",
    task: "",
  });
  console.log(Dailytask);

  const [errorMessages, setErrorMessages] = useState(null);
  const token = localStorage.getItem("TlToken");

  const addDailyTask = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/teamleadapi/employee/${Dailytask.id}/add_task/`,
        Dailytask,
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      Swal.fire({
        icon: "success",
        title: "Task added successfully",
        text: ".",
      });
      setDailyTask({
        id: "",
        task: "",
      });

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
    <>
      <div>
        <h1 style={{ fontSize: "30px" }} className="text-center mt-5">
          Today&apos;s Task
        </h1>
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray rounded-lg shadow-md border border-black">
          <form onSubmit={addDailyTask}>
            <div className="mb-4">
              <input
                id="id"
                name="id"
                type="text"
                autoComplete="id"
                required
                placeholder="Trainee Id"
                value={Dailytask.id}
                onChange={(e) =>
                  setDailyTask({ ...Dailytask, id: e.target.value })
                }
                className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-5"
              />{" "}
              <textarea
                id="task"
                name="task"
                placeholder="Task"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
                rows="5"
                required
                value={Dailytask.task}
                onChange={(e) =>
                  setDailyTask({ ...Dailytask, task: e.target.value })
                }
              ></textarea>
            </div>
            <Button type="submit">Submit</Button>
          </form>
          {errorMessages && <div className="text-red-500 mt-4"></div>}
        </div>
      </div>
    </>
  );
}

export default AddDailyTask;
