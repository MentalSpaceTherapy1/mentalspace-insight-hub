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
          setStatus({ success: false, error: 'Build status not available' });
        }
      } catch (error) {
        setStatus({ success: false, error: 'Failed to fetch build status' });
      } finally {
        setLoading(false);
      }
    };

    checkBuildStatus();
  }, []);

  if (loading) return <div className="text-sm text-muted-foreground">Checking build status...</div>;

  if (!status) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-background border rounded-lg p-3 shadow-lg text-xs max-w-xs">
      <div className="font-semibold mb-1">
        {status.success ? '✅ SSR Build Active' : '❌ SSR Build Failed'}
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
          <div className="text-red-500">Error: {status.error}</div>
        )}
      </div>
    </div>
  );
};