import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { Paper, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const PerformanceLists = () => {
  const [performanceData, setPerformanceData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("HRtoken");

    const fetchPerformanceDetails = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/hrapi/Performance/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        setPerformanceData(response.data);
      } catch (error) {
        console.error("Failed to fetch performance details:", error);
      }
    };

    if (token) {
      fetchPerformanceDetails();
    }
  }, []);

  const handleDeletePerformance = async (id) => {
    try {
      const token = localStorage.getItem("HRtoken");
      await axios.delete(`http://127.0.0.1:8000/hrapi/Performance/${id}/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setPerformanceData(
        performanceData.filter((performance) => performance.id !== id)
      );
    } catch (error) {
      console.error("Failed to delete performance:", error);
    }
  };

  return (
    <div className="wrapper grid grid-cols-1 gap-6 sm:grid-cols-2">
      {performanceData.length > 0 ? (
        performanceData.map((performance, index) => (
          <Paper key={index} elevation={3} className="relative">
            <IconButton
              className="absolute top-2 right-2"
              onClick={() => handleDeletePerformance(performance.id)}
            >
              <DeleteIcon style={{ color: "red" }} />
            </IconButton>
            <div className="p-4">
              <Typography variant="h6" gutterBottom>
                Performance Details
              </Typography>
              <Typography variant="body1" gutterBottom>
                Manager: {performance.hr}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Trainee: {performance.employee}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Performance: {performance.performance.toFixed()}
              </Typography>
              <div className="mt-4 flex-center">
                <BarChart width={400} height={300} data={[performance]}>
                  <XAxis dataKey="employee" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="performance" fill="#8884d8" />
                </BarChart>
              </div>
            </div>
          </Paper>
        ))
      ) : (
        <p className="mt-4">No Performance Data.</p>
      )}
    </div>
  );
};

export default PerformanceLists;
