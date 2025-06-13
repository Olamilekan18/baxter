// pages/community.tsx
import Header from "./components/Header";
import Footer from "./components/Footer";
import DiscussionCard from "./components/DiscussionCard";
import Leaderboard from "./components/Leaderboard";
import EventCard from "./components/EventCard";
import Poll from "./components/Poll";

export default function CommunityPage() {
  const trendingDiscussions = [
    {
      id: 1,
      title: "NVDA Earnings Breakdown",
      author: "@TradeMaster",
      content:
        "Baxter's AI predicted a 12% move post-earnings—what's your play?",
      upvotes: 1200,
      comments: 342,
      isHot: true,
    },
    {
      id: 2,
      title: "Market Alert: Fed Rate Decision Impact",
      author: "@MacroTrader",
      content:
        "Baxter's sentiment analysis shows 78% bearish signals on tech stocks.",
      upvotes: 890,
      comments: 210,
      isAlert: true,
    },
    {
      id: 3,
      title: "New Feature: AI Trade Copier",
      author: "@BaxterTeam",
      content:
        "Automatically mirror top traders' moves with Baxter's AI Copilot!",
      upvotes: 2500,
      comments: 512,
      isNew: true,
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      date: "June 15",
      title: "How Baxter's AI Predicts Reversals",
      type: "Webinar",
    },
    {
      id: 2,
      date: "June 18",
      title: "AMA with Hedge Fund Manager @WallStreetWolf",
      type: "Q&A",
    },
    {
      id: 3,
      date: "June 22",
      title: "Live Trading Competition ($5K Prize Pool)",
      type: "Event",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Baxter <span className="text-accent">Community Hub</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect, Learn & Trade Smarter Together with AI-Powered Insights
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Top Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "Live Discussion Threads",
              "Expert AMAs",
              "AI-Powered Trade Signals",
              "Leaderboard",
              "Educational Hub",
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-primary p-4 rounded-lg shadow-md border-l-4 border-accent"
              >
                <p className="font-medium">✅ {feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Trending Market Discussions
          </h2>
          <div className="space-y-4 grid grid-cols-3">
            {trendingDiscussions.map((discussion) => (
              <DiscussionCard key={discussion.id} discussion={discussion} />
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Leaderboard />

          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">
              Upcoming Events
            </h2>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <Poll />
        </section>

        <section className="bg-primary text-white p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">💬 Join the Conversation</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "#BaxterAI",
              "#StocksToWatch",
              "#AITrading",
              "#EarningsSeason",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-accent px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="space-y-3">
            <p className="italic">
              'Just used Baxter&quot;s AI scanner to find a 15% gap play—worked
              like magic!' – @DayTraderDan
            </p>
            <p className="italic">
              'Who else is riding the NVDA wave? Baxter's alerts saved me from a
              bad short!' – @OptionsGuru
            </p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            🚀 Why Join Baxter&quot;s Community?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              "AI-Enhanced Trading Signals",
              "Real-Time Alerts",
              "Network with Pros",
              "Exclusive Beta Features",
            ].map((feature, index) => (
              <div key={index} className="bg-primary p-4 rounded-lg shadow-md">
                <p className="font-medium">✔ {feature}</p>
              </div>
            ))}
          </div>
          <div className="space-x-4">
            <button className="bg-accent hover:bg-primary text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Sign Up Now
            </button>
            <button className="bg-primary hover:bg-gray-100 text-gray-600 hover:text-[#53d22c] font-bold py-3 px-6 rounded-lg border border-primary transition-colors">
              Download App
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
