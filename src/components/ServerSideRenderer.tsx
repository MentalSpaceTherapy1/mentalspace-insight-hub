import { useEffect, useState } from 'react';

interface SSRProps {
  children: React.ReactNode;
}

// Progressive hydration component
const ServerSideRenderer = ({ children }: SSRProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Progressive hydration - delay non-critical JS
    const timer = setTimeout(() => {
      setIsHydrated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Add loading skeleton while hydrating
  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        {/* Critical above-the-fold skeleton */}
        <div className="animate-pulse">
          {/* Header skeleton */}
          <div className="h-20 bg-card border-b">
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
              <div className="h-8 bg-muted rounded w-32"></div>
              <div className="flex space-x-4">
                <div className="h-8 bg-muted rounded w-20"></div>
                <div className="h-8 bg-muted rounded w-20"></div>
                <div className="h-10 bg-primary rounded w-24"></div>
              </div>
            </div>
          </div>
          
          {/* Hero skeleton */}
          <div className="py-20 px-4">
            <div className="container mx-auto text-center">
              <div className="h-12 bg-muted rounded w-3/4 mx-auto mb-6"></div>
              <div className="h-6 bg-muted rounded w-2/3 mx-auto mb-8"></div>
              <div className="h-12 bg-primary rounded w-48 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ServerSideRenderer;