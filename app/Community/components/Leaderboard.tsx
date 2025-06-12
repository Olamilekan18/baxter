// components/Community/Leaderboard.tsx
export default function Leaderboard() {
  const topTraders = [
    { rank: 1, name: "@CryptoKing", winRate: "89%", pnl: "+$24,500" },
    { rank: 2, name: "@SwingQueen", winRate: "82%", pnl: "+$18,200" },
    { rank: 3, name: "@AITraderPro", winRate: "78%", pnl: "+$15,750" },
    { rank: 4, name: "@OptionsGuru", winRate: "75%", pnl: "+$12,300" },
    { rank: 5, name: "@DayTraderDan", winRate: "72%", pnl: "+$10,500" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-6">🏆 Top Traders This Week</h2>
      <div className="bg-primary rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y bg-primary divide-gray-200">
          <thead className="bg-primary text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trader</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Win Rate</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">P&L (7D)</th>
            </tr>
          </thead>
          <tbody className="bg-primary divide-y divide-gray-200">
            {topTraders.map((trader) => (
              <tr key={trader.rank}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {trader.rank === 1 && <span className="text-yellow-500">🥇</span>}
                  {trader.rank === 2 && <span className="text-gray-400">🥈</span>}
                  {trader.rank === 3 && <span className="text-amber-600">🥉</span>}
                  {trader.rank > 3 && <span>{trader.rank}</span>}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-primary">{trader.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{trader.winRate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-green-600 font-medium">{trader.pnl}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-6 py-4 bg-primary text-right">
          <a href="#" className="text-accent hover:text-primary font-medium">
            View Full Leaderboard →
          </a>
        </div>
      </div>
    </div>
  );
}