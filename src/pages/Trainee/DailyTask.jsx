import { getDailyTaskAPI, updateDailyTaskAPI } from "@/Services/allAPI";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function DailyTask() {
  const [allTask, setAllTask] = useState([]);
  const getDailyTask = async () => {
    const token = localStorage.getItem("Emp-token");
    const result = await getDailyTaskAPI(token);
    if (result.status === 200) {
      setAllTask(result.data);
    }
  };

  useEffect(() => {
    getDailyTask();
  }, []);

  const handleCheckbox = async (id) => {
    const token = localStorage.getItem("TlToken");
    const result = await updateDailyTaskAPI(token, id);
    if (result.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Task Completed",
      });
      getDailyTask();
    }
  };

  return (
    <main className="wrapper dark:bg-gray-950">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-50">
        Daily Tasks
      </h1>
      <div className="space-y-4">
        {allTask.length === 0 ? (
          <p className="text-center mt-10">No Task Available</p>
        ) : (
          <>
            {allTask.map((task) => (
              <div className="flex items-center" key={task.id}>
                <Checkbox
                  className="mr-3"
                  id="task-1"
                  checked={task.is_completed}
                  onClick={() => handleCheckbox(task.id)}
                />
                <label
                  className="text-gray-700 dark:text-gray-400"
                  htmlFor="task-1"
                >
                  {task.task}
                </label>
              </div>
            ))}
          </>
        )}
      </div>
    </main>
  );
}
