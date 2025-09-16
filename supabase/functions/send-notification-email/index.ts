import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface EmailRequest {
  type: 'contact_us' | 'therapist_matching' | 'assessment_contact';
  data: Record<string, any>;
  submissionId: string;
  internalKey?: string; // Internal validation key
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    if (!resendApiKey) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    const resend = new Resend(resendApiKey);
    const { type, data, submissionId, internalKey }: EmailRequest = await req.json();
    
    // Security: Validate that this is an internal call
    const expectedKey = Deno.env.get('INTERNAL_EMAIL_KEY') || 'mental-space-internal-2024';
    if (internalKey !== expectedKey) {
      console.log('Invalid internal key for email notification');
      throw new Error('Unauthorized email notification request');
    }
    
    // Validate input data
    if (!type || !data || !submissionId) {
      throw new Error('Missing required email data');
    }

    console.log(`Sending ${type} notification email for submission:`, submissionId);

    let emailTemplate, subject, recipient;

    switch (type) {
      case 'contact_us':
        subject = 'New Contact Form Submission - MentalSpace Therapy';
        recipient = 'admin@mentalspacetherapy.com'; // Update with actual admin email
        emailTemplate = `
          <h2>New Contact Form Submission</h2>
          <p><strong>Submission ID:</strong> ${submissionId}</p>
          <p><strong>Name:</strong> ${data.name || 'Not provided'}</p>
          <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
          <p><strong>Email:</strong> ${data.email || 'Not provided'}</p>
          <p><strong>Preferred Contact Time:</strong> ${data.preferredTime || 'Not specified'}</p>
          <p><strong>Comments:</strong></p>
          <p>${data.comments || 'No comments provided'}</p>
          <p><strong>SMS Consent:</strong> ${data.smsConsent ? 'Yes' : 'No'}</p>
          <hr>
          <p><em>Submitted via MentalSpace Therapy website</em></p>
        `;
        break;

      case 'therapist_matching':
        subject = 'New Therapist Matching Request - MentalSpace Therapy';
        recipient = 'admin@mentalspacetherapy.com'; // Update with actual admin email
        emailTemplate = `
          <h2>New Therapist Matching Request</h2>
          <p><strong>Submission ID:</strong> ${submissionId}</p>
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
          <p><strong>Age:</strong> ${data.age || 'Not provided'}</p>
          <p><strong>Gender:</strong> ${data.gender || 'Not provided'}</p>
          <p><strong>State:</strong> ${data.state || 'Not provided'}</p>
          <p><strong>Insurance:</strong> ${data.insurance || 'Not provided'}</p>
          <p><strong>Therapy Type:</strong> ${data.therapyType || 'Not specified'}</p>
          <p><strong>Previous Therapy:</strong> ${data.previousTherapy ? 'Yes' : 'No'}</p>
          <p><strong>Specific Concerns:</strong></p>
          <p>${data.specificConcerns || 'No specific concerns mentioned'}</p>
          <p><strong>Goals:</strong></p>
          <p>${data.goals || 'No goals specified'}</p>
          <p><strong>Preferred Timeline:</strong> ${data.timeline || 'Not specified'}</p>
          <hr>
          <p><em>Submitted via MentalSpace Therapy website</em></p>
        `;
        break;

      case 'assessment_contact':
        subject = 'New Assessment Contact Request - MentalSpace Therapy';
        recipient = 'admin@mentalspacetherapy.com'; // Update with actual admin email
        emailTemplate = `
          <h2>New Assessment Contact Request</h2>
          <p><strong>Submission ID:</strong> ${submissionId}</p>
          <p><strong>Name:</strong> ${data.name || 'Not provided'}</p>
          <p><strong>Email:</strong> ${data.email || 'Not provided'}</p>
          <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
          <p><strong>Date of Birth:</strong> ${data.dateOfBirth || 'Not provided'}</p>
          <p><strong>Gender:</strong> ${data.gender || 'Not provided'}</p>
          <p><strong>State:</strong> ${data.state || 'Not provided'}</p>
          <p><strong>Insurance:</strong> ${data.insurance || 'Not provided'}</p>
          <p><strong>Desired Timeline:</strong> ${data.desiredTimeline || 'Not specified'}</p>
          <p><strong>Assessment Results:</strong> Available in admin dashboard</p>
          <hr>
          <p><em>Submitted following mental health assessment</em></p>
        `;
        break;

      default:
        throw new Error(`Unsupported email type: ${type}`);
    }

    // Send admin notification
    const adminEmailResponse = await resend.emails.send({
      from: 'MentalSpace Therapy <noreply@mentalspacetherapy.com>',
      to: [recipient],
      subject: subject,
      html: emailTemplate,
    });

    // Send confirmation email to user if email is provided
    let userEmailResponse;
    if (data.email) {
      const confirmationSubject = 'Thank you for contacting MentalSpace Therapy';
      const confirmationTemplate = `
        <h2>Thank you for reaching out!</h2>
        <p>Dear ${data.name || data.firstName || 'Friend'},</p>
        <p>We have received your ${type.replace('_', ' ')} submission and will get back to you as soon as possible.</p>
        <p>Our team typically responds within 24 hours during business days.</p>
        <p>If you have any urgent concerns, please don't hesitate to call us directly.</p>
        <p>Thank you for choosing MentalSpace Therapy!</p>
        <p>Best regards,<br>The MentalSpace Therapy Team</p>
        <hr>
        <p><em>This is an automated confirmation. Please do not reply to this email.</em></p>
      `;

      userEmailResponse = await resend.emails.send({
        from: 'MentalSpace Therapy <noreply@mentalspacetherapy.com>',
        to: [data.email],
        subject: confirmationSubject,
        html: confirmationTemplate,
      });
    }

    console.log('Email notifications sent successfully');

    return new Response(
      JSON.stringify({
        success: true,
        adminEmail: adminEmailResponse,
        userEmail: userEmailResponse || null
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      }
    );

  } catch (error: any) {
    console.error('Email notification error:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Failed to send email notification'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    );
  }
});