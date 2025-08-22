-- Create enum for admin roles
CREATE TYPE public.admin_role AS ENUM ('super_admin', 'admin', 'content_manager');

-- Create enum for form types
CREATE TYPE public.form_type AS ENUM ('therapist_matching', 'contact_us', 'career_application', 'assessment_contact');

-- Create enum for assessment types
CREATE TYPE public.assessment_type AS ENUM ('anxiety', 'depression', 'adhd', 'bipolar', 'bdd', 'alcohol', 'binge_eating', 'anger', 'eating_concerns', 'grief', 'health_anxiety', 'insomnia', 'mood_tracker', 'nicotine', 'ocd', 'ptsd', 'panic', 'perinatal_mood', 'social_anxiety', 'somatic_symptom', 'specific_phobia', 'stress_burnout', 'substance_use', 'wellbeing_check');

-- Create enum for content status
CREATE TYPE public.content_status AS ENUM ('draft', 'published', 'archived');

-- Create admin profiles table
CREATE TABLE public.admin_profiles (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    role admin_role NOT NULL DEFAULT 'admin',
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on admin profiles
ALTER TABLE public.admin_profiles ENABLE ROW LEVEL SECURITY;

-- Create form submissions table
CREATE TABLE public.form_submissions (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    form_type form_type NOT NULL,
    form_data JSONB NOT NULL,
    submission_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    ip_address INET,
    user_agent TEXT,
    is_processed BOOLEAN NOT NULL DEFAULT false,
    processed_at TIMESTAMP WITH TIME ZONE,
    processed_by UUID REFERENCES public.admin_profiles(id),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on form submissions
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Create assessment sessions table
CREATE TABLE public.assessment_sessions (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id TEXT NOT NULL UNIQUE,
    assessment_type assessment_type NOT NULL,
    answers JSONB NOT NULL,
    score INTEGER,
    severity TEXT,
    recommendations TEXT[],
    additional_info JSONB,
    completed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    ip_address INET,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on assessment sessions
ALTER TABLE public.assessment_sessions ENABLE ROW LEVEL SECURITY;

-- Create assessment contacts table
CREATE TABLE public.assessment_contacts (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    assessment_session_id UUID REFERENCES public.assessment_sessions(id),
    contact_data JSONB NOT NULL,
    is_processed BOOLEAN NOT NULL DEFAULT false,
    processed_at TIMESTAMP WITH TIME ZONE,
    processed_by UUID REFERENCES public.admin_profiles(id),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on assessment contacts
ALTER TABLE public.assessment_contacts ENABLE ROW LEVEL SECURITY;

-- Create blog posts table
CREATE TABLE public.blog_posts (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT,
    content TEXT NOT NULL,
    featured_image_url TEXT,
    author_id UUID REFERENCES public.admin_profiles(id) NOT NULL,
    status content_status NOT NULL DEFAULT 'draft',
    tags TEXT[],
    meta_title TEXT,
    meta_description TEXT,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on blog posts
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create resources table
CREATE TABLE public.resources (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    content TEXT,
    resource_type TEXT NOT NULL, -- 'article', 'video', 'pdf', 'link'
    resource_url TEXT,
    file_path TEXT,
    category TEXT,
    tags TEXT[],
    author_id UUID REFERENCES public.admin_profiles(id) NOT NULL,
    status content_status NOT NULL DEFAULT 'draft',
    view_count INTEGER NOT NULL DEFAULT 0,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on resources
ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;

-- Create analytics events table
CREATE TABLE public.analytics_events (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    event_type TEXT NOT NULL,
    event_data JSONB,
    session_id TEXT,
    ip_address INET,
    user_agent TEXT,
    page_url TEXT,
    referrer TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on analytics events
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;

-- Create function to update updated_at column
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_admin_profiles_updated_at
    BEFORE UPDATE ON public.admin_profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_form_submissions_updated_at
    BEFORE UPDATE ON public.form_submissions
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_assessment_contacts_updated_at
    BEFORE UPDATE ON public.assessment_contacts
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
    BEFORE UPDATE ON public.blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_resources_updated_at
    BEFORE UPDATE ON public.resources
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Create security definer function to check admin role
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.admin_profiles 
        WHERE user_id = auth.uid() 
        AND is_active = true
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- Create RLS policies for admin_profiles
CREATE POLICY "Admins can view all admin profiles"
    ON public.admin_profiles
    FOR SELECT
    USING (public.is_admin());

CREATE POLICY "Super admins can manage admin profiles"
    ON public.admin_profiles
    FOR ALL
    USING (
        EXISTS (
            SELECT 1 FROM public.admin_profiles 
            WHERE user_id = auth.uid() 
            AND role = 'super_admin' 
            AND is_active = true
        )
    );

-- Create RLS policies for form_submissions
CREATE POLICY "Admins can view all form submissions"
    ON public.form_submissions
    FOR SELECT
    USING (public.is_admin());

CREATE POLICY "Admins can update form submissions"
    ON public.form_submissions
    FOR UPDATE
    USING (public.is_admin());

CREATE POLICY "Anyone can insert form submissions"
    ON public.form_submissions
    FOR INSERT
    WITH CHECK (true);

-- Create RLS policies for assessment_sessions
CREATE POLICY "Anyone can insert assessment sessions"
    ON public.assessment_sessions
    FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Admins can view all assessment sessions"
    ON public.assessment_sessions
    FOR SELECT
    USING (public.is_admin());

-- Create RLS policies for assessment_contacts
CREATE POLICY "Anyone can insert assessment contacts"
    ON public.assessment_contacts
    FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Admins can view all assessment contacts"
    ON public.assessment_contacts
    FOR SELECT
    USING (public.is_admin());

CREATE POLICY "Admins can update assessment contacts"
    ON public.assessment_contacts
    FOR UPDATE
    USING (public.is_admin());

-- Create RLS policies for blog_posts
CREATE POLICY "Published blog posts are viewable by everyone"
    ON public.blog_posts
    FOR SELECT
    USING (status = 'published' OR public.is_admin());

CREATE POLICY "Admins can manage blog posts"
    ON public.blog_posts
    FOR ALL
    USING (public.is_admin());

-- Create RLS policies for resources
CREATE POLICY "Published resources are viewable by everyone"
    ON public.resources
    FOR SELECT
    USING (status = 'published' OR public.is_admin());

CREATE POLICY "Admins can manage resources"
    ON public.resources
    FOR ALL
    USING (public.is_admin());

-- Create RLS policies for analytics_events
CREATE POLICY "Anyone can insert analytics events"
    ON public.analytics_events
    FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Admins can view all analytics events"
    ON public.analytics_events
    FOR SELECT
    USING (public.is_admin());

-- Create indexes for better performance
CREATE INDEX idx_form_submissions_type_date ON public.form_submissions(form_type, submission_date DESC);
CREATE INDEX idx_assessment_sessions_type_date ON public.assessment_sessions(assessment_type, completed_at DESC);
CREATE INDEX idx_blog_posts_status_published ON public.blog_posts(status, published_at DESC);
CREATE INDEX idx_resources_status_published ON public.resources(status, published_at DESC);
CREATE INDEX idx_analytics_events_type_date ON public.analytics_events(event_type, created_at DESC);
CREATE INDEX idx_assessment_sessions_session_id ON public.assessment_sessions(session_id);