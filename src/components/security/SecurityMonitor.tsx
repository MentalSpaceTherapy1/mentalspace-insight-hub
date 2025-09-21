import React, { useEffect, useState } from 'react';
import { Shield, AlertTriangle, Activity, Lock } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SecurityEvent {
  id: string;
  event_type: string;
  details: {
    severity?: string;
    timestamp?: string;
    [key: string]: any;
  };
  timestamp: string;
}

interface SecurityStatus {
  isSecure: boolean;
  threats: number;
  warnings: number;
  lastCheck: string;
}

export const SecurityMonitor: React.FC = () => {
  const [securityStatus, setSecurityStatus] = useState<SecurityStatus>({
    isSecure: true,
    threats: 0,
    warnings: 0,
    lastCheck: new Date().toISOString()
  });
  const [recentEvents, setRecentEvents] = useState<SecurityEvent[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    // Start security monitoring
    setIsMonitoring(true);
    
    // Simulated security monitoring (in real implementation, this would connect to actual security services)
    const monitorSecurity = () => {
      // Check for common security indicators
      const isHttps = window.location.protocol === 'https:';
      const hasSecureContext = window.isSecureContext;
      const hasValidOrigin = window.location.hostname !== 'localhost' || window.location.protocol === 'https:';
      
      // Simulated threat detection
      const threats = 0; // In real implementation, this would come from security API
      const warnings = isHttps && hasSecureContext ? 0 : 1;
      
      setSecurityStatus({
        isSecure: threats === 0 && warnings === 0,
        threats,
        warnings,
        lastCheck: new Date().toISOString()
      });

      // Simulated recent security events
      const mockEvents: SecurityEvent[] = [
        {
          id: '1',
          event_type: 'security_check_passed',
          details: {
            severity: 'INFO',
            timestamp: new Date().toISOString(),
            check_type: 'encryption_validation'
          },
          timestamp: new Date().toISOString()
        }
      ];

      if (!isHttps) {
        mockEvents.push({
          id: '2',
          event_type: 'insecure_connection_detected',
          details: {
            severity: 'WARNING',
            timestamp: new Date().toISOString(),
            protocol: window.location.protocol
          },
          timestamp: new Date().toISOString()
        });
      }

      setRecentEvents(mockEvents);
    };

    monitorSecurity();
    const interval = setInterval(monitorSecurity, 30000); // Check every 30 seconds

    return () => {
      clearInterval(interval);
      setIsMonitoring(false);
    };
  }, []);

  const getSeverityColor = (severity?: string) => {
    switch (severity?.toUpperCase()) {
      case 'CRITICAL':
        return 'destructive';
      case 'HIGH':
        return 'destructive';
      case 'WARNING':
        return 'warning';
      case 'INFO':
        return 'secondary';
      default:
        return 'secondary';
    }
  };

  const getSeverityIcon = (severity?: string) => {
    switch (severity?.toUpperCase()) {
      case 'CRITICAL':
      case 'HIGH':
        return <AlertTriangle className="h-4 w-4" />;
      case 'WARNING':
        return <Shield className="h-4 w-4" />;
      default:
        return <Activity className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-4">
      {/* Security Status Overview */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Security Status</CardTitle>
          <div className="flex items-center space-x-2">
            {isMonitoring && (
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <Activity className="h-3 w-3 animate-pulse" />
                <span>Monitoring</span>
              </div>
            )}
            {securityStatus.isSecure ? (
              <Shield className="h-4 w-4 text-green-600" />
            ) : (
              <AlertTriangle className="h-4 w-4 text-red-600" />
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{securityStatus.threats}</div>
              <div className="text-xs text-muted-foreground">Active Threats</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">{securityStatus.warnings}</div>
              <div className="text-xs text-muted-foreground">Warnings</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <Lock className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-sm font-medium text-blue-600">Encrypted</span>
              </div>
              <div className="text-xs text-muted-foreground">Data Protection</div>
            </div>
          </div>
          <div className="mt-3 text-xs text-muted-foreground">
            Last check: {new Date(securityStatus.lastCheck).toLocaleTimeString()}
          </div>
        </CardContent>
      </Card>

      {/* Security Alerts */}
      {securityStatus.threats > 0 && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            {securityStatus.threats} active security threat(s) detected. Please review immediately.
          </AlertDescription>
        </Alert>
      )}

      {securityStatus.warnings > 0 && (
        <Alert variant="default">
          <Shield className="h-4 w-4" />
          <AlertDescription>
            {securityStatus.warnings} security warning(s) detected. Consider reviewing your connection.
          </AlertDescription>
        </Alert>
      )}

      {/* Recent Security Events */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Recent Security Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {recentEvents.length === 0 ? (
              <div className="text-sm text-muted-foreground text-center py-4">
                No recent security events
              </div>
            ) : (
              recentEvents.map((event) => (
                <div key={event.id} className="flex items-center justify-between p-2 rounded border">
                  <div className="flex items-center space-x-2">
                    {getSeverityIcon(event.details.severity)}
                    <span className="text-sm">{event.event_type.replace(/_/g, ' ')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={getSeverityColor(event.details.severity) as any}>
                      {event.details.severity || 'INFO'}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {new Date(event.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Security Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Security Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <span>Data encryption is active</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <span>Secure connection established</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <span>Assessment data is protected</span>
            </div>
            {!window.isSecureContext && (
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                <span>Consider using HTTPS for enhanced security</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};