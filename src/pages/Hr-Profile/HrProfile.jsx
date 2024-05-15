import React, { useState } from "react";

const HrProfile = () => {
  const [username, setUsername] = useState(
    localStorage.getItem("userName") || ""
  );
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [password, setPassword] = useState(
    localStorage.getItem("password") || ""
  );
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      localStorage.setItem("userName", username);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      setSuccessMessage("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setIsLoading(false);
    }
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   // Update values in local storage
  //   localStorage.setItem("userName", username);
  //   localStorage.setItem("email", email);
  //   localStorage.setItem("password", password);
  //   // Show success message or perform any other action
  //   console.log("Profile updated successfully!");
  // }

  function handleChange(e) {
    const { id, value } = e.target;

    if (id === "username") {
      setUsername(value);
    } else if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
  }

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

          <input
            type="text"
            placeholder="Username"
            id="username"
            defaultValue={username}
            className="border p-3 rounded-lg"
            onChange={handleChange}
          />

          <input
            type="email"
            placeholder="Email"
            id="email"
            defaultValue={email}
            className="border p-3 rounded-lg"
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="Password"
            id="password"
            defaultValue={password}
            className="border p-3 rounded-lg"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80 relative"
            disabled={isLoading}
          >
            Update
          </button>
        </form>

        {/* Success message */}
        {successMessage && (
          <span className="text-green-500 mt-2">{successMessage}</span>
        )}

        <div className="flex justify-between mt-5">
          {/* ... (other elements) ... */}
        </div>

        <div className="flex justify-between mt-5">
          {/* Delete account link */}
          <span className="text-red-700 cursor-pointer">Delete account</span>
          {/* Sign out link */}
          <span className="text-red-700 cursor-pointer">Sign out</span>
        </div>
      </div>
    </div>
  );
};

export default HrProfile;
