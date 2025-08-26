import { useEffect, useState } from 'react';

interface BuildStatus {
  timestamp?: string;
  environment?: string;
  success?: boolean;
  routes_generated?: number;
  has_diagnostics?: boolean;
  build_version?: string;
  error?: string;
}

const isDevelopment = () => {
  return import.meta.env.DEV || window.location.hostname === 'localhost';
};

export const BuildStatus = () => {
  const [status, setStatus] = useState<BuildStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkBuildStatus = async () => {
      try {
        const response = await fetch('/__diagnostics/build-status.json');
        if (response.ok) {
          const data = await response.json();
          setStatus(data);
        } else {
          // Handle different scenarios based on environment
          if (isDevelopment()) {
            setStatus({ 
              success: true, 
              environment: 'development',
              error: 'Build diagnostics not available in dev mode' 
            });
          } else {
            setStatus({ 
              success: false, 
              environment: 'production',
              error: 'SSR build status unavailable - check build configuration' 
            });
          }
        }
      } catch (error) {
        if (isDevelopment()) {
          setStatus({ 
            success: true, 
            environment: 'development',
            error: 'Running in development mode' 
          });
        } else {
          setStatus({ 
            success: false, 
            environment: 'production',
            error: 'Network error fetching build status' 
          });
        }
      } finally {
        setLoading(false);
      }
    };

    checkBuildStatus();
  }, []);

  if (loading) return <div className="text-sm text-muted-foreground">Checking build status...</div>;

  if (!status) return null;

  // Don't show the status widget in development unless there's an actual error
  if (isDevelopment() && status.success) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-background border rounded-lg p-3 shadow-lg text-xs max-w-xs">
      <div className="font-semibold mb-1">
        {status.success ? '✅ SSR Build Active' : '❌ SSR Build Issue'}
      </div>
      <div className="space-y-1 text-muted-foreground">
        <div>Environment: {status.environment || 'unknown'}</div>
        {status.routes_generated && (
          <div>Routes: {status.routes_generated}</div>
        )}
        {status.build_version && (
          <div>Build: {status.build_version.slice(-8)}</div>
        )}
        {status.error && (
          <div className={isDevelopment() ? "text-muted-foreground" : "text-red-500"}>
            {status.error}
          </div>
        )}
        {!isDevelopment() && !status.success && (
          <div className="text-xs mt-2 text-muted-foreground">
            Build command may need updating
          </div>
        )}
      </div>
    </div>
  );
};