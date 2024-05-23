import { useEffect, useState } from "react";
import axios from "axios";

const ViewTeam = () => {
  const [teamData, setTeamData] = useState([]);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("TlToken");

  useEffect(() => {
    const fetchTeamDetails = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/teamleadapi/team/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        setTeamData([response.data]);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch team details:", error);
        setError("Failed to fetch team details. Please try again.");
      }
    };

    fetchTeamDetails();
  }, []);
  console.log(teamData);

  return (
    <div className="wrapper mt-8 h-96 overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-4">My Team</h1>
      {error ? (
        <p className="mt-4 text-red-500">{error}</p>
      ) : teamData.length > 0 ? (
        <div className="relative">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-md shadow-md">
              <thead className="bg-gray-200 sticky top-0">
                <tr>
                  <th className="py-3 px-4 border-b border-gray-300">Id</th>
                  <th className="py-3 px-4 border-b border-gray-300">
                    Team Lead Name
                  </th>
                  <th className="py-3 px-4 border-b border-gray-300">
                    Team Name
                  </th>
                  <th className="py-3 px-4 border-b border-gray-300">
                    Is Approved
                  </th>
                  <th className="py-3 px-4 border-b border-gray-300">
                    Members
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {teamData.map((team, index) => (
                  <tr key={index}>
                    <td className="py-3 px-4 border whitespace-nowrap">
                      {team.id}
                    </td>
                    <td className="py-3 px-4 border whitespace-nowrap">
                      {team.teamlead}
                    </td>
                    <td className="py-3 px-4 border whitespace-nowrap">
                      {team.name}
                    </td>
                    <td className="py-3 px-4 border whitespace-nowrap">
                      {team.is_approved ? "Yes" : "No"}
                    </td>
                    <td className="py-3 px-4 border whitespace-nowrap">
                      {team.members.join(", ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p className="mt-4">No Teams.</p>
      )}
    </div>
  );
};

export default ViewTeam;
