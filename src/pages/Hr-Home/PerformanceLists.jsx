import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell } from "recharts";
import { Paper, Typography, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const PerformanceLists = () => {
  const [performanceData, setPerformanceData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("HRtoken");

    const fetchPerformanceDetails = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8001/hrapi/Performance/",
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
      await axios.delete(
        `http://127.0.0.1:8001/hrapi/Performance/${id}/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      setPerformanceData(performanceData.filter(performance => performance.id !== id));
    } catch (error) {
      console.error("Failed to delete performance:", error);
    }
  };
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
      {performanceData.length > 0 ? (
        performanceData.map((performance, index) => (
          <Paper key={index} elevation={3} className="relative">
            <IconButton
              className="absolute top-2 right-2"
              onClick={() => handleDeletePerformance(performance.id)}
            >
              <DeleteIcon style={{ color: 'red' }} />
            </IconButton>
            <div className="p-4">
              <Typography variant="h6" gutterBottom>
                Performance Details
              </Typography>
              <Typography variant="body1" gutterBottom>
                Employee ID: {performance.id}
              </Typography>
              <Typography variant="body1" gutterBottom>
                HR: {performance.hr}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Employee: {performance.employee}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Performance: {performance.performance}
              </Typography>
              <div className="mt-4">
                <PieChart width={400} height={400}>
                  <Pie
                    data={[
                      { name: "Performance", value: performance.performance },
                      { name: "Other", value: 100 - performance.performance },
                    ]}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {[
                      { fill: "#FF6384" },
                      { fill: "#36A2EB" },
                    ].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                </PieChart>
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
