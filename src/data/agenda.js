/**
 * Static agenda/timeline data for INTERFACE 2026
 * 
 * Organized by session periods (morning/afternoon)
 * Update this file to modify schedule across all components
 */

export const morningSession = [
  {
    id: 1,
    time: "09:00 AM – 09:45 AM",
    event: "Ingress",
    subtitle: "Arrival and registration of attendees (45 mins)",
    icon: "LogIn",
  },
  {
    id: 2,
    time: "09:45 AM – 10:25 AM",
    event: "Opening Ceremonies",
    subtitle: "Call to Order, Prayer, National Anthem, and Remarks",
    icon: "Record",
  },
  {
    id: 3,
    time: "10:25 AM – 11:45 AM",
    event: "Seminar I & Open Forum",
    subtitle: "Main technical presentation followed by Q&A session",
    icon: "Globe",
  },
  {
    id: 4,
    time: "11:45 AM – 11:55 AM",
    event: "Awarding Ceremony",
    subtitle: "Recognition of Speaker I",
    icon: "Trophy",
  },
  {
    id: 5,
    time: "11:55 AM – 01:00 PM",
    event: "Lunch Break",
    subtitle: "Networking and interactive booths (65 mins)",
    icon: "Coffee",
  },
];

export const afternoonSession = [
  {
    id: 6,
    time: "01:00 PM – 02:30 PM",
    event: "Seminar II & Open Forum",
    subtitle: "Technical session including Speaker II intro and awarding",
    icon: "Box",
  },
  {
    id: 7,
    time: "02:30 PM – 04:05 PM",
    event: "Seminar III & Open Forum",
    subtitle: "Short break followed by deep-dive technical session",
    icon: "Tv",
  },
  {
    id: 8,
    time: "04:05 PM – 04:10 PM",
    event: "Short Break",
    subtitle: "Brief intermission before the final session",
    icon: "Power",
  },
  {
    id: 9,
    time: "04:10 PM – 05:40 PM",
    event: "Seminar IV & Open Forum",
    subtitle: "Final speaker block and industry integration wrap-up",
    icon: "Star",
  },
  {
    id: 10,
    time: "05:40 PM – 06:00 PM",
    event: "Closing Remarks",
    subtitle: "Event conclusion and final acknowledgments",
    icon: "Star",
  },
];

export const agenda = {
  morning: morningSession,
  afternoon: afternoonSession,
};

export default agenda;
