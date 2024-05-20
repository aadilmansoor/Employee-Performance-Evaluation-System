import { Button } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TeamLeadProfile = () => {
  const [TeamleadData, setTeamleadData] = useState({
    name: "",
    username: "",
    email_address: "",
    phoneno: "",
  });
  console.log(TeamleadData);

  const token = localStorage.getItem("TlToken");

  // to fetch the data
  useEffect(() => {
    const GetTeamleaddata = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/teamleadapi/profile/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        // to view data in input form
        if (response.status === 200) {
          setTeamleadData(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch team lead details:", error);
      }
    };

    if (token) {
      GetTeamleaddata();
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, username, email_address, phoneno } = TeamleadData;
    if (!name || !username || !email_address || !phoneno) {
      Swal.fire({
        title: "Incomplete Form!",
        text: "Please fill in the form",
        icon: "error",
      });
    } else {
      const reqBody = new FormData();
      reqBody.append("username", username);
      reqBody.append("email_address", email_address);
      reqBody.append("phoneno", phoneno);
      reqBody.append("name", name);

      try {
        const result = await axios.put(
          "http://127.0.0.1:8000/teamleadapi/profile/",
          reqBody,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        if (result.status === 200) {
          console.log(result);
          Swal.fire({
            title: "Profile Updated Successfully",
            text: "Your profile has been updated.",
            icon: "success",
          });
          // Update local storage with the new data
          localStorage.setItem("TeamleadData", JSON.stringify(result.data));
        }
      } catch (error) {
        console.error("Failed to update profile:", error);
        Swal.fire({
          title: "Update Failed",
          text: "An error occurred while updating your profile. Please try again.",
          icon: "error",
        });
      }
    }
  };

  return (
    <div>
      <div className="p-6 max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold text-center my-12">Profile</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input type="file" hidden accept="image/*" />
          <img
            src="https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png"
            alt="profile"
            className="rounded-full h-[170px] w-[170px] object-contain cursor-pointer self-center"
          />

          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            className="border p-3 rounded-lg"
            value={TeamleadData.username}
            onChange={(e) =>
              setTeamleadData({ ...TeamleadData, username: e.target.value })
            }
            disabled
          />

          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="name"
            id="name"
            className="border p-3 rounded-lg"
            value={TeamleadData.name}
            onChange={(e) =>
              setTeamleadData({ ...TeamleadData, name: e.target.value })
            }
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={TeamleadData.email_address}
            onChange={(e) =>
              setTeamleadData({
                ...TeamleadData,
                email_address: e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          />

          <label htmlFor="phoneno">Phone Number:</label>
          <input
            type="text"
            placeholder="Phonenumber"
            id="phoneno"
            value={TeamleadData.phoneno}
            onChange={(e) =>
              setTeamleadData({ ...TeamleadData, phoneno: e.target.value })
            }
            className="border p-3 rounded-lg"
          />
          <Button
            type="submit"
            className="text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80 relative"
            onClick={handleSubmit}
          >
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};

export default TeamLeadProfile;
