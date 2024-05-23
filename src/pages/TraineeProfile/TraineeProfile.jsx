import { useEffect, useState } from "react";
import {
  editTraineeDetailsAPI,
  getTraineeDetailsAPI,
} from "../../Services/allAPI";
import Swal from "sweetalert2";
import { Button } from "@material-tailwind/react";
import ShowReview from "@/components/ShowReview";

const TraineeProfile = () => {
  const [traineeDetails, setTraineeDetails] = useState({
    id: "",
    Firstname: "",
    email_address: "",
    lastname: "",
    phoneno: "",
    position: "",
    username: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const getTraineeDetails = async () => {
    const token = localStorage.getItem("Emp-token");
    const result = await getTraineeDetailsAPI(token);
    if (result.status === 200) {
      setTraineeDetails(result?.data);
    }
  };

  useEffect(() => {
    getTraineeDetails();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const token = localStorage.getItem("Emp-token");
      const result = await editTraineeDetailsAPI(token, traineeDetails);
      if (result.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Updated",
          text: "Profile updated successfully",
        });
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="wrapper">
      {/* Profile */}
      <div className="p-6 max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold text-center my-12">Profile</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* <input type="file" hidden accept="image/*" /> */}
          <img
            src="https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png"
            alt="profile"
            className="rounded-full h-[170px] w-[170px] object-contain cursor-pointer self-center"
          />

          <label htmlFor="firstName">Username:</label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            value={traineeDetails.username}
            className="border p-3 rounded-lg"
            disabled
          />
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            placeholder="First Name"
            id="firstName"
            value={traineeDetails.Firstname}
            className="border p-3 rounded-lg"
            onChange={(e) =>
              setTraineeDetails({
                ...traineeDetails,
                Firstname: e.target.value,
              })
            }
          />

          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            value={traineeDetails.lastname}
            className="border p-3 rounded-lg"
            onChange={(e) =>
              setTraineeDetails({ ...traineeDetails, lastname: e.target.value })
            }
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={traineeDetails.email_address}
            className="border p-3 rounded-lg"
            onChange={(e) =>
              setTraineeDetails({
                ...traineeDetails,
                email_address: e.target.value,
              })
            }
          />

          <label htmlFor="phone">Phone Number:</label>
          <input
            type="number"
            placeholder="Phone Number"
            id="phone"
            value={traineeDetails.phoneno}
            className="border p-3 rounded-lg"
            onChange={(e) =>
              setTraineeDetails({ ...traineeDetails, phoneno: e.target.value })
            }
          />

          <label htmlFor="position">Position:</label>
          <input
            type="text"
            placeholder="Position"
            id="position"
            value={traineeDetails.position}
            className="border p-3 rounded-lg"
            onChange={(e) =>
              setTraineeDetails({ ...traineeDetails, position: e.target.value })
            }
          />

          <Button
            type="submit"
            className=" text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80 relative"
            disabled={isLoading}
          >
            Update
          </Button>
        </form>
      </div>
      <ShowReview />
    </div>
  );
};

export default TraineeProfile;
