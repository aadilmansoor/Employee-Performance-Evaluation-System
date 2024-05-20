import { getDailyTaskAPI } from "@/Services/allAPI";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";

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

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-950">
      <div className="w-full max-w-md px-4 py-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-50">
          Daily Tasks
        </h1>
        <div className="space-y-4">
          {allTask.map((task) => (
            <div className="flex items-center" key={task.id}>
              <Checkbox className="mr-3" id="task-1" checked={true} />
              <label
                className="text-gray-700 dark:text-gray-400"
                htmlFor="task-1"
              >
                {task.task}
              </label>
            </div>
          ))}
          <div className="flex items-center">
            <Checkbox className="mr-3 border-black" id="task-1" />
            <label
              className="text-gray-700 dark:text-gray-400"
              htmlFor="task-1"
            >
              Complete weekly report
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox className="mr-3" id="task-2" />
            <label
              className="text-gray-700 dark:text-gray-400"
              htmlFor="task-2"
            >
              Respond to client emails
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox className="mr-3" id="task-3" />
            <label
              className="text-gray-700 dark:text-gray-400"
              htmlFor="task-3"
            >
              Finish design mockups
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox className="mr-3" id="task-4" />
            <label
              className="text-gray-700 dark:text-gray-400"
              htmlFor="task-4"
            >
              Schedule team meeting
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox className="mr-3 border" id="task-5" />
            <label
              className="text-gray-700 dark:text-gray-400"
              htmlFor="task-5"
            >
              Review and approve invoices
            </label>
          </div>
        </div>
      </div>
    </main>
  );
}
