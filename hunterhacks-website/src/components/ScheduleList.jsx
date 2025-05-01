import ScheduleDay from "./ScheduleDay";
import "./ScheduleList.css";

const activitiesFriday = [
  {
    activityTitle: "Check-in Begins ✅",
    activityDescription: "1:00 PM – Hunter West Lobby",
  },
  {
    activityTitle: "Opening Ceremony 🎙️",
    activityDescription: "2:00 PM – Hunter West Lobby",
  },
  {
    activityTitle: "MLT Presentation 📎",
    activityDescription: "3:00 PM – Hunter West Auditorium",
  },
  {
    activityTitle: "HACKING STARTS 😈",
    activityDescription: "3:30 PM - Hunter West Lobby",
  },
  {
    activityTitle: "Product Thinking Workshop 🤔",
    activityDescription: "4:00 PM - Hunter West Lobby",
  },
  {
    activityTitle: "Check-in Ends, Team Registration + Mentor Matching 🙋‍♀️",
    activityDescription: "5:00PM – Hunter West Lobby",
  },
  {
    activityTitle: "DINNER 🍕",
    activityDescription: "6:00 PM - Hunter West Lobby",
  },
  {
    activityTitle: "In-Person Hacking Ends 📌",
    activityDescription: "9:00 PM – Hunter East Library",
  },
];
const activitiesSaturday = [
  {
    activityTitle: "IN-PERSON BEGINS 😳",
    activityDescription: "10:00 AM",
  },
  {
    activityTitle: "Breakfast 🍳",
    activityDescription: "10:00 AM – Hunter West Cafeteria",
  },
  //{
  //  activityTitle: "In-Person Hacking Begins ✅",
  //  activityDescription: "11AM – Hunter East Library",
  //},
  {
    activityTitle: "Codepath Workshop 💻, Professional Development",
    activityDescription: "12:00PM - HE 706 (Hemmerdinger room)",
  },
  {
    activityTitle: "LUNCH",
    activityDescription: "6:00 PM - Hunter West Cafeteria",
  },
  {
    activityTitle: "Cup Stacking 🥤",
    activityDescription: "3:00 PM - Hunter West Cafeteria",
  },
  {
    activityTitle: "LinkedIn Workshop 🤝",
    activityDescription: "4:00 PM – HE 706 (Hemmerdinger room)",
  },
  {
    activityTitle: "Cloud Services/Hosting ☁️ Workshop",
    activityDescription: "4:30 PM - HE 706 (Hemmerdinger room)",
  },
  {
    activityTitle: "In-Person Hacking Ends 📌",
    activityDescription: "9:00 PM – Hunter East Library",
  },
];
const activitiesSunday = [
  {
    activityTitle: "Breakfast 🍳",
    activityDescription: "10:00 AM – Hunter West Cafeteria",
  },
  {
    activityTitle: "Hacking Ends + Lunch 🥪",
    activityDescription: "12:00 PM – Hunter West Cafeteria",
  },
  {
    activityTitle: "Judging Begins 🏆",
    activityDescription: "1:00 PM – Hunter West Cafeteria",
  },
  {
    activityTitle: "Judging Ends 🛑",
    activityDescription: "3:00 PM – Hunter West Cafeteria",
  },
  {
    activityTitle: "Closing Ceremony 🎊",
    activityDescription: "4:00 PM - Hunter West 714",
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
