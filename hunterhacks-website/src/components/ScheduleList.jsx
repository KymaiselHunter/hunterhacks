import ScheduleDay from "./ScheduleDay";
import "./ScheduleList.css";

const activitiesFriday = [
  {
    activityTitle: "Check-in Begins ✅",
    activityDescription: "1PM – Hunter West Lobby",
  },
  {
    activityTitle: "Opening Ceremony 🎙️",
    activityDescription: "2PM – Hunter West Lobby",
  },
  {
    activityTitle: "MLT Presentation 📎",
    activityDescription: "3:00 PM – Hunter West Auditorium",
  },
  {
    activityTitle: "HACKING STARTS 😈",
    activityDescription: "3:30 PM",
  },
  {
    activityTitle: "Product Thinking Workshop 🤔",
    activityDescription: "4:00 PM",
  },
  {
    activityTitle: "Check-in Ends, Team Registration + Mentor Matching 🙋‍♀️",
    activityDescription: "5PM – Hunter West Auditorium → Hunter East Library",
  },
  {
    activityTitle: "DINNER 🍕",
    activityDescription: "6:00 PM",
  },
  {
    activityTitle: "In-Person Hacking Ends 📌",
    activityDescription: "9PM – Hunter East Library",
  },
];
const activitiesSaturday = [
  {
    activityTitle: "IN-PERSON BEGINS 😳",
    activityDescription: "10AM",
  },
  {
    activityTitle: "Breakfast 🍳",
    activityDescription: "10AM – Hunter West Cafeteria",
  },
  //{
  //  activityTitle: "In-Person Hacking Begins ✅",
  //  activityDescription: "11AM – Hunter East Library",
  //},
  {
    activityTitle: "Codepath Workshop 💻, Professional Development",
    activityDescription: "12PM - HE 706 (Hemmerdinger room)",
  },
  {
    activityTitle: "LUNCH",
    activityDescription: "6:00 PM - Cafeteria",
  },
  {
    activityTitle: "Cup Stacking 🥤",
    activityDescription: "3:00 PM",
  },
  {
    activityTitle: "LinkedIn Workshop 🤝",
    activityDescription: "4:00PM – Hunter West Auditorium",
  },
  {
    activityTitle: "Cloud Services/Hosting ☁️ Workshop",
    activityDescription: "4:30PM - HE 706 (Hemmerdinger room)",
  },
  {
    activityTitle: "In-Person Hacking Ends 📌",
    activityDescription: "9PM – Hunter East Library",
  },
];
const activitiesSunday = [
  {
    activityTitle: "Breakfast 🍳",
    activityDescription: "10AM – Hunter West Cafeteria",
  },
  {
    activityTitle: "Hacking Ends + Lunch 🥪",
    activityDescription: "12PM – Hunter West Cafeteria",
  },
  {
    activityTitle: "Judging Begins 🏆",
    activityDescription: "1PM – Hunter West Cafeteria",
  },
  {
    activityTitle: "Judging Ends 🛑",
    activityDescription: "3PM – Hunter West Cafeteria",
  },
  {
    activityTitle: "Closing Ceremony 🎊",
    activityDescription: "4PM - Hunter West 714",
  },
];

function ScheduleList() {
  return (
    <div className="schedule-list">
      <ScheduleDay activityArray={activitiesFriday} day="Friday"></ScheduleDay>
      <ScheduleDay
        activityArray={activitiesSaturday}
        day="Saturday"
      ></ScheduleDay>
      <ScheduleDay activityArray={activitiesSunday} day="Sunday"></ScheduleDay>
    </div>
  );
}
export default ScheduleList;
