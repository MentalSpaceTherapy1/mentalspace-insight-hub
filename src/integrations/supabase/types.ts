export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      admin_profiles: {
        Row: {
          created_at: string
          email: string
          full_name: string
          id: string
          is_active: boolean
          role: Database["public"]["Enums"]["admin_role"]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email: string
          full_name: string
          id?: string
          is_active?: boolean
          role?: Database["public"]["Enums"]["admin_role"]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          is_active?: boolean
          role?: Database["public"]["Enums"]["admin_role"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      analytics_events: {
        Row: {
          created_at: string
          event_data: Json | null
          event_type: string
          id: string
          ip_address: unknown
          page_url: string | null
          referrer: string | null
          session_id: string | null
          user_agent: string | null
        }
        Insert: {
          created_at?: string
          event_data?: Json | null
          event_type: string
          id?: string
          ip_address?: unknown
          page_url?: string | null
          referrer?: string | null
          session_id?: string | null
          user_agent?: string | null
        }
        Update: {
          created_at?: string
          event_data?: Json | null
          event_type?: string
          id?: string
          ip_address?: unknown
          page_url?: string | null
          referrer?: string | null
          session_id?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      assessment_contacts: {
        Row: {
          assessment_session_id: string | null
          contact_data: Json
          created_at: string
          id: string
          is_processed: boolean
          notes: string | null
          processed_at: string | null
          processed_by: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          assessment_session_id?: string | null
          contact_data: Json
          created_at?: string
          id?: string
          is_processed?: boolean
          notes?: string | null
          processed_at?: string | null
          processed_by?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          assessment_session_id?: string | null
          contact_data?: Json
          created_at?: string
          id?: string
          is_processed?: boolean
          notes?: string | null
          processed_at?: string | null
          processed_by?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "assessment_contacts_assessment_session_id_fkey"
            columns: ["assessment_session_id"]
            isOneToOne: false
            referencedRelation: "assessment_sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assessment_contacts_processed_by_fkey"
            columns: ["processed_by"]
            isOneToOne: false
            referencedRelation: "admin_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      assessment_sessions: {
        Row: {
          additional_info: Json | null
          answers: Json
          assessment_type: Database["public"]["Enums"]["assessment_type"]
          completed_at: string
          created_at: string
          data_hash: string | null
          encrypted_additional_info: string | null
          encrypted_answers: string | null
          encryption_iv: string | null
          id: string
          ip_address: unknown
          is_encrypted: boolean | null
          recommendations: string[] | null
          score: number | null
          session_id: string
          severity: string | null
          user_id: string | null
        }
        Insert: {
          additional_info?: Json | null
          answers: Json
          assessment_type: Database["public"]["Enums"]["assessment_type"]
          completed_at?: string
          created_at?: string
          data_hash?: string | null
          encrypted_additional_info?: string | null
          encrypted_answers?: string | null
          encryption_iv?: string | null
          id?: string
          ip_address?: unknown
          is_encrypted?: boolean | null
          recommendations?: string[] | null
          score?: number | null
          session_id: string
          severity?: string | null
          user_id?: string | null
        }
        Update: {
          additional_info?: Json | null
          answers?: Json
          assessment_type?: Database["public"]["Enums"]["assessment_type"]
          completed_at?: string
          created_at?: string
          data_hash?: string | null
          encrypted_additional_info?: string | null
          encrypted_answers?: string | null
          encryption_iv?: string | null
          id?: string
          ip_address?: unknown
          is_encrypted?: boolean | null
          recommendations?: string[] | null
          score?: number | null
          session_id?: string
          severity?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          ai_generated: boolean | null
          author: string | null
          author_id: string
          category: string | null
          content: string
          created_at: string
          excerpt: string | null
          featured_image_url: string | null
          generation_error: string | null
          generation_prompt: string | null
          id: string
          meta_description: string | null
          meta_title: string | null
          published_at: string | null
          scheduled_for: string | null
          slug: string
          status: Database["public"]["Enums"]["content_status"]
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          ai_generated?: boolean | null
          author?: string | null
          author_id: string
          category?: string | null
          content: string
          created_at?: string
          excerpt?: string | null
          featured_image_url?: string | null
          generation_error?: string | null
          generation_prompt?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          scheduled_for?: string | null
          slug: string
          status?: Database["public"]["Enums"]["content_status"]
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          ai_generated?: boolean | null
          author?: string | null
          author_id?: string
          category?: string | null
          content?: string
          created_at?: string
          excerpt?: string | null
          featured_image_url?: string | null
          generation_error?: string | null
          generation_prompt?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          scheduled_for?: string | null
          slug?: string
          status?: Database["public"]["Enums"]["content_status"]
          tags?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "admin_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_safety_logs: {
        Row: {
          action_taken: string | null
          created_at: string
          id: string
          message_content: string | null
          session_id: string | null
          trigger_type: string
        }
        Insert: {
          action_taken?: string | null
          created_at?: string
          id?: string
          message_content?: string | null
          session_id?: string | null
          trigger_type: string
        }
        Update: {
          action_taken?: string | null
          created_at?: string
          id?: string
          message_content?: string | null
          session_id?: string | null
          trigger_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_safety_logs_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "chat_sessions"
            referencedColumns: ["session_id"]
          },
        ]
      }
      chat_sessions: {
        Row: {
          created_at: string
          id: string
          ip_address: unknown
          last_activity: string
          messages: Json[] | null
          session_id: string
          user_context: Json | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          ip_address?: unknown
          last_activity?: string
          messages?: Json[] | null
          session_id: string
          user_context?: Json | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          ip_address?: unknown
          last_activity?: string
          messages?: Json[] | null
          session_id?: string
          user_context?: Json | null
          user_id?: string | null
        }
        Relationships: []
      }
      form_submissions: {
        Row: {
          blocked_reason: string | null
          created_at: string
          form_data: Json
          form_type: Database["public"]["Enums"]["form_type"]
          id: string
          ip_address: unknown
          is_blocked: boolean | null
          is_processed: boolean
          notes: string | null
          processed_at: string | null
          processed_by: string | null
          spam_score: number | null
          submission_date: string
          updated_at: string
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          blocked_reason?: string | null
          created_at?: string
          form_data: Json
          form_type: Database["public"]["Enums"]["form_type"]
          id?: string
          ip_address?: unknown
          is_blocked?: boolean | null
          is_processed?: boolean
          notes?: string | null
          processed_at?: string | null
          processed_by?: string | null
          spam_score?: number | null
          submission_date?: string
          updated_at?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          blocked_reason?: string | null
          created_at?: string
          form_data?: Json
          form_type?: Database["public"]["Enums"]["form_type"]
          id?: string
          ip_address?: unknown
          is_blocked?: boolean | null
          is_processed?: boolean
          notes?: string | null
          processed_at?: string | null
          processed_by?: string | null
          spam_score?: number | null
          submission_date?: string
          updated_at?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "form_submissions_processed_by_fkey"
            columns: ["processed_by"]
            isOneToOne: false
            referencedRelation: "admin_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      ip_blacklist: {
        Row: {
          blocked_until: string | null
          created_at: string
          id: string
          ip_address: string
          is_active: boolean
          reason: string
          updated_at: string
        }
        Insert: {
          blocked_until?: string | null
          created_at?: string
          id?: string
          ip_address: string
          is_active?: boolean
          reason: string
          updated_at?: string
        }
        Update: {
          blocked_until?: string | null
          created_at?: string
          id?: string
          ip_address?: string
          is_active?: boolean
          reason?: string
          updated_at?: string
        }
        Relationships: []
      }
      newsletter_analytics: {
        Row: {
          average_engagement_time: number | null
          created_at: string | null
          id: string
          newsletter_id: string
          total_engagement_time: number | null
          unique_views: number | null
          updated_at: string | null
          views: number | null
        }
        Insert: {
          average_engagement_time?: number | null
          created_at?: string | null
          id?: string
          newsletter_id: string
          total_engagement_time?: number | null
          unique_views?: number | null
          updated_at?: string | null
          views?: number | null
        }
        Update: {
          average_engagement_time?: number | null
          created_at?: string | null
          id?: string
          newsletter_id?: string
          total_engagement_time?: number | null
          unique_views?: number | null
          updated_at?: string | null
          views?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "newsletter_analytics_newsletter_id_fkey"
            columns: ["newsletter_id"]
            isOneToOne: false
            referencedRelation: "newsletters"
            referencedColumns: ["id"]
          },
        ]
      }
      newsletter_email_logs: {
        Row: {
          clicked_at: string | null
          created_at: string | null
          email: string
          error_message: string | null
          id: string
          newsletter_id: string
          opened_at: string | null
          resend_message_id: string | null
          sent_at: string | null
          status: string
          subscriber_id: string | null
          updated_at: string | null
        }
        Insert: {
          clicked_at?: string | null
          created_at?: string | null
          email: string
          error_message?: string | null
          id?: string
          newsletter_id: string
          opened_at?: string | null
          resend_message_id?: string | null
          sent_at?: string | null
          status?: string
          subscriber_id?: string | null
          updated_at?: string | null
        }
        Update: {
          clicked_at?: string | null
          created_at?: string | null
          email?: string
          error_message?: string | null
          id?: string
          newsletter_id?: string
          opened_at?: string | null
          resend_message_id?: string | null
          sent_at?: string | null
          status?: string
          subscriber_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "newsletter_email_logs_newsletter_id_fkey"
            columns: ["newsletter_id"]
            isOneToOne: false
            referencedRelation: "newsletters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "newsletter_email_logs_subscriber_id_fkey"
            columns: ["subscriber_id"]
            isOneToOne: false
            referencedRelation: "newsletter_subscribers"
            referencedColumns: ["id"]
          },
        ]
      }
      newsletter_subscribers: {
        Row: {
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          is_active: boolean | null
          subscribed_at: string | null
          unsubscribed_at: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          full_name?: string | null
          id?: string
          is_active?: boolean | null
          subscribed_at?: string | null
          unsubscribed_at?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          is_active?: boolean | null
          subscribed_at?: string | null
          unsubscribed_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      newsletter_view_events: {
        Row: {
          created_at: string | null
          engagement_time: number | null
          id: string
          ip_address: unknown
          newsletter_id: string
          session_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          engagement_time?: number | null
          id?: string
          ip_address?: unknown
          newsletter_id: string
          session_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          engagement_time?: number | null
          id?: string
          ip_address?: unknown
          newsletter_id?: string
          session_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "newsletter_view_events_newsletter_id_fkey"
            columns: ["newsletter_id"]
            isOneToOne: false
            referencedRelation: "newsletters"
            referencedColumns: ["id"]
          },
        ]
      }
      newsletters: {
        Row: {
          author_id: string
          category: string | null
          content: string
          created_at: string
          excerpt: string | null
          id: string
          is_pinned: boolean | null
          published_at: string | null
          status: Database["public"]["Enums"]["content_status"]
          title: string
          updated_at: string
        }
        Insert: {
          author_id: string
          category?: string | null
          content: string
          created_at?: string
          excerpt?: string | null
          id?: string
          is_pinned?: boolean | null
          published_at?: string | null
          status?: Database["public"]["Enums"]["content_status"]
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string
          category?: string | null
          content?: string
          created_at?: string
          excerpt?: string | null
          id?: string
          is_pinned?: boolean | null
          published_at?: string | null
          status?: Database["public"]["Enums"]["content_status"]
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      resources: {
        Row: {
          author_id: string
          category: string | null
          content: string | null
          created_at: string
          description: string | null
          file_path: string | null
          id: string
          published_at: string | null
          resource_type: string
          resource_url: string | null
          status: Database["public"]["Enums"]["content_status"]
          tags: string[] | null
          title: string
          updated_at: string
          view_count: number
        }
        Insert: {
          author_id: string
          category?: string | null
          content?: string | null
          created_at?: string
          description?: string | null
          file_path?: string | null
          id?: string
          published_at?: string | null
          resource_type: string
          resource_url?: string | null
          status?: Database["public"]["Enums"]["content_status"]
          tags?: string[] | null
          title: string
          updated_at?: string
          view_count?: number
        }
        Update: {
          author_id?: string
          category?: string | null
          content?: string | null
          created_at?: string
          description?: string | null
          file_path?: string | null
          id?: string
          published_at?: string | null
          resource_type?: string
          resource_url?: string | null
          status?: Database["public"]["Enums"]["content_status"]
          tags?: string[] | null
          title?: string
          updated_at?: string
          view_count?: number
        }
        Relationships: [
          {
            foreignKeyName: "resources_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "admin_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      security_audit_log: {
        Row: {
          details: Json | null
          event_type: string
          id: string
          ip_address: unknown
          table_name: string
          timestamp: string | null
          user_id: string | null
        }
        Insert: {
          details?: Json | null
          event_type: string
          id?: string
          ip_address?: unknown
          table_name: string
          timestamp?: string | null
          user_id?: string | null
        }
        Update: {
          details?: Json | null
          event_type?: string
          id?: string
          ip_address?: unknown
          table_name?: string
          timestamp?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      site_content_cache: {
        Row: {
          content: string
          created_at: string
          description: string | null
          full_url: string
          id: string
          last_crawled: string
          title: string
          updated_at: string
          url: string
          word_count: number | null
        }
        Insert: {
          content: string
          created_at?: string
          description?: string | null
          full_url: string
          id?: string
          last_crawled?: string
          title: string
          updated_at?: string
          url: string
          word_count?: number | null
        }
        Update: {
          content?: string
          created_at?: string
          description?: string | null
          full_url?: string
          id?: string
          last_crawled?: string
          title?: string
          updated_at?: string
          url?: string
          word_count?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      check_admin_access: { Args: never; Returns: boolean }
      check_assessment_rate_limit: { Args: never; Returns: boolean }
      create_initial_admin: {
        Args: { admin_email: string; admin_full_name: string }
        Returns: string
      }
      emergency_security_audit: {
        Args: never
        Returns: {
          action_required: string
          audit_item: string
          current_status: string
          risk_level: string
        }[]
      }
      enforce_data_retention: { Args: never; Returns: undefined }
      expire_ip_blacklist: { Args: never; Returns: undefined }
      get_admin_minimal_info: {
        Args: { target_user_id?: string }
        Returns: {
          created_at: string
          id: string
          is_active: boolean
          role: Database["public"]["Enums"]["admin_role"]
          user_id: string
        }[]
      }
      get_admin_profile_secure: {
        Args: { profile_user_id?: string }
        Returns: {
          created_at: string
          full_name: string
          id: string
          is_active: boolean
          role: Database["public"]["Enums"]["admin_role"]
          updated_at: string
          user_id: string
        }[]
      }
      get_admin_profile_ultra_secure: {
        Args: { target_user_id?: string }
        Returns: {
          created_at: string
          full_name: string
          id: string
          is_active: boolean
          role: Database["public"]["Enums"]["admin_role"]
          updated_at: string
          user_id: string
        }[]
      }
      get_all_admin_profiles_secure: {
        Args: never
        Returns: {
          created_at: string
          email: string
          full_name: string
          id: string
          is_active: boolean
          role: Database["public"]["Enums"]["admin_role"]
          updated_at: string
          user_id: string
        }[]
      }
      get_assessment_metadata_admin: {
        Args: { session_limit?: number }
        Returns: {
          assessment_type: Database["public"]["Enums"]["assessment_type"]
          created_at: string
          id: string
          is_encrypted: boolean
          session_id: string
        }[]
      }
      get_contact_status_only: {
        Args: { contact_id: string }
        Returns: {
          id: string
          is_processed: boolean
          processed_at: string
        }[]
      }
      get_form_submission_stats: {
        Args: never
        Returns: {
          form_type: Database["public"]["Enums"]["form_type"]
          last_submission: string
          submission_count: number
        }[]
      }
      get_full_admin_profiles: {
        Args: never
        Returns: {
          created_at: string
          email: string
          full_name: string
          id: string
          is_active: boolean
          role: Database["public"]["Enums"]["admin_role"]
          updated_at: string
          user_id: string
        }[]
      }
      get_popular_newsletter_topics: {
        Args: { limit_count?: number }
        Returns: {
          avg_engagement: number
          topic: string
          view_count: number
        }[]
      }
      get_recent_blocked_attempts: {
        Args: { limit_count?: number }
        Returns: Json
      }
      get_secure_admin_profile: {
        Args: { target_user_id?: string }
        Returns: {
          created_at: string
          full_name: string
          id: string
          is_active: boolean
          role: Database["public"]["Enums"]["admin_role"]
          updated_at: string
          user_id: string
        }[]
      }
      get_security_compliance_status: {
        Args: never
        Returns: {
          component: string
          details: string
          status: string
        }[]
      }
      get_security_dashboard_data: {
        Args: never
        Returns: {
          active_threats: number
          admin_access_attempts: number
          encrypted_assessments: number
          last_security_scan: string
          recent_violations: number
          total_assessments: number
          warnings: number
        }[]
      }
      get_security_status: {
        Args: never
        Returns: {
          active_sessions: number
          critical_alerts: number
          last_security_event: string
          warning_alerts: number
        }[]
      }
      get_spam_statistics: { Args: never; Returns: Json }
      get_submission_patterns: { Args: { hours_back?: number }; Returns: Json }
      is_admin: { Args: never; Returns: boolean }
      is_admin_user: { Args: never; Returns: boolean }
      is_verified_admin: { Args: never; Returns: boolean }
      log_chat_access: { Args: { session_id: string }; Returns: undefined }
      migrate_unencrypted_assessments: { Args: never; Returns: undefined }
      promote_user_to_admin: {
        Args: { full_name?: string; user_email: string }
        Returns: string
      }
      run_security_audit: {
        Args: never
        Returns: {
          audit_item: string
          description: string
          recommendation: string
          severity: string
          status: string
        }[]
      }
      secure_data_cleanup: { Args: never; Returns: undefined }
      setup_first_admin: {
        Args: {
          admin_email: string
          admin_full_name: string
          admin_password: string
        }
        Returns: string
      }
      validate_admin_access_with_limits: {
        Args: { operation_type: string }
        Returns: boolean
      }
      validate_admin_operation: {
        Args: { operation_type: string }
        Returns: boolean
      }
      validate_secure_admin_access: {
        Args: { operation_type: string }
        Returns: boolean
      }
    }
    Enums: {
      admin_role: "super_admin" | "admin" | "content_manager"
      assessment_type:
        | "anxiety"
        | "depression"
        | "adhd"
        | "bipolar"
        | "bdd"
        | "alcohol"
        | "binge_eating"
        | "anger"
        | "eating_concerns"
        | "grief"
        | "health_anxiety"
        | "insomnia"
        | "mood_tracker"
        | "nicotine"
        | "ocd"
        | "ptsd"
        | "panic"
        | "perinatal_mood"
        | "social_anxiety"
        | "somatic_symptom"
        | "specific_phobia"
        | "stress_burnout"
        | "substance_use"
        | "wellbeing_check"
      content_status: "draft" | "published" | "archived"
      form_type:
        | "therapist_matching"
        | "contact_us"
        | "career_application"
        | "assessment_contact"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      admin_role: ["super_admin", "admin", "content_manager"],
      assessment_type: [
        "anxiety",
        "depression",
        "adhd",
        "bipolar",
        "bdd",
        "alcohol",
        "binge_eating",
        "anger",
        "eating_concerns",
        "grief",
        "health_anxiety",
        "insomnia",
        "mood_tracker",
        "nicotine",
        "ocd",
        "ptsd",
        "panic",
        "perinatal_mood",
        "social_anxiety",
        "somatic_symptom",
        "specific_phobia",
        "stress_burnout",
        "substance_use",
        "wellbeing_check",
      ],
      content_status: ["draft", "published", "archived"],
      form_type: [
        "therapist_matching",
        "contact_us",
        "career_application",
        "assessment_contact",
      ],
    },
  },
} as const
