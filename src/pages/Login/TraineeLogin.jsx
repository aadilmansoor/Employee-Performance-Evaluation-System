import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Navbar from "../../components/Header/Navbar";

const TraineeLogin = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/empapi/token/",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      localStorage.setItem("Emp-token", response.data.token);

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have successfully logged in.",
        }).then(() => {
          navigate("/trainee");
          localStorage.setItem("userData", JSON.stringify(response.data));
        });
      }
    } catch (error) {
      console.error("Error occurred:", error);
      if (error.response) {
        const { data } = error.response;
        if (data && data.non_field_errors && data.non_field_errors.length > 0) {
          alert(data.non_field_errors[0]);
        } else {
          alert("Invalid username or password. Please try again.");
        }
      } else if (error.request) {
        console.error("No response received:", error.request);
        alert("No response received from the server. Please try again later.");
      } else {
        console.error("Error setting up request:", error.message);
        alert("An error occurred while logging in. Please try again later.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center bg-primary">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
            Sign in to your account
          </h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                User Name
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TraineeLogin;
