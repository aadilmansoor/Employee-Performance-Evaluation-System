import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ViewEmployees = () => {
  const token = localStorage.getItem("TlToken");
  const [employeeData, setEmployeeData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/teamleadapi/employee/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        setEmployeeData(response.data);
      } catch (error) {
        console.error("Failed to fetch project details:", error);
      }
    };

    fetchEmployeeDetails();
  }, []);

  const handleClick = (employee) => {
    navigate("/team-lead/trainee-profile", {
      state: employee,
    });
  };

  return (
    <div className="mt-8 h-96 overflow-y-auto wrapper">
      <h1 className="text-2xl font-semibold mb-4">Trainees</h1>
      {employeeData.length > 0 ? (
        <div className="relative">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-md shadow-md">
              <thead className="bg-gray-200 sticky top-0">
                <tr>
                  <th className="py-3 px-4 border-b border-gray-300">Id</th>
                  <th className="py-3 px-4 border-b border-gray-300">Name</th>
                  <th className="py-3 px-4 border-b border-gray-300">Email</th>
                  <th className="py-3 px-4 border-b border-gray-300">
                    Position
                  </th>
                  <th className="py-3 px-4 border-b border-gray-300">
                    Phone No
                  </th>
                  <th className="py-3 px-4 border-b border-gray-300">
                    In Team
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {employeeData.map((employee, index) => (
                  <tr key={index}>
                    <td className="py-3 px-4 border whitespace-nowrap">
                      {employee.id}
                    </td>
                    <td className="py-3 px-4 border whitespace-nowrap">
                      <span
                        className="underline cursor-pointer text-[-webkit-link]"
                        onClick={() => handleClick(employee)}
                      >
                        {employee.Firstname} {employee.lastname}
                      </span>
                    </td>
                    <td className="py-3 px-4 border whitespace-nowrap">
                      {employee.email_address}
                    </td>
                    <td className="py-3 px-4 border whitespace-nowrap">
                      {employee.position}
                    </td>
                    <td className="py-3 px-4 border whitespace-nowrap">
                      {employee.phoneno}
                    </td>
                    <td className="py-3 px-4 border whitespace-nowrap">
                      {employee.in_team ? "Yes" : "No"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p className="mt-4">No projects found.</p>
      )}
    </div>
  );
};

export default ViewEmployees;
