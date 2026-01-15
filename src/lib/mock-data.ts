import { subDays, formatISO } from 'date-fns';

export type User = {
  name: string;
  username: string;
  avatarUrl: string;
  bio: string;
};

export type Activity = {
  date: string;
  count: number;
};

export const mockUser: User = {
  name: 'Alex Evergreen',
  username: 'alexevergreen',
  avatarUrl: 'https://picsum.photos/seed/100/200/200',
  bio: 'Full-stack developer with a passion for open-source and green tech. Cultivating code like a garden.',
};

// Generate more realistic, scattered activity data
const generateActivityData = (): Activity[] => {
  const activity: Activity[] = [];
  const today = new Date();
  for (let i = 0; i < 365; i++) {
    const date = subDays(today, i);
    const dayOfWeek = date.getDay();
    let commits = 0;

    // Higher chance of commits on weekdays
    if (dayOfWeek > 0 && dayOfWeek < 6) {
      if (Math.random() > 0.3) { // 70% chance of commit on a weekday
        commits = Math.floor(Math.random() * 8) + 1; // 1-8 commits
      }
    } else {
      if (Math.random() > 0.7) { // 30% chance of commit on a weekend
        commits = Math.floor(Math.random() * 10) + 1; // 1-10 commits
      }
    }
    
    // Random bursts of high activity
    if (Math.random() > 0.95) {
        commits += Math.floor(Math.random() * 15) + 5; // Add a burst of 5-20 commits
    }

    if (commits > 0) {
      activity.push({ date: formatISO(date, { representation: 'date' }), count: commits });
    }
  }
  return activity;
};

export const mockActivity: Activity[] = generateActivityData();
