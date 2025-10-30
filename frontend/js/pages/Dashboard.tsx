import { useNavigate } from 'react-router';
import { Button } from '@/js/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/js/components/ui/card';
import { Home, Users, Settings, LogOut } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Implement actual logout logic
    console.log('Logging out...');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto p-4 md:p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50">Dashboard</h1>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                Welcome
              </CardTitle>
              <CardDescription>Get started with your dashboard</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                This is your main dashboard. From here you can access all features of the application.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Users
              </CardTitle>
              <CardDescription>Manage your users</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                View and manage all users in your application.
              </p>
              <Button className="mt-4 w-full" variant="outline" onClick={() => navigate('/users')}>
                View Users
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Settings
              </CardTitle>
              <CardDescription>Configure your preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Customize your application settings and preferences.
              </p>
              <Button className="mt-4 w-full" variant="outline" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
            <CardDescription>Overview of your application</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <p className="text-sm text-slate-600 dark:text-slate-400">Total Users</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-50">0</p>
              </div>
              <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <p className="text-sm text-slate-600 dark:text-slate-400">Active Sessions</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-50">1</p>
              </div>
              <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <p className="text-sm text-slate-600 dark:text-slate-400">API Calls Today</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-50">0</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
