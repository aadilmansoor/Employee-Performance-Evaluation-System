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

const ManagerLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("HRtoken");
    navigate("/");
  };

  return (
    <>
      <Navbar role="manager" />
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
          className={`w-64 p-4 shadow-xl shadow-blue-gray-900/5 transition-width ease-in-out duration-300 h-screen overflow-auto  fixed top-0 left-0 mt-16 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-2 p-4">
            <Typography variant="h5" color="blue-gray">
              Manager Dashboard
            </Typography>
          </div>
          <List>
            <Link to="/manager">
              <ListItem className="hover:bg-blue-100 transition-colors rounded-lg">
                <ListItemPrefix>
                  <EyeIcon className="h-5 w-5" />
                </ListItemPrefix>
                Dashboard
              </ListItem>
            </Link>
            <Link to="/manager/project-details">
              <ListItem className="hover:bg-blue-100 transition-colors rounded-lg">
                <ListItemPrefix>
                  <EyeIcon className="h-5 w-5" />
                </ListItemPrefix>
                View Project Details
              </ListItem>
            </Link>
            <Link to="/view-teams">
              <ListItem className="hover:bg-blue-100 transition-colors rounded-lg">
                <ListItemPrefix>
                  <EyeIcon className="h-5 w-5" />
                </ListItemPrefix>
                View Teams
              </ListItem>
            </Link>
            <Link to="/manager/assigned-projects">
              <ListItem className="hover:bg-blue-100 transition-colors rounded-lg">
                <ListItemPrefix>
                  <EyeIcon className="h-5 w-5" />
                </ListItemPrefix>
                Assigned Projects
              </ListItem>
            </Link>
            <Link to="/manager/performance-lists">
              <ListItem className="hover:bg-blue-100 transition-colors rounded-lg">
                <ListItemPrefix>
                  <EyeIcon className="h-5 w-5" />
                </ListItemPrefix>
                Performance Lists
              </ListItem>
            </Link>
            <Link to="/manager/view-meeting">
              <ListItem className="hover:bg-blue-100 transition-colors rounded-lg">
                <ListItemPrefix>
                  <CalendarDaysIcon className="h-5 w-5" />
                </ListItemPrefix>
                View Meetings
              </ListItem>
            </Link>
            <Link to="/manager/review">
              <ListItem className="hover:bg-blue-100 transition-colors rounded-lg">
                <ListItemPrefix>
                  <EyeIcon className="h-5 w-5" />
                </ListItemPrefix>
                View Reviews
              </ListItem>
            </Link>
            {/* <Link to="/manager/inbox">
              <ListItem className="hover:bg-blue-100 transition-colors rounded-lg">
                <ListItemPrefix>
                  <InboxIcon className="h-5 w-5" />
                </ListItemPrefix>
                Inbox
                 <ListItemSuffix>
                  <Chip
                    value={0}
                    size="sm"
                    variant="ghost"
                    color="blue-gray"
                    className="flex items-center justify-center rounded-full w-6 h-6 bg-red-500 text-white text-xs mx-1 "
                  />
                </ListItemSuffix>
              </ListItem>
            </Link> */}
            <ListItem
              className="hover:bg-blue-100 transition-colors rounded-lg"
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
export default ManagerLayout;
