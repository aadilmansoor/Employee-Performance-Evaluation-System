import { useState } from "react";
import axios from "axios";

const HrInbox = () => {
  const [requests, setRequests] = useState([]);
  const token = localStorage.getItem("TlToken");

  const handleAcceptButtonClick = async (teamId) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/hrapi/teams/${teamId}/team_approval/`,
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Approval successful");
      }
    } catch (error) {
      console.error("Failed to fetch project details:", error);
    }
  };

  const handleDecline = (teamId) => {
    console.log(`Request for team ${teamId} declined`);
    const updatedRequests = requests.filter(
      (request) => request.teamId !== teamId
    );
    setRequests(updatedRequests);
    localStorage.setItem("hrRequests", JSON.stringify(updatedRequests));
  };

  return (
    <div className="wrapper">
      <h1 className="text-3xl font-bold mb-4">Manager Inbox</h1>
      {requests.length > 0 ? (
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Requests from Team Leads:
          </h2>
          <ul className="divide-y divide-gray-200">
            {requests.map((request, index) => (
              <li
                key={index}
                className="py-4  border-gray-300 rounded-md border-2 wrapper"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-gray-800 font-semibold">
                      Team ID:
                    </span>
                    <span className="block text-gray-600">
                      {request.teamId}
                    </span>
                    <span className="block text-gray-800 font-semibold mt-2">
                      Team Name:
                    </span>
                    <span className="block text-gray-600">
                      {request.teamName}
                    </span>
                    <span className="block text-gray-800 font-semibold mt-2">
                      Sent by Team Lead:
                    </span>
                    <span className="block text-gray-600">
                      {request.teamLeadId}
                    </span>
                  </div>
                  <div className="space-x-4">
                    <button
                      onClick={() => handleAcceptButtonClick(request.teamId)}
                      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleDecline(request.teamId)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-600">No requests at the moment.</p>
      )}
    </div>
  );
};

export default HrInbox;
