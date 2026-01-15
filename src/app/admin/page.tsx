'use client';
import { useState } from 'react';
import { AppLayout } from '@/components/layout/app-layout';
import { UserCard } from '@/components/admin/user-card';
import { UserTasksDialog } from '@/components/admin/user-tasks-dialog';
import { mockAdminUsers, type AdminUserWithTasks } from '@/lib/mock-data';

export default function AdminPage() {
  const [users, setUsers] = useState<AdminUserWithTasks[]>(mockAdminUsers);
  const [selectedUser, setSelectedUser] = useState<AdminUserWithTasks | null>(null);

  const handleAssignTask = (userId: string, taskTitle: string) => {
    const newTask = {
      id: `task-${Date.now()}`,
      title: taskTitle,
      description: 'A new task assigned by an admin.',
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      completed: false,
    };

    setUsers(prevUsers => {
      const newUsers = prevUsers.map(user => {
        if (user.id === userId) {
          const updatedUser = { ...user, tasks: [...user.tasks, newTask] };
          // Also update the selected user if they are currently being viewed
          if (selectedUser?.id === userId) {
            setSelectedUser(updatedUser);
          }
          return updatedUser;
        }
        return user;
      });
      return newUsers;
    });
  };

  const handleViewTasks = (user: AdminUserWithTasks) => {
    setSelectedUser(user);
  };

  return (
    <AppLayout>
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold tracking-tight">Admin Panel</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {users.map(user => (
            <UserCard 
              key={user.id} 
              user={user} 
              onViewTasks={() => handleViewTasks(user)} 
            />
          ))}
        </div>
      </div>
      {selectedUser && (
        <UserTasksDialog
          user={selectedUser}
          isOpen={!!selectedUser}
          onClose={() => setSelectedUser(null)}
          onAssignTask={handleAssignTask}
        />
      )}
    </AppLayout>
  );
}
