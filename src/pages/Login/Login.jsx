import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = (role) => {
    setSelectedRole(role);
    if (role === "HR") {
      navigate("/hr-login");
    } else if (role === "Team Lead") {
      navigate("/tl-login");
    } else if (role === "Employee") {
      navigate("/emp-login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">Select a Role</h1>

        <div className="space-y-4">
          <button
            onClick={() => handleButtonClick("HR")}
            className={`w-full p-4 rounded-md font-semibold text-gray-500 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 border border-gray-300 hover:border-gray-500  ${
              selectedRole === "HR" && "border-2 border-gray-700" // Selected state outline
            }`}
          >
            Admin
          </button>

          <button
            onClick={() => handleButtonClick("Team Lead")}
            className={`w-full p-4 rounded-md font-semibold text-gray-500 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 border border-gray-300 hover:border-gray-500  ${
              selectedRole === "Team Lead" && "border-2 border-gray-700" // Selected state outline
            }`}
          >
            Manager
          </button>

          <button
            onClick={() => handleButtonClick("Employee")}
            className={`w-full p-4 rounded-md font-semibold text-gray-500 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 border border-gray-300 hover:border-gray-500  ${
              selectedRole === "Employee" && "border-2 border-gray-700" // Selected state outline
            }`}
          >
            Team Lead
          </button>

          <button
            onClick={() => handleButtonClick("Employee")}
            className={`w-full p-4 rounded-md font-semibold text-gray-500 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 border border-gray-300 hover:border-gray-500  ${
              selectedRole === "Employee" && "border-2 border-gray-700" // Selected state outline
            }`}
          >
            Trainee
          </button>
        </div>

        {selectedRole && (
          <div className="mt-6">
            <p className="text-lg font-semibold text-center">
              You selected: {selectedRole}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
