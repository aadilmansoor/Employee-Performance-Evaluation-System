import { Link } from "react-router-dom";

const EmployeeHome = () => {
  return (
    <div className="wrapper">
      <h3 className="text-3xl font-medium text-center text-primary mb-6">
        Welcome
      </h3>
      <div className="flex flex-col  flex-grow w-full mt-10">
        <div className="flex justify-start items-start h-5/6">
          {/* Cards container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full px-4">
            {/* Card 1 */}
            <div className="max-w-sm  border rounded-lg shadow bg-[rgb(31,41,55)] border-gray-700">
              <div className="p-6">
                <div className="min-h-[100px]">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    My Team
                  </h5>
                  <p className="font-normal text-gray-400">
                    View my team created by team lead.
                  </p>
                </div>

                <Link to="/emp-team">
                  <button
                    type="button"
                    className="mt-4 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 text-white font-medium rounded-lg text-sm flex items-center px-6 py-2.5"
                  >
                    <span>View</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>

            {/* Card 2*/}
            <div className="max-w-sm border rounded-lg shadow bg-[rgb(31,41,55)] border-gray-700">
              <div className="p-6">
                <div className="min-h-[100px]">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    Projects of the Team
                  </h5>
                  <p className="font-normal text-gray-400">
                    View the projects of the team.
                  </p>
                </div>
                <Link to="/trainee/project-of-teams">
                  <button
                    type="button"
                    className="mt-4 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 text-white font-medium rounded-lg text-sm flex items-center px-6 py-2.5"
                  >
                    <span>View</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="max-w-sm border rounded-lg shadow bg-[rgb(31,41,55)] border-gray-700">
              <div className="p-6">
                <div className="min-h-[100px]">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    Daily Task
                  </h5>
                  <p className="font-normal text-gray-400">
                    View daily task created by team lead.
                  </p>
                </div>
                <Link to="/trainee/daily-task">
                  <button
                    type="button"
                    className="mt-4 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 text-white font-medium rounded-lg text-sm flex items-center px-6 py-2.5"
                  >
                    <span>View</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
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

export default EmployeeHome;
