import React, { useState } from "react";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { EyeIcon, PowerIcon } from "@heroicons/react/24/solid";

const EmployeeHome = () => {
  const name = localStorage.getItem("userName");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleTechnologies =()=>{
    navigate("/trainee/technologies")
  }
  const handleRegisterClick = () => {
    navigate("");
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("HRtoken");
    navigate("/emp-login");
  };

  return (
    <div className="flex flex-row">
      <div className={`h-screen ${isSidebarOpen ? "" : "hidden"}`}>
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

        <Card className="h-full w-64 p-4 shadow-xl shadow-blue-gray-900/5 transition-width ease-in-out duration-300">
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
            <Link
              to="/task-chart"
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
      </div>

      <div className="max-w-sm mt-16 ml-6">
        <Link to="/emp-team">
          <Card className="border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                My Team
              </Typography>
              <Typography>View my team created by Team Lead</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button className="bg-white text-blue-500">View</Button>
            </CardFooter>
          </Card>
        </Link>
      </div>
      <div className="max-w-sm mt-16 ml-6">
        <Link to="/project-of-teams">
          <Card className="border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Projects of Team
              </Typography>
              <Typography>Here, View the Projects of the team</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button className="bg-white text-blue-500 shadow-lg">View</Button>
            </CardFooter>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeHome;
