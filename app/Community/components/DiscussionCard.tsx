import { FiChevronUp } from "react-icons/fi";
import { Discussion } from "../types";

interface DiscussionCardProps {
  discussion: Discussion;
}

export default function DiscussionCard({ discussion }: DiscussionCardProps) {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src="https://s.yimg.com/ny/api/res/1.2/gHlVvT_Jz07GK4l1kBgqNA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://media.zenfs.com/en/us.finance.gurufocus/528af7acf1b685a79f0a0ee8c34ab69c"
          alt="blog"
        />
        <div className="p-6 bg-white">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-700 mb-1">
            Author: {discussion.author}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {discussion.title}
          </h1>
          <p className="leading-relaxed text-black mb-3">
            {discussion.content}
          </p>
          <div className="flex items-center flex-wrap ">
            <a className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0">
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <FiChevronUp className="w-4 h-4 mr-1" />
              {discussion.upvotes.toLocaleString()}
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              {discussion.comments.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
