import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import HrHome from "./pages/Hr-Home/HrHome";
import TeamLeadHome from "./pages/TL-Home/TeamLeadHome";
import EmployeeHome from "./pages/Emp-Home/EmployeeHome";
import HrProfile from "./pages/Hr-Profile/HrProfile";
import TeamLeadProfile from "./pages/TL-Profile/TeamLeadProfile";
import ProjectRegister from "./pages/Register/ProjectRegister";
import HrProjectDetails from "./pages/Project/HrProjectDetails";
import TLProjectDetails from "./pages/Project/TLProjectDetails";
import Login from "./pages/Login/Login";
import TeamCreation from "./pages/TL-Home/TeamCreation";
import ViewEmployees from "./pages/TL-Home/ViewEmployees";
import ViewTeam from "./pages/TL-Home/ViewTeam";
import ViewTeams from "./pages/Hr-Home/ViewTeams";
// import ProjectAssign from "./pages/TL-Home/ProjectAssign";
import AssignProjectEmployees from "./pages/TL-Home/AssignProjectEmployees";
import HrInbox from "./pages/Hr-Home/HrInbox";
import AssignedProjects from "./pages/Hr-Home/AssignedProjects";
import ProjectOfTeams from "./pages/Emp-Home/ProjectOfTeams";
import EmpTeam from "./pages/Emp-Home/EmpTeam";
// import TaskUpdateLists from "./pages/Emp-Home/TaskUpdateLists";
import UpdateTask from "./pages/Emp-Home/UpdateTask";
import TaskChart from "./pages/Emp-Home/TaskChart";
import AssignedProject from "./pages/TL-Home/AssignedProject";
import Performance from "./pages/Hr-Home/Performance";
import PerformanceLists from "./pages/Hr-Home/PerformanceLists";
import TaskChartList from "./pages/TL-Home/TaskChartList";
import AdminLogin from "./pages/Login/AdminLogin";
import ManagerLogin from "./pages/Login/ManagerLogin";
import TeamLeadLogin from "./pages/Login/TeamLead";
import TraineeLogin from "./pages/Login/TraineeLogin";
import AdminHome from "./pages/Admin/AdminHome";
import AdminApproval from "./pages/Admin/AdminApproval";
import ManagerRegister from "./pages/Register/ManagerRegister";
import TraineeRegister from "./pages/Register/TraineeRegister";
import TeamLeadRegister from "./pages/Register/TeamLeadRegister";
import Skills from "./components/Skills";
import TraineeProfile from "./pages/TraineeProfile/TraineeProfile";
import ManagerLayout from "./layout/ManagerLayout";
import ScheduleMeeting from "./components/ScheduleMeeting";
import AdminLayout from "./layout/AdminLayout";
import TeamLeadLayout from "./layout/TeamLeadLayout";
import TraineeLayout from "./layout/TraineeLayout";
// import UpdatedTasks from "./pages/TL-Home/UpdatedTasks";

const App = () => {
  const [projectData, setProjectData] = useState([]);
  const [requests, setRequests] = useState([]);

  // Define the updateRequests function
  const updateRequests = (updatedRequests) => {
    setRequests(updatedRequests);
  };

  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          {/* Common */}
          <Route path="/" element={<Login />} />
          <Route path="/view-employees" element={<ViewEmployees />} />
          <Route path="/schedule-meeting" element={<ScheduleMeeting />} />\
          {/* admin */}
          <Route element={<AdminLayout />}>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/admin/approval" element={<AdminApproval />} />
          </Route>
          {/* manager */}
          <Route element={<ManagerLayout />}>
            <Route path="/manager/login" element={<ManagerLogin />} />
            <Route path="manager/register" element={<ManagerRegister />} />
            <Route path="/manager" element={<HrHome />} />
            <Route path="/hr-profile" element={<HrProfile />} />
            <Route path="/hr-project-details" element={<HrProjectDetails />} />
            {/* Pass the updateRequests function to HrInbox */}
            <Route
              path="/hr-home/hr-inbox"
              element={<HrInbox updateRequests={updateRequests} />}
            />
          </Route>
          {/* team lead */}
          <Route element={<TeamLeadLayout />}>
            <Route path="/team-lead/login" element={<TeamLeadLogin />} />
            <Route path="/team-lead/register" element={<TeamLeadRegister />} />
            <Route path="/tl-home" element={<TeamLeadHome />} />
            <Route path="/team-lead/profile" element={<TeamLeadProfile />} />
            <Route path="/team-create" element={<TeamCreation />} />
            <Route
              path="/tl-project-details"
              element={<TLProjectDetails updateRequests={updateRequests} />}
            />
            <Route path="/project-of-teams" element={<ProjectOfTeams />} />
            <Route path="/view-team" element={<ViewTeam />} />
            <Route path="/view-teams" element={<ViewTeams />} />
            <Route
              path="/register-project"
              element={
                <ProjectRegister
                  projectData={projectData}
                  setProjectData={setProjectData}
                />
              }
            />
          </Route>
          {/* trainee */}
          <Route element={<TraineeLayout />}>
            <Route path="/trainee/login" element={<TraineeLogin />} />
            <Route path="/trainee/register" element={<TraineeRegister />} />
            <Route path="/emp-home" element={<EmployeeHome />} />
            <Route
              path="/assign-to-emp/:id"
              element={<AssignProjectEmployees />}
            />
            <Route path="/assigned-projects" element={<AssignedProjects />} />
            <Route path="/emp-team" element={<EmpTeam />} />
            <Route path="/task-chart" element={<TaskChart />} />
            <Route path="/update-tasks/:id" element={<UpdateTask />} />
            <Route path="/assigned-project" element={<AssignedProject />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/performance-lists" element={<PerformanceLists />} />
            <Route path="/task-chart-list" element={<TaskChartList />} />
            <Route path="/trainee/technologies" element={<Skills />} />
            <Route path="/trainee/profile" element={<TraineeProfile />} />
          </Route>
          {/* <Route path="/emp-assign" element={<ProjectStatusReport />} /> */}
          {/* <Route path="/project-assign/:projectId" element={<ProjectAssign />} /> */}
          {/* <Route path="/task-update-lists" element={<TaskUpdateLists />} /> */}
          {/* <Route path="/updated-tasks" element={<UpdatedTasks />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
