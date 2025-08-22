import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  FileText, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  LogOut,
  Mail,
  Calendar,
  TrendingUp,
  Trash2,
  RefreshCw
} from 'lucide-react';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { clearAuthCache, clearAllCache, clearBrowserCache } from '@/utils/cacheUtils';
import FormSubmissions from '@/components/admin/FormSubmissions';
import AssessmentResults from '@/components/admin/AssessmentResults';
import ContentManager from '@/components/admin/ContentManager';
import AnalyticsDashboard from '@/components/admin/AnalyticsDashboard';
import { toast } from 'sonner';

const AdminDashboard = () => {
  const { user, profile, signOut, hasRole } = useAdminAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const handleSignOut = async () => {
    try {
      await signOut();
      // Redirect to home page after successful logout
      window.location.href = '/';
    } catch (error) {
      console.error('Sign out error:', error);
      // Even if signOut fails, redirect to home page
      window.location.href = '/';
    }
  };

  const handleClearAuthCache = () => {
    const success = clearAuthCache();
    if (success) {
      toast.success('Auth cache cleared successfully');
    } else {
      toast.error('Failed to clear auth cache');
    }
  };

  const handleClearAllCache = () => {
    const success = clearAllCache();
    if (success) {
      toast.success('All cache cleared successfully');
      // Reload page to reflect changes
      setTimeout(() => window.location.reload(), 1000);
    } else {
      toast.error('Failed to clear all cache');
    }
  };

  const handleClearBrowserCache = () => {
    toast.info('Clearing browser cache and reloading...');
    setTimeout(() => clearBrowserCache(), 500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">MentalSpace Therapy Management</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-medium">{profile?.full_name}</p>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{profile?.role.replace('_', ' ')}</Badge>
              </div>
            </div>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:grid-cols-none lg:inline-flex">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="forms" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Forms
            </TabsTrigger>
            <TabsTrigger value="assessments" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Assessments
            </TabsTrigger>
            <TabsTrigger value="cache" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Cache
            </TabsTrigger>
            {hasRole('content_manager') && (
              <TabsTrigger value="content" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Content
              </TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Forms
                  </CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">-</div>
                  <p className="text-xs text-muted-foreground">
                    Form submissions this month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Assessments
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">-</div>
                  <p className="text-xs text-muted-foreground">
                    Completed assessments
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Response Rate
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">-</div>
                  <p className="text-xs text-muted-foreground">
                    Average response time
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Sessions
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">-</div>
                  <p className="text-xs text-muted-foreground">
                    Current active sessions
                  </p>
                </CardContent>
              </Card>
            </div>
            <AnalyticsDashboard />
          </TabsContent>

          <TabsContent value="forms" className="space-y-4">
            <FormSubmissions />
          </TabsContent>

          <TabsContent value="assessments" className="space-y-4">
            <AssessmentResults />
          </TabsContent>

          <TabsContent value="cache" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Cache Management
                </CardTitle>
                <CardDescription>
                  Clear various types of cached data to resolve issues or free up storage.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <Card className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Trash2 className="h-4 w-4 text-muted-foreground" />
                        <h3 className="font-medium">Auth Cache</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Clear authentication tokens and session data
                      </p>
                      <Button 
                        onClick={handleClearAuthCache}
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                      >
                        Clear Auth Cache
                      </Button>
                    </div>
                  </Card>
                  
                  <Card className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Trash2 className="h-4 w-4 text-muted-foreground" />
                        <h3 className="font-medium">All Storage</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Clear all localStorage and sessionStorage data
                      </p>
                      <Button 
                        onClick={handleClearAllCache}
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                      >
                        Clear All Storage
                      </Button>
                    </div>
                  </Card>
                  
                  <Card className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <RefreshCw className="h-4 w-4 text-muted-foreground" />
                        <h3 className="font-medium">Browser Cache</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Clear browser cache and force reload
                      </p>
                      <Button 
                        onClick={handleClearBrowserCache}
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                      >
                        Hard Refresh
                      </Button>
                    </div>
                  </Card>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">Quick Actions</h4>
                  <div className="flex gap-2 flex-wrap">
                    <Button 
                      onClick={handleClearAuthCache}
                      variant="secondary" 
                      size="sm"
                    >
                      <Trash2 className="h-3 w-3 mr-1" />
                      Auth Only
                    </Button>
                    <Button 
                      onClick={handleClearBrowserCache}
                      variant="secondary" 
                      size="sm"
                    >
                      <RefreshCw className="h-3 w-3 mr-1" />
                      Force Reload
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {hasRole('content_manager') && (
            <TabsContent value="content" className="space-y-4">
              <ContentManager />
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;