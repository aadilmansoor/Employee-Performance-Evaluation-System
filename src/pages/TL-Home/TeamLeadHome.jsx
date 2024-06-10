import { Link } from "react-router-dom";

const TeamLeadHome = () => {
  return (
    <div className="wrapper">
      <div className="flex flex-col items-center flex-grow">
        <div className="flex justify-center items-center h-1/6">
          <h3 className="text-3xl font-medium leading-tight text-center text-primary mb-8">
            Welcome
          </h3>
        </div>
        <div className="flex justify-start items-start h-5/6 px-6">
          {/* Cards container */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-4">
            {/* Card 3 */}
            <div className="max-w-sm  rounded-lg shadow bg-[rgb(31,41,55)] border-gray-700">
              <div className="p-6">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  View Team
                </h5>
                <p className="font-normal text-gray-400">
                  Here, You can View your team that You&apos;ve created
                </p>

                <Link to="/team-lead/view-team">
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
            <div className="max-w-sm  rounded-lg shadow bg-[rgb(31,41,55)] border-gray-700">
              <div className="p-6">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  View Project Details
                </h5>
                <p className="font-normal text-gray-400">
                  Here you can see the project details and assign projects
                </p>
                <Link to="/team-lead/project-details">
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

            {/* team lead meeting */}
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
                <Link to="/team-lead/schedule-meeting">
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

            <div className="max-w-sm border rounded-lg shadow bg-[rgb(31,41,55)] border-gray-700">
              <div className="p-6">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  Team Creation
                </h5>
                <p className="font-normal text-gray-400">
                  Here you can create team of registered trainees.
                </p>

                <Link to="/team-lead/team-create">
                  <button
                    type="button"
                    className="mt-4 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 text-white font-medium rounded-lg text-sm flex items-center px-6 py-2.5"
                  >
                    <span className="me-2">Create</span>
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
            </div>

            <div className="max-w-sm border rounded-lg shadow bg-[rgb(31,41,55)] border-gray-700">
              <div className="p-6">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  Add Daily Task
                </h5>
                <p className="font-normal text-gray-400">
                  Here you add daily task to trainees.
                </p>

                <Link to="/team-lead/add-daily-task">
                  <button
                    type="button"
                    className="mt-4 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 text-white font-medium rounded-lg text-sm flex items-center px-6 py-2.5"
                  >
                    <span className="me-2">Add</span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamLeadHome;
