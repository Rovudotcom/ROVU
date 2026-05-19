import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Venue = {
  id: string
  name: string
  slug: string
  logo_url?: string
  google_url?: string
  tripadvisor_url?: string
  facebook_url?: string
  owner_email: string
  active: boolean
  created_at: string
}

export type StaffMember = {
  id: string
  venue_id: string
  name: string
  role: string
  avatar_initials: string
  avatar_color: string
  active: boolean
}

export type Review = {
  id: string
  venue_id: string
  rating: number
  chips: string[]
  staff_mentioned: string[]
  review_text: string
  platform: string
  is_private: boolean
  created_at: string
}
