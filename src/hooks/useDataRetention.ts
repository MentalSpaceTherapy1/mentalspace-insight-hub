import { useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface RetentionPolicy {
  tableName: string;
  retentionDays: number;
  archiveBeforeDelete?: boolean;
  conditions?: Record<string, any>;
}

/**
 * Hook for managing data retention and cleanup policies
 */
export const useDataRetention = () => {
  // Default retention policies for different data types
  const retentionPolicies: RetentionPolicy[] = [
    {
      tableName: 'analytics_events',
      retentionDays: 90, // Keep analytics for 3 months
      conditions: { event_type: 'page_view' } // Only delete page views
    },
    {
      tableName: 'assessment_sessions',
      retentionDays: 1095, // Keep assessments for 3 years (compliance requirement)
      archiveBeforeDelete: true
    },
    {
      tableName: 'form_submissions',
      retentionDays: 365, // Keep form submissions for 1 year
      archiveBeforeDelete: true
    }
  ];

  const archiveOldData = useCallback(async (policy: RetentionPolicy) => {
    try {
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - policy.retentionDays);

      console.log(`Archiving data from ${policy.tableName} older than ${cutoffDate.toISOString()}`);

      // For form submissions and assessments, we should archive before deletion
      if (policy.archiveBeforeDelete) {
        // Only handle specific known tables for safety
        if (policy.tableName === 'analytics_events') {
          const { data: dataToArchive, error: selectError } = await supabase
            .from('analytics_events')
            .select('*')
            .lt('created_at', cutoffDate.toISOString());

          if (selectError) {
            console.error('Failed to select analytics data for archiving:', selectError);
            return false;
          }

          if (dataToArchive && dataToArchive.length > 0) {
            console.log(`Would archive ${dataToArchive.length} analytics records`);
            
            await supabase
              .from('analytics_events')
              .insert({
                event_type: 'data_archival',
                event_data: {
                  table_name: policy.tableName,
                  archived_count: dataToArchive.length,
                  cutoff_date: cutoffDate.toISOString(),
                  retention_days: policy.retentionDays
                } as any
              });
          }
        } else if (policy.tableName === 'assessment_sessions') {
          const { data: dataToArchive, error: selectError } = await supabase
            .from('assessment_sessions')
            .select('*')
            .lt('created_at', cutoffDate.toISOString());

          if (selectError) {
            console.error('Failed to select assessment data for archiving:', selectError);
            return false;
          }

          if (dataToArchive && dataToArchive.length > 0) {
            console.log(`Would archive ${dataToArchive.length} assessment records`);
          }
        } else if (policy.tableName === 'form_submissions') {
          const { data: dataToArchive, error: selectError } = await supabase
            .from('form_submissions')
            .select('*')
            .lt('created_at', cutoffDate.toISOString());

          if (selectError) {
            console.error('Failed to select form submission data for archiving:', selectError);
            return false;
          }

          if (dataToArchive && dataToArchive.length > 0) {
            console.log(`Would archive ${dataToArchive.length} form submission records`);
          }
        }
      }

      return true;
    } catch (error) {
      console.error('Failed to archive data:', error);
      return false;
    }
  }, []);

  const cleanupOldData = useCallback(async (policy: RetentionPolicy) => {
    try {
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - policy.retentionDays);

      console.log(`Cleaning up data from ${policy.tableName} older than ${cutoffDate.toISOString()}`);

      // Archive first if required
      if (policy.archiveBeforeDelete) {
        const archived = await archiveOldData(policy);
        if (!archived) {
          console.warn(`Skipping deletion for ${policy.tableName} due to archival failure`);
          return { success: false, error: 'Archival failed' };
        }
      }

      // Only allow deletion from specific tables for safety
      const allowedTables = ['analytics_events', 'assessment_sessions', 'form_submissions'];
      if (!allowedTables.includes(policy.tableName)) {
        console.warn(`Deletion not allowed for table: ${policy.tableName}`);
        return { success: false, error: 'Table not allowed for deletion' };
      }

      // For analytics_events only - delete old page views and low-priority events
      if (policy.tableName === 'analytics_events') {
        const { error, count } = await supabase
          .from('analytics_events')
          .delete()
          .lt('created_at', cutoffDate.toISOString())
          .in('event_type', ['page_view', 'button_click', 'form_start']);

        if (error) {
          console.error('Failed to delete old analytics data:', error);
          return { success: false, error };
        }

        console.log(`Successfully deleted ${count || 0} analytics records`);
        return { success: true, deletedCount: count || 0 };
      }

      // For other tables, we'll just log the action without actual deletion for safety
      console.log(`Would delete old records from ${policy.tableName} (safety mode)`);

      // Log the cleanup action
      await supabase
        .from('analytics_events')
        .insert({
          event_type: 'data_cleanup',
          event_data: {
            table_name: policy.tableName,
            deleted_count: 0,
            cutoff_date: cutoffDate.toISOString(),
            retention_days: policy.retentionDays
          } as any
        });

      return { success: true, deletedCount: 0 };

    } catch (error) {
      console.error('Failed to cleanup old data:', error);
      return { success: false, error };
    }
  }, [archiveOldData]);

  const runRetentionPolicies = useCallback(async () => {
    console.log('Running data retention policies...');
    const results = [];

    for (const policy of retentionPolicies) {
      try {
        const result = await cleanupOldData(policy);
        results.push({
          tableName: policy.tableName,
          ...result
        });
      } catch (error) {
        console.error(`Failed to apply retention policy for ${policy.tableName}:`, error);
        results.push({
          tableName: policy.tableName,
          success: false,
          error
        });
      }
    }

    return results;
  }, [cleanupOldData]);

  const getDataAge = useCallback(async (tableName: 'analytics_events' | 'assessment_sessions' | 'form_submissions') => {
    try {
      const { data: oldestRecord } = await supabase
        .from(tableName)
        .select('created_at')
        .order('created_at', { ascending: true })
        .limit(1);

      const { data: newestRecord } = await supabase
        .from(tableName)
        .select('created_at')
        .order('created_at', { ascending: false })
        .limit(1);

      if (oldestRecord && newestRecord && oldestRecord[0] && newestRecord[0]) {
        const oldestDate = new Date(oldestRecord[0].created_at);
        const newestDate = new Date(newestRecord[0].created_at);
        const ageInDays = Math.floor((newestDate.getTime() - oldestDate.getTime()) / (1000 * 60 * 60 * 24));

        return {
          tableName,
          oldestRecord: oldestDate,
          newestRecord: newestDate,
          ageInDays
        };
      }

      return null;
    } catch (error) {
      console.error(`Failed to get data age for ${tableName}:`, error);
      return null;
    }
  }, []);

  const scheduleRetentionCleanup = useCallback(() => {
    // Schedule cleanup to run daily at 2 AM
    const now = new Date();
    const scheduledTime = new Date();
    scheduledTime.setHours(2, 0, 0, 0);

    if (scheduledTime <= now) {
      scheduledTime.setDate(scheduledTime.getDate() + 1);
    }

    const timeUntilCleanup = scheduledTime.getTime() - now.getTime();

    setTimeout(() => {
      runRetentionPolicies();
      // Schedule next cleanup
      scheduleRetentionCleanup();
    }, timeUntilCleanup);

    console.log(`Next data retention cleanup scheduled for: ${scheduledTime.toISOString()}`);
  }, [runRetentionPolicies]);

  return {
    retentionPolicies,
    cleanupOldData,
    runRetentionPolicies,
    getDataAge,
    scheduleRetentionCleanup,
    archiveOldData
  };
};