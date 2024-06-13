import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Home.css'

const HrHome = () => {
  const navigate = useNavigate();
  const [requestsCount, setRequestsCount] = useState(0);

  useEffect(() => {
    const storedRequests = JSON.parse(localStorage.getItem("hrRequests")) || [];
    setRequestsCount(storedRequests.length);
  }, []);

  const handleRegisterClick = () => {
    navigate("/manager/trainee-register");
  };

  return (
    <>
      <div className="hrhome">
        <div className="wrapper">
          {/* Content */}
          <div className="flex flex-col items-center flex-grow">
            <div className="flex justify-center items-center h-1/6">
              <h3 className="text-3xl font-medium leading-tight text-center text-primary mb-8">
                Welcome
              </h3>
            </div>
    
            {/* Cards container */}
            <div className="flex justify-center items-start h-5/6 px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-4">
                {/* Card 1 */}
                <div className="max-w-sm border rounded-lg shadow bg-[rgb(31,41,55)] border-gray-700">
                  <div className="p-6">
                    <div className="min-h-[100px]">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                        Register Project
                      </h5>
                      <p className="font-normal text-gray-400">
                        Here, you have the option to enroll a project
                      </p>
                    </div>
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
                <div className="max-w-sm  rounded-lg shadow bg-[rgb(31,41,55)] border-gray-700">
                  <div className="p-6">
                    <div className="min-h-[100px]">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                        Register an Trainee
                      </h5>
                      <p className="font-normal text-gray-400">
                        You have the ability to enroll a new trainee into our system
                      </p>
                    </div>
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
    
                {/* Card 3 */}
                <div className="max-w-sm  rounded-lg shadow bg-[rgb(31,41,55)] border-gray-700">
                  <div className="p-6">
                    <div className="min-h-[100px]">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                        Schedule Meeting
                      </h5>
                      <p className="font-normal text-gray-400">
                        Scheduling meetings within the organization.
                      </p>
                    </div>
                    <Link to="/manager/schedule-meeting">
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
                            d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
    
                {/* Card 4 */}
                <div className="max-w-sm rounded-lg shadow bg-[rgb(31,41,55)] border-gray-700">
                  <div className="p-6">
                    <div className="min-h-[100px]">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                        View Performance
                      </h5>
                      <p className="font-normal text-gray-400">
                        Here, you have access to monitor trainee performance.
                      </p>
                    </div>
                    <Link to="/manager/performance">
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
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default HrHome;
