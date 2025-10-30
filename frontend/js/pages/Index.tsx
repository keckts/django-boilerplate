import { useNavigate } from 'react-router';
import { Button } from '@/js/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/js/components/ui/card';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Welcome to Project</CardTitle>
          <CardDescription>Get started by signing in or creating an account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={() => navigate('/login')} className="w-full" size="lg">
            Login
          </Button>
          <Button onClick={() => navigate('/signup')} variant="outline" className="w-full" size="lg">
            Sign Up
          </Button>
          <Button onClick={() => navigate('/dashboard')} variant="secondary" className="w-full" size="lg">
            Dashboard
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
