import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface EmailRequest {
  type: string;
  data: Record<string, any>;
  submissionId: string;
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
    const { type, data, submissionId }: EmailRequest = await req.json();

    console.log(`Sending ${type} notification email for submission:`, submissionId);

    // Admin email - UPDATE THIS TO YOUR ACTUAL ADMIN EMAIL
    const adminEmail = 'support@chctherapy.com';
    
    let emailTemplate, subject;

    // Generate email content based on form type
    const formatFormData = (data: Record<string, any>): string => {
      return Object.entries(data)
        .map(([key, value]) => {
          const formattedKey = key
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase())
            .replace(/([a-z])([A-Z])/g, '$1 $2');
          
          // Format date of birth as M/D/Y
          if (key === 'dateOfBirth' && value) {
            try {
              const date = new Date(value);
              const formatted = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
              return `<p><strong>${formattedKey}:</strong> ${formatted}</p>`;
            } catch {
              return `<p><strong>${formattedKey}:</strong> ${value}</p>`;
            }
          }
          
          if (typeof value === 'boolean') {
            return `<p><strong>${formattedKey}:</strong> ${value ? 'Yes' : 'No'}</p>`;
          }
          if (Array.isArray(value)) {
            return `<p><strong>${formattedKey}:</strong> ${value.join(', ')}</p>`;
          }
          return `<p><strong>${formattedKey}:</strong> ${value || 'Not provided'}</p>`;
        })
        .join('');
    };

    switch (type) {
      case 'contact_us':
        subject = 'New Contact Form Submission - CHC Therapy';
        emailTemplate = `
          <h2>New Contact Form Submission</h2>
          <p><strong>Submission ID:</strong> ${submissionId}</p>
          ${formatFormData(data)}
          <hr>
          <p><em>Submitted via CHC Therapy website</em></p>
        `;
        break;

      case 'therapist_matching':
        subject = 'New Therapist Matching Request - CHC Therapy';
        emailTemplate = `
          <h2>New Therapist Matching Request</h2>
          <p><strong>Submission ID:</strong> ${submissionId}</p>
          ${formatFormData(data)}
          <hr>
          <p><em>Submitted via CHC Therapy website</em></p>
        `;
        break;

      case 'assessment_contact':
        subject = 'New Assessment Contact Request - CHC Therapy';
        emailTemplate = `
          <h2>New Assessment Contact Request</h2>
          <p><strong>Submission ID:</strong> ${submissionId}</p>
          ${formatFormData(data)}
          <p><strong>Assessment Results:</strong> Available in admin dashboard</p>
          <hr>
          <p><em>Submitted following mental health assessment</em></p>
        `;
        break;

      case 'career_application':
        subject = 'New Career Application - CHC Therapy';
        emailTemplate = `
          <h2>New Career Application</h2>
          <p><strong>Submission ID:</strong> ${submissionId}</p>
          ${formatFormData(data)}
          <hr>
          <p><em>Submitted via CHC Therapy careers page</em></p>
        `;
        break;

      default:
        // Generic template for any other form type
        const formattedType = type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        subject = `New ${formattedType} Submission - CHC Therapy`;
        emailTemplate = `
          <h2>New ${formattedType} Submission</h2>
          <p><strong>Submission ID:</strong> ${submissionId}</p>
          ${formatFormData(data)}
          <hr>
          <p><em>Submitted via CHC Therapy website</em></p>
        `;
        break;
    }

    // Send admin notification
    const adminEmailResponse = await resend.emails.send({
      from: 'CHC Therapy <noreply@chctherapy.com>',
      to: [adminEmail],
      subject: subject,
      html: emailTemplate,
    });

    // Send confirmation email to user if email is provided
    let userEmailResponse;
    if (data.email) {
      const confirmationSubject = 'Thank you for contacting CHC Therapy';
      const confirmationTemplate = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank you for reaching out!</h2>
          <p>Dear ${data.name || data.firstName || 'Friend'},</p>
          <p>We have received your submission and will get back to you as soon as possible.</p>
          <p>Our team typically responds within 24 hours during business days.</p>
          <p>If you have any urgent concerns, please don't hesitate to call us directly at <strong>404-832-0102</strong>.</p>
          <p>Thank you for choosing CHC Therapy!</p>
          <p style="margin-top: 30px;">
            Best regards,<br>
            <strong>The CHC Therapy Team</strong>
          </p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="font-size: 12px; color: #6b7280;">
            <em>This is an automated confirmation. Please do not reply to this email.</em>
          </p>
        </div>
      `;

      userEmailResponse = await resend.emails.send({
        from: 'CHC Therapy <noreply@chctherapy.com>',
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