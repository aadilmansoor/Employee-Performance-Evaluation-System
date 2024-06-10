import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import AssignProjectEmployees from "./pages/TL-Home/AssignProjectEmployees";
import HrInbox from "./pages/Hr-Home/HrInbox";
import AssignedProjects from "./pages/Hr-Home/AssignedProjects";
import ProjectOfTeams from "./pages/Emp-Home/ProjectOfTeams";
import EmpTeam from "./pages/Emp-Home/EmpTeam";
import UpdateTask from "./pages/Emp-Home/UpdateTask";
import TaskChart from "./pages/Emp-Home/TaskChart";
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
import Review from "./components/Review";
import ViewStudy from "./pages/ViewStudy";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ViewMeeting from "./components/Viewmeeting";
import AddDailyTask from "./pages/TL-Home/AddDailyTask";
import DailyTask from "./pages/Trainee/DailyTask";
import TeamLeadDailyTask from "./pages/TeamLead/TeamLeadDailyTask";
import AssignedProject from "./pages/TL-Home/AssignedProject";
import ShowTraineeProfile from "./pages/TeamLead/ShowTraineeProfile";
import ViewReviews from "./pages/Hr-Home/ViewReviews";
import PerformanceEmp from "./pages/TL-Home/PerformanceEmp";

const App = () => {
  const [projectData, setProjectData] = useState([]);

  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          {/* Common */}
          <Route path="/" element={<Login />} />
          <Route path="/schedule-meeting" element={<ScheduleMeeting />} />\
          {/* admin */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<AdminHome />} />
            <Route
              path="/admin/view-meeting"
              element={<ViewMeeting role="admin" />}
            />

            <Route path="/admin/view-employees" element={<ViewEmployees />} />
            <Route
              path="/admin/schedule-meeting"
              element={<ScheduleMeeting role="admin" />}
            />

            <Route path="/admin/approval" element={<AdminApproval />} />
          </Route>
          {/* manager */}
          <Route path="/manager/login" element={<ManagerLogin />} />
          <Route path="manager/register" element={<ManagerRegister />} />
          <Route element={<ManagerLayout />}>
            <Route path="/manager" element={<HrHome />} />
            <Route
              path="/manager/view-meeting"
              element={<ViewMeeting role="manager" />}
            />

            <Route path="/manager/profile" element={<HrProfile />} />
            <Route path="/manager/performance" element={<Performance />} />
            <Route
              path="/manager/schedule-meeting"
              element={<ScheduleMeeting role="manager" />}
            />
            <Route
              path="/manager/performance-lists"
              element={<PerformanceLists />}
            />
            <Route
              path="/manager/trainee-register"
              element={<TraineeRegister />}
            />
            <Route
              path="/manager/assigned-projects"
              element={<AssignedProjects />}
            />
            <Route path="/manager/review" element={<ViewReviews />} />

            <Route path="/view-teams" element={<ViewTeams />} />
            <Route
              path="/manager/project-details"
              element={<HrProjectDetails />}
            />
            {/* Pass the updateRequests function to HrInbox */}
            <Route path="/manager/inbox" element={<HrInbox />} />
          </Route>
          {/* team lead */}
          <Route path="/team-lead/login" element={<TeamLeadLogin />} />
          <Route path="/team-lead/register" element={<TeamLeadRegister />} />
          <Route element={<TeamLeadLayout />}>
            <Route
              path="/assign-to-emp/:id"
              element={<AssignProjectEmployees />}
            />
            <Route
              path="/team-lead/add-daily-task"
              element={<AddDailyTask />}
            />

            <Route path="/team-lead/login" element={<TeamLeadLogin />} />
            <Route
              path="/team-lead/view-daily-task"
              element={<TeamLeadDailyTask />}
            />
            <Route
              path="/team-lead/view-meeting"
              element={<ViewMeeting role="team-lead" />}
            />
            <Route path="/team-lead/Performance" element={<PerformanceEmp />} />

            <Route
              path="/team-lead/trainee-profile"
              element={<ShowTraineeProfile />}
            />
            <Route path="/review" element={<Review />} />
            <Route
              path="/team-lead/schedule-meeting"
              element={<ScheduleMeeting role="team-lead" />}
            />
            <Route path="/team-lead/register" element={<TeamLeadRegister />} />
            <Route path="/team-lead" element={<TeamLeadHome />} />
            <Route path="/team-lead/profile" element={<TeamLeadProfile />} />
            <Route path="/team-lead/team-create" element={<TeamCreation />} />
            <Route
              path="/team-lead/task-chart-list"
              element={<TaskChartList />}
            />
            <Route
              path="/team-lead/assigned-projects"
              element={<AssignedProject />}
            />
            <Route
              path="/team-lead/view-employees"
              element={<ViewEmployees />}
            />
            <Route
              path="/team-lead/project-details"
              element={<TLProjectDetails />}
            />
            <Route path="team-lead/view-team" element={<ViewTeam />} />
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
          <Route path="/trainee/login" element={<TraineeLogin />} />
          <Route element={<TraineeLayout />}>
            <Route path="/trainee" element={<EmployeeHome />} />

            <Route
              path="/trainee/view-meeting"
              element={<ViewMeeting role="trainee" />}
            />

            <Route path="/emp-team" element={<EmpTeam />} />
            <Route path="/task-chart" element={<TaskChart />} />
            <Route path="/trainee/daily-task" element={<DailyTask />} />
            <Route path="/update-tasks/:id" element={<UpdateTask />} />
            <Route path="/trainee/technologies" element={<Skills />} />
            <Route path="/trainee/profile" element={<TraineeProfile />} />
            <Route path="/trainee/study" element={<ViewStudy />} />
            <Route
              path="/trainee/project-of-teams"
              element={<ProjectOfTeams />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        autoClose={2000}
        theme="colored"
        position="bottom-right"
      />
    </div>
  );
};

export default App;
