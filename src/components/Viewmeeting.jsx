import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import {
  getMeetingsAdminAPI,
  getMeetingsManagerAPI,
  getMeetingsTeamLeadAPI,
  getMeetingsTraineeAPI,
} from "@/Services/allAPI";
import { useEffect, useState } from "react";
import {
  convertTo12HourFormat,
  filterAndSortMeetings,
  formatDateForMeeting,
} from "@/lib/utils";
import { UserIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

export default function ViewMeeting({ role }) {
  const [allMeeting, setAllMeeting] = useState([]);
  console.log({ allMeeting });

  const getMeetings = async () => {
    if (role === "admin") {
      const token = localStorage.getItem("adminToken");
      const result = await getMeetingsAdminAPI(token);
      if (result.status === 200) {
        setAllMeeting(() => {
          return filterAndSortMeetings(result.data);
        });
      }
    } else if (role === "manager") {
      const token = localStorage.getItem("HRtoken");
      const result = await getMeetingsManagerAPI(token);
      if (result.status === 200) {
        setAllMeeting(() => {
          return filterAndSortMeetings(result.data);
        });
      }
    } else if (role === "team-lead") {
      const token = localStorage.getItem("TlToken");
      const result = await getMeetingsTeamLeadAPI(token);
      if (result.status === 200) {
        setAllMeeting(() => {
          return filterAndSortMeetings(result.data);
        });
      }
    } else if (role === "trainee") {
      const token = localStorage.getItem("Emp-token");
      const result = await getMeetingsTraineeAPI(token);
      if (result.status === 200) {
        setAllMeeting(() => {
          return filterAndSortMeetings(result.data);
        });
      }
    }
  };

  useEffect(() => {
    getMeetings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMeeting = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className="grid gap-4 p-4 md:p-6 wrapper">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-center">
        All Meetings
      </h5>
      {allMeeting.length === 0 ? (
        <p className="text-center mt-16">No meeting scheduled.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allMeeting.map((meeting) => {
            return (
              <Card key={meeting.id}>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <CalendarDaysIcon className="h-4 w-4" />
                    <span>{formatDateForMeeting(meeting.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <ClockIcon className="h-4 w-4" />
                    <span>{convertTo12HourFormat(meeting.time)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <UserIcon className="w-4 h-4" />
                    <span className="capitalize">{meeting.organizer}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-semibold">{meeting.title}</h3>
                </CardContent>
                <CardFooter>
                  <span
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    onClick={() => handleMeeting(meeting.link)}
                  >
                    <span>Join Meeting</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      )}
    </section>
  );
}

ViewMeeting.propTypes = {
  role: PropTypes.string,
};

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
