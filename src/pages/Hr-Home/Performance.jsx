import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  TextField,
} from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";

const Performance = () => {
  const [employee, setEmployee] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [performanceData, setPerformanceData] = useState(null);
  const token = localStorage.getItem("HRtoken");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const PerformanceAnalyze = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://127.0.0.1:8000/hrapi/performancetrack/",
        { employee },
        { headers: { Authorization: `Token ${token}` } }
      );

      if (response.status === 200) {
        console.log("API Response:", response.data);
        setPerformanceData(response.data);
        handleOpen();
      } else {
        setErrorMessage("Creation failed");
      }
    } catch (error) {
      console.error("Creation error:", error);
      setErrorMessage(error.message || "Creation failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);
    await PerformanceAnalyze();
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Analyze Performance
        </h2>
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label
              htmlFor="employees"
              className="block text-sm font-medium text-gray-900"
            >
              Employee Id
            </label>
            <TextField
              value={employee}
              onChange={(e) => setEmployee(e.target.value)}
              type="text"
              required
              fullWidth
              variant="outlined"
            />
          </div>
          {isLoading && (
            <div className="flex justify-center items-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin fill-purple-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
          <Dialog
            open={open}
            onClose={handleClose}
            className="w-3/4 mx-auto my-auto"
          >
            <DialogTitle>Analyze Performance</DialogTitle>
            <DialogContent>
              {performanceData && (
                <DialogContentText>
                  ID: {performanceData.id}
                  <br />
                  HR: {performanceData.hr}
                  <br />
                  Performance: {performanceData.performance}
                  <br />
                  Employee: {performanceData.employee}
                  <br />
                </DialogContentText>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </Dialog>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            {isLoading ? "Loading..." : "Track"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Performance;
