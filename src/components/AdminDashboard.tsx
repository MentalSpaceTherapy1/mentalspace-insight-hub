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
  Calendar,
  TrendingUp,
  Trash2,
  RefreshCw,
  Sparkles,
  Zap,
  Shield,
  Activity
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30">
      {/* Modern Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl animate-pulse-glow"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl animate-float"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-between px-8 py-6">
          <div className="animate-slide-in-right">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-blue-200">MentalSpace Therapy Management Portal</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6 animate-fade-in">
            <div className="text-right">
              <p className="font-medium text-white">{profile?.full_name}</p>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Sparkles className="h-3 w-3 mr-1" />
                  {profile?.role.replace('_', ' ')}
                </Badge>
              </div>
            </div>
            <Button 
              variant="outline" 
              onClick={handleSignOut}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white transition-all duration-300"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          {/* Modern Tab List */}
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:grid-cols-none lg:inline-flex bg-white/80 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl p-2">
            <TabsTrigger 
              value="overview" 
              className="flex items-center gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white transition-all duration-300"
            >
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger 
              value="forms" 
              className="flex items-center gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-teal-600 data-[state=active]:text-white transition-all duration-300"
            >
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Forms</span>
            </TabsTrigger>
            <TabsTrigger 
              value="assessments" 
              className="flex items-center gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-600 data-[state=active]:text-white transition-all duration-300"
            >
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Assessments</span>
            </TabsTrigger>
            <TabsTrigger 
              value="cache" 
              className="flex items-center gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-rose-600 data-[state=active]:text-white transition-all duration-300"
            >
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Cache</span>
            </TabsTrigger>
            {hasRole('content_manager') && (
              <TabsTrigger 
                value="content" 
                className="flex items-center gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white transition-all duration-300"
              >
                <MessageSquare className="h-4 w-4" />
                <span className="hidden sm:inline">Content</span>
              </TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="overview" className="space-y-8 animate-fade-in">
            {/* Modern Stats Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="admin-stat-card admin-gradient-primary group">
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <FileText className="h-8 w-8 text-white/90 group-hover:scale-110 transition-transform duration-300" />
                    <div className="p-2 rounded-lg bg-white/20">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">-</div>
                  <p className="text-white/80 text-sm font-medium">Total Form Submissions</p>
                  <div className="mt-3 flex items-center text-white/70 text-xs">
                    <Zap className="h-3 w-3 mr-1" />
                    This month
                  </div>
                </div>
              </Card>
              
              <Card className="admin-stat-card admin-gradient-accent group">
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Users className="h-8 w-8 text-white/90 group-hover:scale-110 transition-transform duration-300" />
                    <div className="p-2 rounded-lg bg-white/20">
                      <Activity className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">-</div>
                  <p className="text-white/80 text-sm font-medium">Completed Assessments</p>
                  <div className="mt-3 flex items-center text-white/70 text-xs">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Active users
                  </div>
                </div>
              </Card>
              
              <Card className="admin-stat-card admin-gradient-success group">
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <TrendingUp className="h-8 w-8 text-white/90 group-hover:scale-110 transition-transform duration-300" />
                    <div className="p-2 rounded-lg bg-white/20">
                      <BarChart3 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">-</div>
                  <p className="text-white/80 text-sm font-medium">Response Rate</p>
                  <div className="mt-3 flex items-center text-white/70 text-xs">
                    <Shield className="h-3 w-3 mr-1" />
                    Average time
                  </div>
                </div>
              </Card>
              
              <Card className="admin-stat-card admin-gradient-warning group">
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Calendar className="h-8 w-8 text-white/90 group-hover:scale-110 transition-transform duration-300" />
                    <div className="p-2 rounded-lg bg-white/20">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">-</div>
                  <p className="text-white/80 text-sm font-medium">Active Sessions</p>
                  <div className="mt-3 flex items-center text-white/70 text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    Live now
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Enhanced Analytics Dashboard */}
            <div className="animate-slide-up">
              <AnalyticsDashboard />
            </div>
          </TabsContent>

          <TabsContent value="forms" className="space-y-4 animate-fade-in">
            <FormSubmissions />
          </TabsContent>

          <TabsContent value="assessments" className="space-y-4 animate-fade-in">
            <AssessmentResults />
          </TabsContent>

          <TabsContent value="cache" className="space-y-6 animate-fade-in">
            <Card className="admin-card overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                    <Settings className="h-6 w-6 text-white" />
                  </div>
                  Cache Management
                </CardTitle>
                <CardDescription className="text-base">
                  Clear various types of cached data to resolve issues or free up storage space.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid gap-6 md:grid-cols-3">
                  <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-500 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="relative p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                          <Trash2 className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg text-gray-800">Auth Cache</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Clear authentication tokens and session data to resolve login issues
                      </p>
                      <Button 
                        onClick={handleClearAuthCache}
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Clear Auth Cache
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 transition-all duration-500 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="relative p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                          <Zap className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg text-gray-800">All Storage</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Clear all localStorage and sessionStorage data for a fresh start
                      </p>
                      <Button 
                        onClick={handleClearAllCache}
                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Zap className="h-4 w-4 mr-2" />
                        Clear All Storage
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-green-50 to-teal-100 hover:from-green-100 hover:to-teal-200 transition-all duration-500 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="relative p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                          <RefreshCw className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg text-gray-800">Browser Cache</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Force a hard refresh to clear browser cache and reload resources
                      </p>
                      <Button 
                        onClick={handleClearBrowserCache}
                        className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Hard Refresh
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-slate-50 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-blue-500" />
                    Quick Actions
                  </h4>
                  <div className="flex gap-3 flex-wrap">
                    <Button 
                      onClick={handleClearAuthCache}
                      variant="secondary" 
                      className="bg-white hover:bg-gray-50 border shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <Trash2 className="h-4 w-4 mr-2 text-blue-500" />
                      Auth Only
                    </Button>
                    <Button 
                      onClick={handleClearBrowserCache}
                      variant="secondary" 
                      className="bg-white hover:bg-gray-50 border shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <RefreshCw className="h-4 w-4 mr-2 text-green-500" />
                      Force Reload
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {hasRole('content_manager') && (
            <TabsContent value="content" className="space-y-4 animate-fade-in">
              <ContentManager />
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;