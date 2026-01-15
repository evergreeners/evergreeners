import { AppLayout } from '@/components/layout/app-layout';
import { UserManagementTable } from '@/components/admin/user-management-table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Admin Panel | Evergreeners',
};

export default function AdminPage() {
  return (
    <AppLayout>
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold tracking-tight">Admin Panel</h1>
        <Card>
            <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>View and manage all users in the system.</CardDescription>
            </CardHeader>
            <CardContent>
                <UserManagementTable />
            </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
