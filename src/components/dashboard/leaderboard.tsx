'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { mockLeaderboardUsers } from '@/lib/mock-data';
import { Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

export function Leaderboard() {
  const getRankColor = (rank: string) => {
    switch (rank) {
      case 'Redwood':
        return 'bg-teal-400/20 text-teal-300 border-teal-400/50';
      case 'Evergreen':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50';
      case 'Sapling':
        return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'Sprout':
        return 'bg-lime-500/20 text-lime-400 border-lime-500/50';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Streak Leaderboard</CardTitle>
        <CardDescription>See who is cultivating the strongest coding habits.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px] text-center">#</TableHead>
              <TableHead>User</TableHead>
              <TableHead className="text-right">Streak</TableHead>
              <TableHead className="text-center">Rank</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockLeaderboardUsers.map((user, index) => (
              <TableRow key={user.id}>
                <TableCell className="font-bold text-center text-muted-foreground">
                  <div className="flex justify-center items-center h-full">
                    {index === 0 && <Trophy className="w-5 h-5 text-yellow-400 mr-2" />}
                    {index + 1}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.avatarUrl} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">@{user.username}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right font-code font-semibold text-lg">{user.streak} days</TableCell>
                <TableCell className="text-center">
                   <Badge variant="outline" className={cn('font-semibold', getRankColor(user.rank))}>
                    {user.rank}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
