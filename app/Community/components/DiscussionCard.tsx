import { Discussion } from '../types';

interface DiscussionCardProps {
  discussion: Discussion;
}

export default function DiscussionCard({ discussion }: DiscussionCardProps) {
  return (
    <div className="bg-[#131712] rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-start">
          {discussion.isHot && (
            <span className="bg-primary text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">🔥 HOT</span>
          )}
          {discussion.isAlert && (
            <span className="bg-primary text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">📉 ALERT</span>
          )}
          {discussion.isNew && (
            <span className="bg-primary text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">🚀 NEW</span>
          )}
          <h3 className="text-xl font-bold text-primary flex-grow">{discussion.title}</h3>
        </div>
        <p className="text-gray-600 mt-2">Posted by {discussion.author}</p>
        <p className="mt-3">{discussion.content}</p>
        <div className="mt-4 flex items-center space-x-4 text-sm">
          <span className="flex items-center text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
            {discussion.upvotes.toLocaleString()} Upvotes
          </span>
          <span className="flex items-center text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {discussion.comments.toLocaleString()} Comments
          </span>
        </div>
      </div>
    </div>
  );
}