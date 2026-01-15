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

export type AdminUser = {
  id: string;
  name: string;
  username: string;
  avatarUrl: string;
  role: 'Admin' | 'Member';
  assignedTasks: number;
  progress: number;
  badges: string[];
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

export const mockAdminUsers: AdminUser[] = [
  { id: 'usr_1', name: 'Alex Evergreen', username: 'alexevergreen', avatarUrl: 'https://picsum.photos/seed/100/200/200', role: 'Admin', assignedTasks: 5, progress: 80, badges: ['Sprout', '30-Day Streak'] },
  { id: 'usr_2', name: 'Brenda Birch', username: 'brendab', avatarUrl: 'https://picsum.photos/seed/101/200/200', role: 'Member', assignedTasks: 8, progress: 65, badges: ['Sprout'] },
  { id: 'usr_3', name: 'Charlie Cedar', username: 'cedar_dev', avatarUrl: 'https://picsum.photos/seed/102/200/200', role: 'Member', assignedTasks: 3, progress: 100, badges: ['Sprout', 'Repo Contributor'] },
  { id: 'usr_4', name: 'Diana Douglas-Fir', username: 'dianadf', avatarUrl: 'https://picsum.photos/seed/103/200/200', role: 'Member', assignedTasks: 12, progress: 40, badges: [] },
  { id: 'usr_5', name: 'Ethan Elm', username: 'e_elm', avatarUrl: 'https://picsum.photos/seed/104/200/200', role: 'Member', assignedTasks: 6, progress: 90, badges: ['Sprout', 'Sapling'] },
];
