export function isMarketOpen(): boolean {
  const now = new Date();

  // Get EST offset (-5 for EST, -4 for EDT during daylight saving)
  const utcHour = now.getUTCHours();
  const utcDay = now.getUTCDay(); // Sunday = 0, Saturday = 6

  // Market open 9:30 AM to 4:00 PM EST
  const estHour = utcHour - 4; // adjust UTC to EST (manual, not DST aware)
  const estMinute = now.getUTCMinutes();

  const totalMinutes = estHour * 60 + estMinute;

  const marketOpen = 9 * 60 + 30; // 9:30 AM = 570 mins
  const marketClose = 16 * 60; // 4:00 PM = 960 mins

  const isWeekday = utcDay >= 1 && utcDay <= 5;

  return isWeekday && totalMinutes >= marketOpen && totalMinutes < marketClose;
}
