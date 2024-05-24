import { useLocation } from "react-router-dom";
import Review from "@/components/Review";

const ShowTraineeProfile = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div>
      {/* Profile */}
      <div className="p-6 max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold text-center my-12">
          <span className="capitalize">
            {state.Firstname + " " + state.lastname}
          </span>
          &apos;s Profile
        </h1>
        <form className="flex flex-col gap-4">
          {/* <input type="file" hidden accept="image/*" /> */}
          <img
            src="https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png"
            alt="profile"
            className="rounded-full h-[170px] w-[170px] object-contain cursor-pointer self-center"
          />

          <label htmlFor="id">Trainee Id:</label>
          <input
            type="text"
            placeholder="Username"
            id="id"
            value={state.id}
            className="border p-3 rounded-lg"
            disabled
          />
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            placeholder="full name"
            id="fullName"
            value={state.Firstname + " " + state.lastname}
            className="border p-3 rounded-lg"
            disabled
          />
          <label htmlFor="email">Email Address:</label>
          <input
            type="text"
            placeholder="Username"
            id="email"
            value={state.email_address}
            className="border p-3 rounded-lg"
            disabled
          />
          <label htmlFor="firstName">Phone Number:</label>
          <input
            type="text"
            placeholder="Phone Number"
            id="username"
            value={state.phoneno}
            className="border p-3 rounded-lg"
            disabled
          />
        </form>
      </div>
      <Review id={state.id} />
    </div>
  );
};

export default ShowTraineeProfile;
