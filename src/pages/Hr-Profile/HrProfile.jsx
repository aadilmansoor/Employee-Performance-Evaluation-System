import { useEffect, useState } from "react";
import { editManagerAPI, updateManagerAPI } from "../../Services/allAPI";
import Swal from "sweetalert2";
import { Button } from "@material-tailwind/react";

const HrProfile = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [managerDetails, setManagerDetails] = useState({
    name: "",
    email_address: "",
    phoneno: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    try {
      const token = localStorage.getItem("HRtoken");
      const result = await editManagerAPI(token, managerDetails);
      if (result.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Updated",
          text: "Profile updated succesfully",
        });
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const getManagerDetails = async () => {
    const token = localStorage.getItem("HRtoken");
    const result = await updateManagerAPI(token);
    if (result.status === 200) {
      setManagerDetails(result?.data);
    }
  };
  useEffect(() => {
    getManagerDetails();
  }, []);

  return (
    <div>
      <div className="p-6 max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold text-center my-12">Profile</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="file" hidden accept="image/*" />

          <img
            src="https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png"
            alt="profile"
            className="rounded-full h-[170px] w-[170px] object-contain cursor-pointer self-center"
          />

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="name"
            id="name"
            value={managerDetails.name}
            className="border  p-3 rounded-lg"
            onChange={(e) =>
              setManagerDetails({
                ...managerDetails,
                name: e.target.value,
              })
            }
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={managerDetails.email_address}
            className="border p-3 rounded-lg"
            onChange={(e) =>
              setManagerDetails({
                ...managerDetails,
                email_address: e.target.value,
              })
            }
          />

          <label htmlFor="phonenumber">Phonenumber:</label>

          <input
            type="number"
            placeholder="Phonenumber"
            id="phonenumber"
            value={managerDetails.phoneno}
            className="border p-3 rounded-lg"
            onChange={(e) =>
              setManagerDetails({
                ...managerDetails,
                phoneno: e.target.value,
              })
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
    </div>
  );
};

export default HrProfile;
