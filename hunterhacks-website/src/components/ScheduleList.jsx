import ScheduleDay from "./ScheduleDay";
import "./ScheduleList.css";

const activitiesFriday = [
  {
    activityTitle: "Check-in Begins",
    activityDescription: "1PM – Hunter West Lobby",
  },
  {
    activityTitle: "Opening Ceremony",
    activityDescription: "2PM – Hunter West Lobby",
  },
  {
    activityTitle: "MLT Introduction",
    activityDescription: "2:30PM – Hunter West Auditorium",
  },
  {
    activityTitle: "Check-in Ends, Team Registration + Mentor Matching",
    activityDescription: "3PM – Hunter West Auditorium → Hunter East Library",
  },
  {
    activityTitle: "In-Person Hacking Ends",
    activityDescription: "9PM – Hunter East Library",
  },
];
const activitiesSaturday = [
  {
    activityTitle: "Breakfast",
    activityDescription: "10AM – Hunter West Cafeteria",
  },
  {
    activityTitle: "Lunch",
    activityDescription: "1PM – Hunter West Cafeteria",
  },
  {
    activityTitle: "MLT Introduction",
    activityDescription: "2:30PM – Hunter West Auditorium",
  },
  {
    activityTitle: "Check-in Ends, Team Registration + Mentor Matching",
    activityDescription: "3PM – Hunter West Auditorium → Hunter East Library",
  },
  {
    activityTitle: "In-Person Hacking Ends",
    activityDescription: "9PM – Hunter East Library",
  },
];
const activitiesSunday = [
  {
    activityTitle: "Breakfast",
    activityDescription: "10AM – Hunter West Cafeteria",
  },
  {
    activityTitle: "Hacking Ends, Lunch Begins",
    activityDescription: "12PM – Hunter West Cafeteria",
  },
  {
    activityTitle: "Judging Begins",
    activityDescription: "1PM – Hunter West Cafeteria",
  },
  {
    activityTitle: "Judging Ends",
    activityDescription: "3PM – Hunter West Cafeteria",
  },
  {
    activityTitle: "Closing Ceremony",
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
