-- Explicitly deny public (anon) read access on sensitive tables
-- This addresses scanner errors by making denials explicit

-- assessment_sessions: block anon SELECT
DROP POLICY IF EXISTS "Public cannot read assessment sessions" ON public.assessment_sessions;
CREATE POLICY "Public cannot read assessment sessions"
ON public.assessment_sessions
FOR SELECT
TO anon
USING (false);

-- assessment_contacts: block anon SELECT
DROP POLICY IF EXISTS "Public cannot read assessment contacts" ON public.assessment_contacts;
CREATE POLICY "Public cannot read assessment contacts"
ON public.assessment_contacts
FOR SELECT
TO anon
USING (false);

-- chat_sessions: block anon SELECT
DROP POLICY IF EXISTS "Public cannot read chat sessions" ON public.chat_sessions;
CREATE POLICY "Public cannot read chat sessions"
ON public.chat_sessions
FOR SELECT
TO anon
USING (false);

-- Ensure authenticated users have ONLY self access (already present, but keep for clarity)
-- No changes to existing authenticated/admin policies