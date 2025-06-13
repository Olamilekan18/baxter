import { Event } from "../types";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const getEventColor = (type: string) => {
    switch (type) {
      case "Webinar":
        return "bg-blue-100 text-blue-800";
      case "Q&A":
        return "bg-purple-100 text-purple-800";
      case "Event":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-[#131712] text-white rounded-lg shadow-md p-6 text-center space-y-3">
      <svg
        className="w-10 h-10 mx-auto text-purple-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
          clipRule="evenodd"
        ></path>
      </svg>

      <div>
        <div className="text-2xl font-bold text-primary">
          {event.date.split(" ")[1]}
        </div>
        <div className="text-sm uppercase text-gray-400">
          {event.date.split(" ")[0]}
        </div>
      </div>

      <h3 className="text-xl font-semibold">{event.title}</h3>

      <span
        className={`text-xs font-semibold px-3 py-1 rounded-full ${getEventColor(
          event.type
        )}`}
      >
        {event.type}
      </span>

      <button className="bg-accent hover:bg-primary text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors">
        RSVP
      </button>
    </div>

    // <div>
    //   <svg
    //     className="w-10 h-10 mb-2 text-purple-500 md:w-12 md:h-12 dark:text-purple-500"
    //     fill="currentColor"
    //     viewBox="0 0 20 20"
    //     xmlns="http://www.w3.org/2000/svg"
    //   >
    //     <path
    //       fill-rule="evenodd"
    //       d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
    //       clip-rule="evenodd"
    //     ></path>
    //   </svg>
    //  <div className="mr-4 text-center">
    //     <div className="text-2xl font-bold text-primary">{event.date.split(' ')[1]}</div>
    //     <div className="text-sm uppercase text-gray-500">{event.date.split(' ')[0]}</div>
    //   </div>
    //   <h3 className="mb-2 text-2xl font-bold dark:text-white">99.99% uptime</h3>
    //   <p className="font-light text-gray-500 dark:text-gray-400">
    //     For Landwind, with zero maintenance downtime
    //   </p>
    // </div>
  );
}
