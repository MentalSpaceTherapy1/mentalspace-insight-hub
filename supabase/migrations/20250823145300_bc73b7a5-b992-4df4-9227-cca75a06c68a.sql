-- Create a function to migrate existing assessment data from form_submissions to assessment_sessions
DO $$
DECLARE
    submission_record RECORD;
    assessment_data JSONB;
    session_id_val TEXT;
    assessment_type_val TEXT;
    score_val INTEGER;
    severity_val TEXT;
BEGIN
    -- Loop through all form submissions with assessment data
    FOR submission_record IN 
        SELECT 
            id,
            form_data,
            created_at,
            ip_address
        FROM form_submissions 
        WHERE form_type = 'assessment_contact' 
        AND form_data->>'assessmentData' IS NOT NULL
    LOOP
        -- Extract assessment data
        assessment_data := submission_record.form_data->'assessmentData';
        
        -- Generate a session ID based on the submission
        session_id_val := 'migrated_' || submission_record.id || '_' || EXTRACT(EPOCH FROM submission_record.created_at)::TEXT;
        
        -- Map assessment types to proper enum values
        assessment_type_val := CASE LOWER(assessment_data->>'type')
            WHEN 'post-traumatic stress (ptsd)' THEN 'ptsd'
            WHEN 'ptsd' THEN 'ptsd'
            WHEN 'anxiety' THEN 'anxiety'
            WHEN 'depression' THEN 'depression'
            WHEN 'adhd' THEN 'adhd'
            WHEN 'adult adhd / executive function' THEN 'adhd'
            WHEN 'ocd' THEN 'ocd'
            WHEN 'obsessive compulsive disorder' THEN 'ocd'
            WHEN 'bipolar' THEN 'bipolar'
            WHEN 'bipolar disorder' THEN 'bipolar'
            WHEN 'panic' THEN 'panic'
            WHEN 'panic disorder' THEN 'panic'
            WHEN 'social anxiety' THEN 'social_anxiety'
            WHEN 'social anxiety disorder' THEN 'social_anxiety'
            WHEN 'specific phobia' THEN 'specific_phobia'
            WHEN 'eating concerns' THEN 'eating_concerns'
            WHEN 'binge eating' THEN 'binge_eating'
            WHEN 'body dysmorphic disorder' THEN 'bdd'
            WHEN 'bdd' THEN 'bdd'
            WHEN 'health anxiety' THEN 'health_anxiety'
            WHEN 'insomnia' THEN 'insomnia'
            WHEN 'substance use' THEN 'substance_use'
            WHEN 'alcohol use' THEN 'alcohol'
            WHEN 'nicotine' THEN 'nicotine'
            WHEN 'grief' THEN 'grief'
            WHEN 'perinatal mood' THEN 'perinatal_mood'
            WHEN 'somatic symptom' THEN 'somatic_symptom'
            WHEN 'stress burnout' THEN 'stress_burnout'
            WHEN 'anger' THEN 'anger'
            WHEN 'wellbeing check' THEN 'wellbeing_check'
            WHEN 'mood tracker' THEN 'mood_tracker'
            ELSE 'anxiety' -- fallback
        END;
        
        -- Extract score and severity
        score_val := (assessment_data->>'score')::INTEGER;
        severity_val := assessment_data->>'severity';
        
        -- Insert into assessment_sessions if not already exists
        INSERT INTO assessment_sessions (
            session_id,
            assessment_type,
            answers,
            score,
            severity,
            recommendations,
            additional_info,
            ip_address,
            completed_at,
            created_at
        ) VALUES (
            session_id_val,
            assessment_type_val::assessment_type,
            COALESCE(assessment_data->'answers', '{}'::jsonb),
            score_val,
            severity_val,
            CASE 
                WHEN assessment_data->'recommendations' IS NOT NULL 
                THEN ARRAY(SELECT jsonb_array_elements_text(assessment_data->'recommendations'))
                ELSE NULL
            END,
            jsonb_build_object(
                'migrated_from_form_id', submission_record.id,
                'original_assessment_data', assessment_data,
                'contact_info', jsonb_build_object(
                    'firstName', submission_record.form_data->>'firstName',
                    'lastName', submission_record.form_data->>'lastName',
                    'email', submission_record.form_data->>'email',
                    'phone', submission_record.form_data->>'phone'
                )
            ),
            submission_record.ip_address,
            submission_record.created_at,
            submission_record.created_at
        )
        ON CONFLICT (session_id) DO NOTHING;
        
        -- Update assessment_contacts to link to the migrated session
        UPDATE assessment_contacts 
        SET assessment_session_id = (
            SELECT id FROM assessment_sessions WHERE session_id = session_id_val
        )
        WHERE contact_data->>'email' = submission_record.form_data->>'email'
        AND created_at >= submission_record.created_at - INTERVAL '5 minutes'
        AND created_at <= submission_record.created_at + INTERVAL '5 minutes'
        AND assessment_session_id IS NULL;
        
    END LOOP;
    
    RAISE NOTICE 'Migration completed successfully';
END $$;