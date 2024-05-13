import  { useState } from "react";


const TeamLeadProfile = () => {
    const [username, setUsername] = useState(localStorage.getItem("userName") || "");
    const [email, setEmail] = useState(localStorage.getItem("email") || "");
    const [password, setPassword] = useState(localStorage.getItem("password") || "");
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
      <h1>Profile</h1>
      {/* Profile */}
      <div className="p-6 max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold text-center my-12">Profile</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
          <input type="file" hidden accept="image/*" />
          
          <img
            src="/path/to/default/profile/image"
            alt="profile"
            className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
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

       
        {successMessage && (
          <span className="text-green-500 mt-2">{successMessage}</span>
        )}

        <div className="flex justify-between mt-5">
         
        </div>

        <div className="flex justify-between mt-5">
        
          <span className="text-red-700 cursor-pointer">Delete account</span>
       
          <span className="text-red-700 cursor-pointer">Sign out</span>
        </div>
      </div>
    </div>
  );
};

export default TeamLeadProfile;
