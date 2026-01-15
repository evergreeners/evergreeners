'use client';
import { AppLayout } from '@/components/layout/app-layout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { mockUser } from '@/lib/mock-data';

export default function ProfilePage() {
  return (
    <AppLayout>
      <div className="mx-auto max-w-3xl space-y-8">
        <h1 className="text-3xl font-bold tracking-tight">Profile & Settings</h1>

        <Card>
          <CardHeader>
            <CardTitle>Public Profile</CardTitle>
            <CardDescription>This information will be displayed publicly.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src={mockUser.avatarUrl} />
                <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <Button variant="outline">Change Avatar</Button>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue={mockUser.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue={mockUser.username} disabled />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" defaultValue={mockUser.bio} rows={3} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Privacy Settings</CardTitle>
            <CardDescription>Manage how your activity is shared.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
             <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <Label htmlFor="private-profile" className="font-medium">Private Profile</Label>
                  <p className="text-sm text-muted-foreground">
                    Make your profile and all activity private.
                  </p>
                </div>
                <Switch id="private-profile" />
              </div>
             <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <Label htmlFor="share-goals" className="font-medium">Share Goals</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow others to see your active goals.
                  </p>
                </div>
                <Switch id="share-goals" defaultChecked/>
              </div>
          </CardContent>
        </Card>
        
        <div className="flex justify-end">
            <Button>Save Changes</Button>
        </div>
      </div>
    </AppLayout>
  );
}
