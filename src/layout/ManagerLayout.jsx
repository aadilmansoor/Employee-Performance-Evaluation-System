import Navbar from "../components/Header/Navbar";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  Card,
  Chip,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Typography,
} from "@material-tailwind/react";
import { EyeIcon, InboxIcon, PowerIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const ManagerLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("HRtoken");
    navigate("/hr-login");
  };

  return (
    <>
      <Navbar />
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
          <Link
            to="/hr-project-details"
            className="hover:bg-blue-100 transition-colors"
          >
            <ListItem className="hover:bg-blue-100">
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
            <ListItem className="hover:bg-blue-100">
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
            <ListItem className="hover:bg-blue-100">
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
            <ListItem className="hover:bg-blue-100">
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
                  value={0}
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
      <Outlet />
    </>
  );
};
export default ManagerLayout;
