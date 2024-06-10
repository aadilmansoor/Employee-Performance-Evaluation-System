import {
  scheduleMeetingAdminAPI,
  scheduleMeetingManagerAPI,
  scheduleMeetingTeamLeadAPI,
} from "@/Services/allAPI";
import { formatDate } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import {
  Input,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ScheduleMeeting = ({ role }) => {
  const [date, setDate] = useState("");
  const [meetingDetails, setMeetingDetails] = useState({
    time: "",
    title: "",
    link: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !date ||
      !meetingDetails.time ||
      !meetingDetails.link ||
      !meetingDetails.title
    ) {
      console.log("Hi");
      toast.warning("Please fill in all fields.");
      return;
    }
    if (role === "admin") {
      const token = localStorage.getItem("adminToken");
      const result = await scheduleMeetingAdminAPI(token, {
        ...meetingDetails,
        date: formatDate(date),
      });
      if (result.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Meeting Scheduled",
        }).then(() => {
          navigate("/admin");
        });
      }
    } else if (role === "manager") {
      const token = localStorage.getItem("HRtoken");
      const result = await scheduleMeetingManagerAPI(token, {
        ...meetingDetails,
        date: formatDate(date),
      });
      if (result.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Meeting Scheduled",
        }).then(() => {
          navigate("/manager");
        });
      }
    } else if (role === "team-lead") {
      const token = localStorage.getItem("TlToken");
      const result = await scheduleMeetingTeamLeadAPI(token, {
        ...meetingDetails,
        date: formatDate(date),
      });
      if (result.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Meeting Scheduled",
        }).then(() => {
          navigate("/team-lead");
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white  rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Schedule Meeting
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <Popover placement="top">
            <PopoverHandler>
              <Input
                label="Select a Date"
                onChange={(e) =>
                  setMeetingDetails({ ...meetingDetails, date: e.target.value })
                }
                value={date ? format(date, "PPP") : ""}
              />
            </PopoverHandler>
            <PopoverContent>
              <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate}
                showOutsideDays
                className="border-0"
                classNames={{
                  caption:
                    "flex justify-center py-2 mb-4 relative items-center",
                  caption_label: "text-sm font-medium text-gray-900",
                  nav: "flex items-center",
                  nav_button:
                    "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                  nav_button_previous: "absolute left-1.5",
                  nav_button_next: "absolute right-1.5",
                  table: "w-full border-collapse",
                  head_row: "flex font-medium text-gray-900",
                  head_cell: "m-0.5 w-9 font-normal text-sm",
                  row: "flex w-full mt-2",
                  cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                  day: "h-9 w-9 p-0 font-normal",
                  day_range_end: "day-range-end",
                  day_selected:
                    "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                  day_today: "rounded-md bg-gray-200 text-gray-900",
                  day_outside:
                    "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                  day_disabled: "text-gray-500 opacity-50",
                  day_hidden: "invisible",
                }}
                components={{
                  IconLeft: ({ ...props }) => (
                    <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
                  ),
                  IconRight: ({ ...props }) => (
                    <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
                  ),
                }}
              />
            </PopoverContent>
          </Popover>
          <div>
            <Input
              type="time"
              label="Time"
              value={meetingDetails.time}
              onChange={(e) =>
                setMeetingDetails({ ...meetingDetails, time: e.target.value })
              }
            />
          </div>
          <div>
            <Input
              label="Title"
              value={meetingDetails.title}
              onChange={(e) =>
                setMeetingDetails({ ...meetingDetails, title: e.target.value })
              }
            />
          </div>
          <div>
            <Input
              label="Link"
              value={meetingDetails.link}
              onChange={(e) =>
                setMeetingDetails({ ...meetingDetails, link: e.target.value })
              }
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ScheduleMeeting.propTypes = {
  role: PropTypes.string,
};

export default ScheduleMeeting;
