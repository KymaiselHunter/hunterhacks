import ScheduleDay from "./ScheduleDay";
import "./ScheduleList.css"

const activitiesFriday = [
    {
        activityTitle: "Check-in Begins",
        activityDescription: "1PM – Hunter West Lobby",
    },
    {
        activityTitle: "Opening Ceremony",
        activityDescription: "2PM – Hunter West Auditorium",
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
        activityTitle: "Check-in Begins",
        activityDescription: "1PM – Hunter West Lobby",
    },
    {
        activityTitle: "Opening Ceremony",
        activityDescription: "2PM – Hunter West Auditorium",
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
        activityTitle: "Check-in Begins",
        activityDescription: "1PM – Hunter West Lobby",
    },
    {
        activityTitle: "Opening Ceremony",
        activityDescription: "2PM – Hunter West Auditorium",
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


function ScheduleList()
{
    return(
        <div className="schedule-list">
            <ScheduleDay
                activityArray={activitiesFriday}
            ></ScheduleDay>
            <ScheduleDay
                activityArray={activitiesSaturday}
            ></ScheduleDay>
            <ScheduleDay
                activityArray={activitiesSunday}
            ></ScheduleDay>
        </div>
    );
}export default ScheduleList