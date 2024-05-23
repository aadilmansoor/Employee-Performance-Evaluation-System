import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatDate(inputDate) {
  // Create a new Date object from the input date string
  const date = new Date(inputDate);

  // Get the year, month, and day from the Date object
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so add 1
  const day = String(date.getDate()).padStart(2, "0"); // Pad single digit days with leading zero

  // Format the date as YYYY-MM-DD
  return `${year}-${month}-${day}`;
}

export function formatDateForMeeting(inputDate) {
  // Create a new Date object from the input date string
  const date = new Date(inputDate);

  // Define an array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the components of the date
  const year = date.getFullYear();
  const month = monthNames[date.getMonth()]; // Get the full month name
  const day = String(date.getDate()).padStart(2, "0"); // Pad single digit days with leading zero

  // Format the date as "Month DD, YYYY"
  return `${month} ${day}, ${year}`;
}

export function filterAndSortMeetings(meetings) {
  // Get the current date and time
  const currentDate = new Date();

  // Filter out meetings that have already occurred
  const upcomingMeetings = meetings.filter((meeting) => {
    const meetingDateTime = new Date(`${meeting.date}T${meeting.time}`);
    return meetingDateTime > currentDate;
  });

  // Sort the remaining meetings based on their date and time
  upcomingMeetings.sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}`);
    const dateB = new Date(`${b.date}T${b.time}`);
    return dateA - dateB;
  });

  return upcomingMeetings;
}

export function convertTo12HourFormat(time) {
  // Split the input time into hours, minutes, and seconds
  let [hours, minutes, seconds] = time.split(":").map(Number);

  // Determine AM/PM suffix
  let period = hours >= 12 ? "PM" : "AM";

  // Convert hours from 24-hour to 12-hour format
  hours = hours % 12 || 12; // Convert '0' or '12' to '12'

  // Format the hours and minutes as a string
  let formattedTime = `${hours}:${minutes
    .toString()
    .padStart(2, "0")} ${period}`;

  return formattedTime;
}

export function separateByEmp(data) {
  return data.reduce((acc, item) => {
    // Check if the emp property exists in the accumulator
    if (!acc[item.emp]) {
      // If not, create a new array for this emp
      acc[item.emp] = [];
    }
    // Add the current item to the emp's array
    acc[item.emp].push(item);
    return acc;
  }, {});
}
