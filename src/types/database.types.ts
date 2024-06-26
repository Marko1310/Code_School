export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      difficulties: {
        Row: {
          created_at: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      lecturer_themes: {
        Row: {
          lecturers_id: number
          themes_id: number
        }
        Insert: {
          lecturers_id: number
          themes_id: number
        }
        Update: {
          lecturers_id?: number
          themes_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "lecturer_themes_lecturers_id_fkey"
            columns: ["lecturers_id"]
            isOneToOne: false
            referencedRelation: "lecturers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lecturer_themes_themes_id_fkey"
            columns: ["themes_id"]
            isOneToOne: false
            referencedRelation: "themes"
            referencedColumns: ["id"]
          },
        ]
      }
      lecturers: {
        Row: {
          bio: string
          created_at: string
          id: number
          name: string
          organization_id: number | null
          profile_url: string | null
        }
        Insert: {
          bio: string
          created_at?: string
          id?: number
          name: string
          organization_id?: number | null
          profile_url?: string | null
        }
        Update: {
          bio?: string
          created_at?: string
          id?: number
          name?: string
          organization_id?: number | null
          profile_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lecturers_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      organizations: {
        Row: {
          address: string
          created_at: string
          id: number
          name: string
        }
        Insert: {
          address: string
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          address?: string
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      themes: {
        Row: {
          created_at: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      workshop_lecturers: {
        Row: {
          lecturers_id: number
          workshops_id: number
        }
        Insert: {
          lecturers_id: number
          workshops_id: number
        }
        Update: {
          lecturers_id?: number
          workshops_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "workshop_lecturers_lecturers_id_fkey"
            columns: ["lecturers_id"]
            isOneToOne: false
            referencedRelation: "lecturers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workshop_lecturers_workshops_id_fkey"
            columns: ["workshops_id"]
            isOneToOne: false
            referencedRelation: "workshops"
            referencedColumns: ["id"]
          },
        ]
      }
      workshop_registration: {
        Row: {
          email: string
          name: string
          workshop_id: number
        }
        Insert: {
          email: string
          name: string
          workshop_id: number
        }
        Update: {
          email?: string
          name?: string
          workshop_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "workshop_registration_workshop_id_fkey"
            columns: ["workshop_id"]
            isOneToOne: false
            referencedRelation: "workshops"
            referencedColumns: ["id"]
          },
        ]
      }
      workshop_themes: {
        Row: {
          themes_id: number
          workshops_id: number
        }
        Insert: {
          themes_id: number
          workshops_id: number
        }
        Update: {
          themes_id?: number
          workshops_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "workshop_themes_themes_id_fkey"
            columns: ["themes_id"]
            isOneToOne: false
            referencedRelation: "themes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workshop_themes_workshops_id_fkey"
            columns: ["workshops_id"]
            isOneToOne: false
            referencedRelation: "workshops"
            referencedColumns: ["id"]
          },
        ]
      }
      workshops: {
        Row: {
          attendees: number
          created_at: string
          description: string
          difficulty_id: number | null
          id: number
          name: string
        }
        Insert: {
          attendees?: number
          created_at?: string
          description: string
          difficulty_id?: number | null
          id?: number
          name: string
        }
        Update: {
          attendees?: number
          created_at?: string
          description?: string
          difficulty_id?: number | null
          id?: number
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_workshops_difficulty_id_fkey"
            columns: ["difficulty_id"]
            isOneToOne: false
            referencedRelation: "difficulties"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      add_lecturer: {
        Args: {
          lecturer_name: string
          lecturer_bio: string
          lecturer_organization_id: number
          theme_ids: string[]
        }
        Returns: undefined
      }
      add_organization: {
        Args: {
          organization_name: string
          organization_address: string
        }
        Returns: undefined
      }
      add_user_to_workshop: {
        Args: {
          workshop_id: number
          email: string
          name: string
        }
        Returns: undefined
      }
      add_workshop: {
        Args: {
          workshop_description: string
          workshop_name: string
          workshop_difficulty_id: number
          theme_ids: string[]
          lecturer_ids: string[]
        }
        Returns: undefined
      }
      update_lecturer: {
        Args: {
          lecturer_id: number
          lecturer_name: string
          lecturer_bio: string
          lecturer_organization_id: number
          theme_ids: string[]
        }
        Returns: undefined
      }
      update_organization: {
        Args: {
          organization_id: number
          organization_name: string
          organization_address: string
        }
        Returns: undefined
      }
      update_workshop: {
        Args: {
          workshop_id: number
          workshop_description: string
          workshop_name: string
          workshop_difficulty_id: number
          theme_ids: string[]
          lecturer_ids: string[]
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
