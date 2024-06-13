import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { DeleteIcon } from "lucide-react";
import { IconButton } from "@mui/material";
import { Button } from "@/components/ui/button";
import { approveTeamAPI } from "@/Services/allAPI";

const ViewTeam = () => {
  const [teamData, setTeamData] = useState([]);
  const token = localStorage.getItem("HRtoken");

  const fetchTeamDetails = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/hrapi/teams/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setTeamData(response.data);
    } catch (error) {
      console.error("Failed to fetch team details:", error);
    }
  };

  useEffect(() => {
    fetchTeamDetails();
  }, []);

  const handleApprove = async (id) => {
    try {
      const result = await approveTeamAPI(token, id);
      if (result.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Approved",
        });
        fetchTeamDetails();
      } else {
        Swal.fire({
          icon: "error",
          title: "Approval Failed",
        });
      }
    } catch (error) {
      console.error("Failed to approve team:", error);
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://127.0.0.1:8000/hrapi/teams/${id}/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        Swal.fire({
          icon: "success",
          title: "Team Deleted",
        });
        setTeamData(teamData.filter((team) => team.id !== id));
      } catch (error) {
        console.error("Failed to delete team:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to delete team.",
        });
      }
    }
  };
  

  return (
    <div className="wrapper h-96 sticky top-0 overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-4">My Team</h1>
      {teamData.length > 0 ? (
        <div className="relative">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-md shadow-md">
              <thead className="bg-gray-200 sticky top-0">
                <tr>
                  <th className="py-3 px-4 border-b border-gray-300">Id</th>
                  <th className="py-3 px-4 border-b border-gray-300">
                    Team Lead
                  </th>
                  <th className="py-3 px-4 border-b border-gray-300">
                    Team Name
                  </th>
                  <th className="py-3 px-4 border-b border-gray-300">
                    Approve
                  </th>
                  <th className="py-3 px-4 border-b border-gray-300">
                    Members
                  </th>
                  <th className="py-3 px-4 border-b border-gray-300">Actions</th>
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
                      {team.is_approved ? (
                        <span className="text-green-500">Approved</span>
                      ) : (
                        <Button onClick={() => handleApprove(team.id)}>
                          Approve
                        </Button>
                      )}
                    </td>
                    <td className="py-3 px-4 border whitespace-nowrap">
                      {team.members.join(", ")}
                    </td>
                    <td className="py-3 px-4 border whitespace-nowrap">
                      <IconButton onClick={() => handleDelete(team.id)}>
                        <DeleteIcon style={{ color: "red" }} />
                      </IconButton>
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
