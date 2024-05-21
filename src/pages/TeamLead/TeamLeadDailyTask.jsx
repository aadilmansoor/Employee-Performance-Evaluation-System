import { getDailyTaskTeamLeadAPI } from "@/Services/allAPI";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { separateByEmp } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function TeamLeadDailyTask() {
  const [allTask, setAllTask] = useState([]);
  console.log({ allTask });
  const getDailyTask = async () => {
    const token = localStorage.getItem("TlToken");
    const result = await getDailyTaskTeamLeadAPI(token);
    if (result.status === 200) {
      setAllTask(separateByEmp(result.data));
    }
  };

  useEffect(() => {
    getDailyTask();
  }, []);

  return (
    <div className="wrapper">
      <h3 className="text-3xl font-medium leading-tight text-center text-primary mt-4 mb-8">
        All Tasks
      </h3>
      <div className="space-y-16 p-6 ">
        {Object.keys(allTask).map((emp) => (
          <div key={emp}>
            <h2 className="text-2xl font-bold mb-8 capitalize">
              {emp}&apos;s Tasks
            </h2>
            <div className="space-y-4">
              {allTask[emp].map((task) => (
                <div className="flex items-start space-x-2 mb-2" key={task.id}>
                  <Checkbox
                    id={`task-${task.id}`}
                    checked={task.is_completed}
                  />
                  <div className="grid gap-1 leading-none">
                    <Label className="font-medium text-md" htmlFor="task1">
                      {task.task}
                    </Label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
