import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Shield, Lock } from 'lucide-react';
import { useAdminAuth } from '@/contexts/AdminAuthContext';

const AdminAuth = () => {
  const { signIn, loading, user, session } = useAdminAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [debugMode, setDebugMode] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    console.log('Admin sign-in attempt:', { email, timestamp: new Date().toISOString() });

    try {
      await signIn(email, password);
    } catch (err: any) {
      console.error('Sign in error:', err);
      let errorMessage = 'Failed to sign in';
      
      if (err.message?.includes('Invalid login credentials')) {
        errorMessage = 'Invalid email or password. Please check your credentials.';
      } else if (err.message?.includes('Email not confirmed')) {
        errorMessage = 'Please check your email and confirm your account before signing in.';
      } else if (err.message?.includes('Too many requests')) {
        errorMessage = 'Too many sign-in attempts. Please wait a few minutes and try again.';
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl">Admin Access</CardTitle>
          <CardDescription>
            Sign in to access the MentalSpace Therapy admin dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                placeholder="admin@mentalspacetherapy.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isSubmitting}
                placeholder="Enter your password"
              />
            </div>

            {error && (
              <Alert variant="destructive">
                <Lock className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>

          <div className="mt-6 space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                Admin access is restricted to authorized personnel only.
              </p>
            </div>
            
            {(user || session || debugMode) && (
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-blue-900 dark:text-blue-100">
                    Debug Information
                  </h4>
                  <button
                    type="button"
                    onClick={() => setDebugMode(!debugMode)}
                    className="text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400"
                  >
                    {debugMode ? 'Hide' : 'Show'}
                  </button>
                </div>
                {debugMode && (
                  <div className="text-xs space-y-1 text-blue-800 dark:text-blue-200 font-mono">
                    <p>User ID: {user?.id || 'None'}</p>
                    <p>Email: {user?.email || 'None'}</p>
                    <p>Session: {session ? 'Active' : 'None'}</p>
                    <p>Loading: {loading ? 'Yes' : 'No'}</p>
                    <p>Timestamp: {new Date().toISOString()}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAuth;