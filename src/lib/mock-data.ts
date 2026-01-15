import { subDays, formatISO, addDays } from 'date-fns';

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

export type Task = {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  completed: boolean;
};

export type AdminUser = {
  id: string;
  name: string;
  username: string;
  avatarUrl: string;
  role: 'Admin' | 'Member';
  badges: string[];
};

export type AdminUserWithTasks = AdminUser & {
  tasks: Task[];
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

const generateTasksForUser = (name: string, taskCount: number): Task[] => {
    const tasks: Task[] = [];
    const prompts = [
        `Refactor the ${name.split(' ')[0]} component`,
        `Write tests for the user service`,
        `Fix bug #${Math.floor(Math.random() * 500)}`,
        'Update API documentation',
        'Deploy new feature to staging',
        'Review pull request from a colleague'
    ];
    for(let i=0; i < taskCount; i++){
        const isCompleted = Math.random() > 0.5;
        const dueDate = addDays(new Date(), Math.floor(Math.random() * 30) - 15);
        tasks.push({
            id: `task-${name.toLowerCase().split(' ')[0]}-${i}`,
            title: prompts[i % prompts.length],
            description: `A mock description for task: ${prompts[i % prompts.length]}`,
            dueDate,
            completed: isCompleted,
        });
    }
    return tasks;
};

export const mockAdminUsers: AdminUserWithTasks[] = [
  { id: 'usr_1', name: 'Alex Evergreen', username: 'alexevergreen', avatarUrl: 'https://picsum.photos/seed/100/200/200', role: 'Admin', badges: ['Sprout', '30-Day Streak'], tasks: generateTasksForUser('Alex Evergreen', 5) },
  { id: 'usr_2', name: 'Brenda Birch', username: 'brendab', avatarUrl: 'https://picsum.photos/seed/101/200/200', role: 'Member', badges: ['Sprout'], tasks: generateTasksForUser('Brenda Birch', 8) },
  { id: 'usr_3', name: 'Charlie Cedar', username: 'cedar_dev', avatarUrl: 'https://picsum.photos/seed/102/200/200', role: 'Member', badges: ['Sprout', 'Repo Contributor'], tasks: generateTasksForUser('Charlie Cedar', 3) },
  { id: 'usr_4', name: 'Diana Douglas-Fir', username: 'dianadf', avatarUrl: 'https://picsum.photos/seed/103/200/200', role: 'Member', badges: [], tasks: generateTasksForUser('Diana Douglas-Fir', 12) },
  { id: 'usr_5', name: 'Ethan Elm', username: 'e_elm', avatarUrl: 'https://picsum.photos/seed/104/200/200', role: 'Member', badges: ['Sprout', 'Sapling'], tasks: generateTasksForUser('Ethan Elm', 6) },
];
