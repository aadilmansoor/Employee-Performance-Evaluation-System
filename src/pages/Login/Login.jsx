import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import './Login.css'

const Login = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = (role) => {
    setSelectedRole(role);
    if (role === "admin") {
      navigate("/admin/login");
    } else if (role === "manager") {
      navigate("/manager/login");
    } else if (role === "team-lead") {
      navigate("/team-lead/login");
    } else if (role === "trainee") {
      navigate("/trainee/login");
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="relative img"
        style={{
          backgroundImage: "url('https://wallpapercave.com/wp/wp5569141.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
         <div className="absolute bg-black opacity-50"></div> 
        <div className="flex items-center justify-between min-h-screen bg-opacity-100 p-20">
        <div className="flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-6xl text-white font-bold mb-6 text-center fade-in">
                welcome! to <br />Talent Trove
              </h1>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-14 fade-in">
            <h1 className="text-3xl font-bold mb-6 text-center">Select a Role</h1>

            <div className="space-y-4">
              <button
                onClick={() => handleButtonClick("admin")}
                className="w-full p-4 rounded-md font-semibold text-dark hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 border border-gray-300 hover:border-2 hover:border-gray-700"
              >
                Admin
              </button>

              <button
                onClick={() => handleButtonClick("manager")}
                className={`w-full p-4 rounded-md font-semibold text-dark hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 border border-gray-300 hover:border-gray-500 ${
                  selectedRole === "manager" && "border-2 border-gray-700" // Selected state outline
                }`}
              >
                Manager
              </button>

              <button
                onClick={() => handleButtonClick("team-lead")}
                className={`w-full p-4 rounded-md font-semibold text-dark hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 border border-gray-300 hover:border-gray-500 ${
                  selectedRole === "team-lead" && "border-2 border-gray-700" // Selected state outline
                }`}
              >
                Team Lead
              </button>

              <button
                onClick={() => handleButtonClick("trainee")}
                className={`w-full p-4 rounded-md font-semibold text-dark hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 border border-gray-300 hover:border-gray-500 ${
                  selectedRole === "trainee" && "border-2 border-gray-700" // Selected state outline
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
      </div>
    </>
  );
};

export default Login;
