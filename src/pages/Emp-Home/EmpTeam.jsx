import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const EmpTeam = () => {
  const [empTeam, setEmpTeam] = useState([]);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("Emp-token");
  console.log(empTeam);

  useEffect(() => {
    const fetchEmpTeam = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/empapi/teamview/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        setEmpTeam(response.data);
      } catch (error) {
        console.error("Failed to fetch project details:", error);
        setError(error.message || "Failed to fetch data");
      }
    };

    fetchEmpTeam();
  }, []);
  return (
    <div className="mt-8 overflow-y-auto flex justify-center items-center">
      <div>
        {empTeam.length > 0 ? (
          <div className="relative">
            <div className="overflow-x-auto">
              {empTeam.map((team, index) => (
                <Card
                  key={index}
                  className="max-w-xl mx-auto border-2 border-gray-300 rounded-lg shadow-xl p-6 bg-white"
                >
                  <CardBody>
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-4 text-center font-semibold"
                    >
                      My Team
                    </Typography>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Typography className="font-semibold">
                          Project Id:
                        </Typography>
                        <Typography>{team.id}</Typography>
                      </div>
                      <div>
                        <Typography className="font-semibold">
                          Team Lead:
                        </Typography>
                        <Typography>{team.teamlead}</Typography>
                      </div>
                      <div>
                        <Typography className="font-semibold">
                          Project Members:
                        </Typography>
                        <Typography>{team.members.join(", ")}</Typography>
                      </div>
                      <div>
                        <Typography className="font-semibold">
                          Team Name:
                        </Typography>
                        <Typography>{team.name}</Typography>
                      </div>
                      <div>
                        <Typography className="font-semibold">
                          Is Approved:
                        </Typography>
                        <Typography>
                          {team.is_approved ? "Yes" : "No"}
                        </Typography>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <p className="mt-4 text-center">No Team found.</p>
        )}
      </div>
    </div>
  );
};

export default EmpTeam;
