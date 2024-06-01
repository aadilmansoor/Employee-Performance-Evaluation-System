import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";
import { Paper, Typography, IconButton } from "@mui/material";

function PerformanceEmp() {
    const [performanceData, setPerformanceData] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("TlToken");

        const fetchPerformanceDetails = async () => {
            try {
                const response = await axios.get(
                    "http://127.0.0.1:8000/teamleadapi/performance/",
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

    return (
        <div className="wrapper grid grid-cols-1 gap-6 sm:grid-cols-2">
            {performanceData.length > 0 ? (
                performanceData.map((performance, index) => (
                    <Paper key={index} elevation={3} className="relative">
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
                                <BarChart width={400} height={300} data={[
                                    {
                                        name: performance.employee,
                                        Performance: performance.performance,
                                        Other: 100 - performance.performance,
                                    },
                                ]}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="Performance" fill="#8884d8" />
                                    {/* <Bar dataKey="Other" fill="#82ca9d" /> */}
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
}

export default PerformanceEmp;
