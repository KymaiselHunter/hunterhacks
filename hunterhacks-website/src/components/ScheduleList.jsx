import ScheduleDay from "./ScheduleDay";

// Static array defined outside component
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


function ScheduleList()
{
    return(
        <>
            <ScheduleDay
                activityArray={activitiesFriday}
            ></ScheduleDay>
        </>
    );
}export default ScheduleList