import Navbar from "../components/Header/Navbar";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import { Link, Outlet, useNavigate } from "react-router-dom";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import {
  CalendarDaysIcon,
  EyeIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const TraineeLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("Emp-token");
    navigate("/");
  };

  const handleTechnologies = () => {
    navigate("/trainee/technologies");
  };

  return (
    <>
      <Navbar role="trainee" />
      <button
        onClick={toggleSidebar}
        className="text-gray-500 fixed top-[30px] left-[20px] z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div className="flex-col h-screen">
        <Card
          className={`w-64 p-4 shadow-xl shadow-blue-gray-900/5 transition-width ease-in-out duration-300 h-screen  fixed top-0 left-0 mt-16 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {" "}
          <div className="mb-2 p-4">
            <Typography variant="h5" color="blue-gray">
              Trainee Dashboard
            </Typography>
          </div>
          <List>
            {/* <Link
              to="/emp-team"
              className="hover:bg-blue-100 transition-colors"
            >
              <ListItem>
                <ListItemPrefix>
                  <EyeIcon className="h-5 w-5" />
                </ListItemPrefix>
                My Team
              </ListItem>
            </Link> */}
            {/* <Link
              to="/project-of-teams"
              className="hover:bg-blue-100 transition-colors"
            >
              <ListItem>
                <ListItemPrefix>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                    />
                  </svg>
                </ListItemPrefix>
                Project of Team
              </ListItem>
            </Link> */}
            <Link to="/trainee">
              <ListItem className="hover:bg-blue-100 transition-colors rounded-lg">
                <ListItemPrefix>
                  <EyeIcon className="h-5 w-5" />
                </ListItemPrefix>
                Dashboard
              </ListItem>
            </Link>
            <Link to="/task-chart">
              <ListItem className="hover:bg-blue-100 transition-colors rounded-lg">
                <ListItemPrefix>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                    />
                  </svg>
                </ListItemPrefix>
                Task Chart
              </ListItem>
            </Link>
            <ListItem
              className="hover:bg-blue-100 transition-colors"
              onClick={handleTechnologies}
            >
              <ListItemPrefix>
                <LaptopChromebookIcon />
              </ListItemPrefix>
              Technologies
            </ListItem>

            <Link to="/trainee/view-meeting">
              <ListItem className="hover:bg-blue-100 transition-colors rounded-lg">
                <ListItemPrefix>
                  <CalendarDaysIcon className="h-5 w-5" />
                </ListItemPrefix>
                View Meetings
              </ListItem>
            </Link>

            <Link to="/trainee/study">
              <ListItem className="hover:bg-blue-100 transition-colors rounded-lg">
                <ListItemPrefix>
                  <LibraryBooksIcon className="h-5 w-5" />
                </ListItemPrefix>
                Study Materials
              </ListItem>
            </Link>

            <ListItem
              className="hover:bg-blue-100 transition-colors"
              onClick={handleLogout}
            >
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
        </Card>
        <div className={`${isSidebarOpen ? "ms-[240px]" : ""} transition-all`}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default TraineeLayout;
