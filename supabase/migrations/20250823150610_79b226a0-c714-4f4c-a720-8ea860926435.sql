-- Update existing migrated assessment sessions to include full contact form data
DO $$
DECLARE
    session_record RECORD;
    form_submission_record RECORD;
BEGIN
    -- Loop through migrated assessment sessions
    FOR session_record IN 
        SELECT 
            id,
            session_id,
            additional_info
        FROM assessment_sessions 
        WHERE session_id LIKE 'migrated_%'
    LOOP
        -- Find the corresponding form submission
        SELECT form_data INTO form_submission_record
        FROM form_submissions 
        WHERE id = (session_record.additional_info->>'migrated_from_form_id')::uuid;
        
        IF FOUND THEN
            -- Update the additional_info to include full form data
            UPDATE assessment_sessions 
            SET additional_info = jsonb_set(
                additional_info,
                '{original_form_data}',
                form_submission_record.form_data
            )
            WHERE id = session_record.id;
        END IF;
    END LOOP;
    
    RAISE NOTICE 'Updated migrated sessions with full contact form data';
END $$;