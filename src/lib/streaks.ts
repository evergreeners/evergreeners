import { differenceInCalendarDays, parseISO, startOfToday } from 'date-fns';
import type { Activity } from './mock-data';

export const calculateStreaks = (activity: Activity[]) => {
  if (activity.length === 0) {
    return { currentStreak: 0, longestStreak: 0 };
  }

  // Create a set of dates with activity for quick lookups
  const activityDates = new Set(activity.map(a => a.date));
  const sortedDates = [...activityDates].sort((a, b) => parseISO(b).getTime() - parseISO(a).getTime());

  let longestStreak = 0;
  let currentStreak = 0;

  // Check current streak
  const today = startOfToday();
  const todayStr = today.toISOString().split('T')[0];
  const yesterdayStr = new Date(today.setDate(today.getDate() - 1)).toISOString().split('T')[0];

  if (activityDates.has(todayStr) || activityDates.has(yesterdayStr)) {
    let streak = 0;
    let day = startOfToday();
    if (!activityDates.has(todayStr) && activityDates.has(yesterdayStr)) {
        day.setDate(day.getDate()-1);
    }

    while (activityDates.has(day.toISOString().split('T')[0])) {
      streak++;
      day.setDate(day.getDate() - 1);
    }
    currentStreak = streak;
  } else {
    currentStreak = 0;
  }
  

  // Calculate longest streak
  if (sortedDates.length > 0) {
    longestStreak = 1;
    let tempStreak = 1;
    for (let i = 0; i < sortedDates.length - 1; i++) {
      const date1 = parseISO(sortedDates[i]);
      const date2 = parseISO(sortedDates[i+1]);
      if (differenceInCalendarDays(date1, date2) === 1) {
        tempStreak++;
      } else {
        longestStreak = Math.max(longestStreak, tempStreak);
        tempStreak = 1;
      }
    }
    longestStreak = Math.max(longestStreak, tempStreak);
  } else {
      longestStreak = currentStreak;
  }
  
  if (currentStreak > longestStreak) {
    longestStreak = currentStreak;
  }


  return { currentStreak, longestStreak };
};
