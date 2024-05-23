import { Link } from "react-router-dom";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

const AdminHome = () => {
  return (
    <div className="wrapper">
      <div className="flex flex-col flex-grow items-center w-full">
        <div className="flex justify-center items-center h-1/6">
          <h3 className="text-3xl font-medium leading-tight text-center text-primary mb-6">
            Welcome
          </h3>
        </div>
        <div className="flex justify-start items-start h-5/6 px-6">
          {/* Cards container */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-4">
            {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow bg-[rgb(31,41,55)] border-gray-700">
              <div className="p-6">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">
                  Task Chart List
                </h5>
                <p className="font-normal text-gray-700 text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>

                <Link to="/task-chart-list">
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
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div> */}

            {/* Card 3 */}
            <div className="max-w-sm  border rounded-lg shadow bg-[rgb(31,41,55)] border-gray-700">
              <div className="p-6">
                <div className="min-h-[100px]">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    Approvals
                  </h5>
                  <p className="font-normal text-gray-400">
                    Here, You can Approve Manager,Team leader and Trainee
                  </p>
                </div>

                <Link to="/admin/approval">
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
            {/* Add more cards here if needed */}
            <div className="max-w-sm border rounded-lg shadow bg-[rgb(31,41,55)] border-gray-700">
              <div className="p-6">
                <div className="min-h-[100px]">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    Schedule Meeting
                  </h5>
                  <p className="font-normal text-gray-400">
                    Scheduling meetings within the organization.
                  </p>
                </div>
                <Link to="/admin/schedule-meeting">
                  <button
                    type="button"
                    className="mt-4 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 text-white font-medium rounded-lg text-sm flex items-center px-6 py-2.5"
                  >
                    <span>Schedule</span>
                    <CalendarDaysIcon className="h-5 w-5 ms-2" />
                  </button>
                </Link>
              </div>
            </div>

            {/* <div className="max-w-sm border rounded-lg shadow bg-[rgb(31,41,55)] border-gray-700">
              <div className="p-6">
                <div className="min-h-[100px]">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    Team Creation
                  </h5>
                  <p className="font-normal text-gray-400">
                    Here you can create team of registered employees.
                  </p>
                </div>

                <Link to="/team-create">
                  <button
                    type="button"
                    className="mt-4 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 text-white font-medium rounded-lg text-sm flex items-center px-6 py-2.5"
                  >
                    <span>Create</span>
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
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
