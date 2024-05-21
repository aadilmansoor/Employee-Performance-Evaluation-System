import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";

const TraineeRegister = () => {
  const [Firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email_address, setEmailAddress] = useState("");
  const [phoneno, setPhoneNo] = useState("");
  const [position, setPosition] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/empapi/register/",
        {
          Firstname,
          lastname,
          username,
          email_address,
          phoneno,
          password,
          position,
        }
      );

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "You have successfully registered.",
        }).then(() => {
          navigate("/trainee/login");
        });
      } else {
        setErrorMessage("Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setErrorMessage(() => {
        if (error?.response?.data?.username) {
          return error?.response?.data?.username[0];
        } else if (error?.response?.data?.email_address) {
          return error?.response?.data?.email_address[0];
        } else {
          ("Registration failed");
        }
      });
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg shadow-md border border-gray-300 p-6 w-96">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
            Trainee Registration
          </h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="firstName"
                value={Firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
                placeholder="First Name"
                className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <input
                type="text"
                name="Lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
                placeholder="Last Name"
                className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="User Name"
                className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />

              <input
                type="email"
                name="email_address"
                value={email_address}
                onChange={(e) => setEmailAddress(e.target.value)}
                required
                placeholder="Email"
                className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <input
                type="tel"
                name="phoneno"
                value={phoneno}
                onChange={(e) => setPhoneNo(e.target.value)}
                required
                placeholder="Phone Number"
                className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {/* {errorMessage && (
              <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
            )} */}

              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <input
                type="text"
                name="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
                placeholder="Position"
                className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
            )}
            <button
              type="submit"
              className="w-full mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register Trainee
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default TraineeRegister;
