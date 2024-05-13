import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  InboxIcon,
  PowerIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import HrInbox from "./HrInbox";

const HrHome = () => {
  const name = localStorage.getItem("userName");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const [requestsCount, setRequestsCount] = useState(0);

  useEffect(() => {
    const storedRequests = JSON.parse(localStorage.getItem("hrRequests")) || [];
    setRequestsCount(storedRequests.length);
  }, []);

  const handleRegisterClick = () => {
    navigate("/emp-register");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("HRtoken");
    navigate("/hr-login");
  };

  return (
    <div className="flex flex-row h-screen">
      <button
        onClick={toggleSidebar}
        className="text-gray-500 fixed top-4 left-4 z-50"
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

      <Card
        className={`w-64 p-4 shadow-xl shadow-blue-gray-900/5 transition-width ease-in-out duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            HR's Dashboard
          </Typography>
        </div>
        <List>
         
          <Link
            to="/hr-project-details"
            className="hover:bg-blue-100 transition-colors"
          >
            <ListItem>
              <ListItemPrefix>
                <EyeIcon className="h-5 w-5" />
              </ListItemPrefix>
              View Project Details
            </ListItem>
          </Link>
          <Link
            to="/view-teams"
            className="hover:bg-blue-100 transition-colors"
          >
            <ListItem>
              <ListItemPrefix>
                <EyeIcon className="h-5 w-5" />
              </ListItemPrefix>
              View Teams
            </ListItem>
          </Link>
          <Link
            to="/assigned-projects"
            className="hover:bg-blue-100 transition-colors"
          >
            <ListItem>
              <ListItemPrefix>
                <EyeIcon className="h-5 w-5" />
              </ListItemPrefix>
              Assigned Projects
            </ListItem>
          </Link>
          <Link
            to="/performance-lists"
            className="hover:bg-blue-100 transition-colors"
          >
            <ListItem>
              <ListItemPrefix>
                <EyeIcon className="h-5 w-5" />
              </ListItemPrefix>
              Performance Lists
            </ListItem>
          </Link>
          <Link to="hr-inbox" className="hover:bg-blue-100 transition-colors">
            <ListItem>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Inbox
              <ListItemSuffix>
                <Chip
                  value={requestsCount}
                  size="sm"
                  variant="ghost"
                  color="blue-gray"
                  className="flex items-center justify-center rounded-full w-6 h-6 bg-red-500 text-white text-xs mx-1 "
                />
              </ListItemSuffix>
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

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <div className="flex justify-center items-center h-1/6">
          <h3 className="text-3xl font-medium leading-tight text-center text-primary">
            Welcome
          </h3>
        </div>

        {/* Cards container */}
        <div className="flex justify-center items-start h-5/6 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-4">
            {/* Card 1 */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Register Project
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                Here, you have the option to enroll a project
                </p>
                <Link to="/register-project">
                  <button
                    type="button"
                    className="mt-8 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 text-white font-medium rounded-lg text-sm flex items-center px-6 py-2.5"
                  >
                    <span>Register</span>
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
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Register an Employee
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                You have the ability to enroll a new employee into our system
                </p>
                <button
                  type="button"
                  onClick={handleRegisterClick}
                  className="mt-8 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 text-white font-medium rounded-lg text-sm flex items-center px-6 py-2.5"
                >
                  <span>Register</span>

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
                      d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  View Performance
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                Here, you have access to monitor employee performance.
                </p>
                <Link to="/performance">
                  <button
                    type="button"
                    className="mt-8 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 text-white font-medium rounded-lg text-sm flex items-center px-6 py-2.5"
                  >
                    <span>Performance</span>
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
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HrHome;
