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
          ip_address: unknown | null
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
          ip_address?: unknown | null
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
          ip_address?: unknown | null
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
          ip_address: unknown | null
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
          ip_address?: unknown | null
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
          ip_address?: unknown | null
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
          author_id: string
          content: string
          created_at: string
          excerpt: string | null
          featured_image_url: string | null
          id: string
          meta_description: string | null
          meta_title: string | null
          published_at: string | null
          slug: string
          status: Database["public"]["Enums"]["content_status"]
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          author_id: string
          content: string
          created_at?: string
          excerpt?: string | null
          featured_image_url?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          slug: string
          status?: Database["public"]["Enums"]["content_status"]
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string
          content?: string
          created_at?: string
          excerpt?: string | null
          featured_image_url?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
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
          ip_address: unknown | null
          last_activity: string
          messages: Json[] | null
          session_id: string
          user_context: Json | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          ip_address?: unknown | null
          last_activity?: string
          messages?: Json[] | null
          session_id: string
          user_context?: Json | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          ip_address?: unknown | null
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
          created_at: string
          form_data: Json
          form_type: Database["public"]["Enums"]["form_type"]
          id: string
          ip_address: unknown | null
          is_processed: boolean
          notes: string | null
          processed_at: string | null
          processed_by: string | null
          submission_date: string
          updated_at: string
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          form_data: Json
          form_type: Database["public"]["Enums"]["form_type"]
          id?: string
          ip_address?: unknown | null
          is_processed?: boolean
          notes?: string | null
          processed_at?: string | null
          processed_by?: string | null
          submission_date?: string
          updated_at?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          form_data?: Json
          form_type?: Database["public"]["Enums"]["form_type"]
          id?: string
          ip_address?: unknown | null
          is_processed?: boolean
          notes?: string | null
          processed_at?: string | null
          processed_by?: string | null
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
          ip_address: unknown | null
          table_name: string
          timestamp: string | null
          user_id: string | null
        }
        Insert: {
          details?: Json | null
          event_type: string
          id?: string
          ip_address?: unknown | null
          table_name: string
          timestamp?: string | null
          user_id?: string | null
        }
        Update: {
          details?: Json | null
          event_type?: string
          id?: string
          ip_address?: unknown | null
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
      check_admin_access: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      check_assessment_rate_limit: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      create_initial_admin: {
        Args: { admin_email: string; admin_full_name: string }
        Returns: string
      }
      enforce_data_retention: {
        Args: Record<PropertyKey, never>
        Returns: undefined
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
        Args: Record<PropertyKey, never>
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
      get_full_admin_profiles: {
        Args: Record<PropertyKey, never>
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
      get_security_dashboard_data: {
        Args: Record<PropertyKey, never>
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
        Args: Record<PropertyKey, never>
        Returns: {
          active_sessions: number
          critical_alerts: number
          last_security_event: string
          warning_alerts: number
        }[]
      }
      is_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_admin_user: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_verified_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      migrate_unencrypted_assessments: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      promote_user_to_admin: {
        Args: { full_name?: string; user_email: string }
        Returns: string
      }
      run_security_audit: {
        Args: Record<PropertyKey, never>
        Returns: {
          audit_item: string
          description: string
          recommendation: string
          severity: string
          status: string
        }[]
      }
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
