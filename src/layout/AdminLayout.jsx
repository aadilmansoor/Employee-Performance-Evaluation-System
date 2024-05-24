import Navbar from "../components/Header/Navbar";
import { Link, Outlet, useNavigate } from "react-router-dom";
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

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/");
  };

  return (
    <>
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
      <Navbar role="admin" />
      <div className="flex flex-col h-screen">
        <Card
          className={`w-64 p-4 shadow-xl shadow-blue-gray-900/5 transition-width ease-in-out duration-300 h-screen overflow-auto  fixed top-0 left-0 mt-16 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-2 p-4">
            <Typography variant="h5" color="blue-gray">
              Admin Dashboard
            </Typography>
          </div>
          <List>
            <Link to="/admin">
              <ListItem className="hover:bg-blue-100 transition-colors rounded-lg">
                <ListItemPrefix>
                  <EyeIcon className="h-5 w-5" />
                </ListItemPrefix>
                Dashboard
              </ListItem>
            </Link>
            {/* <Link
              to="/admin/view-employees"
            >
              <ListItem className="hover:bg-blue-100 transition-colors rounded-lg">
                <ListItemPrefix>
                  <EyeIcon className="h-5 w-5" />
                </ListItemPrefix>
                View Employees
              </ListItem>
            </Link> */}

            <Link to="/admin/view-meeting">
              <ListItem className="hover:bg-blue-100 transition-colors rounded-lg">
                <ListItemPrefix>
                  <CalendarDaysIcon className="h-5 w-5" />
                </ListItemPrefix>
                View Meetings
              </ListItem>
            </Link>

            {/* <Link to="/task-chart-list">
              <ListItem className="hover:bg-blue-100 transition-colors">
                <ListItemPrefix>
                  <EyeIcon className="h-5 w-5" />
                </ListItemPrefix>
                Task Chart Lists
              </ListItem>
            </Link> */}

            {/* <Link
              to="/assigned-project"
              className="hover:bg-blue-100 transition-colors"
            >
              <ListItem>
                <ListItemPrefix>
                  <EyeIcon className="h-5 w-5" />
                </ListItemPrefix>
                Assigned Project
              </ListItem>
            </Link> */}

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
export default AdminLayout;
