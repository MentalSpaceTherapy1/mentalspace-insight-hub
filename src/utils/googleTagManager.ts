// Google Tag Manager and TikTok Pixel conversion tracking utilities

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    ttq?: {
      track: (event: string, properties?: Record<string, any>) => void;
      page: () => void;
    };
  }
}

// Track Insurance Form conversion
export const trackInsuranceFormConversion = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-11045234292/zlfWCLKSxYcYEPTM45Ip'
    });
    console.log('Insurance form conversion tracked');
  }
  
  // TikTok Pixel tracking
  if (typeof window !== 'undefined' && window.ttq) {
    window.ttq.track('SubmitForm', {
      content_type: 'insurance_form',
      content_name: 'Insurance Verification Form'
    });
    console.log('TikTok: Insurance form conversion tracked');
  }
};

// Track Book Appointment conversion
export const trackBookAppointmentConversion = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-11045234292/jjv7CNjnqKUbEPTM45Ip'
    });
    console.log('Book appointment conversion tracked');
  }
  
  // TikTok Pixel tracking
  if (typeof window !== 'undefined' && window.ttq) {
    window.ttq.track('Contact', {
      content_type: 'appointment_booking',
      content_name: 'Book Therapy Appointment'
    });
    console.log('TikTok: Appointment booking conversion tracked');
  }
};

// Track Therapist Matching conversion
export const trackTherapistMatchingConversion = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-11045234292/iXyFCPn4jKYbEPTM45Ip'
    });
    console.log('Therapist matching conversion tracked');
  }
  
  // TikTok Pixel tracking
  if (typeof window !== 'undefined' && window.ttq) {
    window.ttq.track('SubmitForm', {
      content_type: 'therapist_matching',
      content_name: 'Find Your Therapist Match'
    });
    console.log('TikTok: Therapist matching conversion tracked');
  }
};

// Track Assessment Completion
export const trackAssessmentCompletion = (assessmentType: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'assessment_complete', {
      'event_category': 'engagement',
      'event_label': assessmentType
    });
    console.log('Assessment completion tracked:', assessmentType);
  }
  
  // TikTok Pixel tracking
  if (typeof window !== 'undefined' && window.ttq) {
    window.ttq.track('CompleteRegistration', {
      content_type: 'mental_health_assessment',
      content_name: assessmentType
    });
    console.log('TikTok: Assessment completion tracked:', assessmentType);
  }
};

// Track General Form Submission
export const trackFormSubmission = (formType: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      'event_category': 'form',
      'event_label': formType
    });
    console.log('Form submission tracked:', formType);
  }
  
  // TikTok Pixel tracking
  if (typeof window !== 'undefined' && window.ttq) {
    window.ttq.track('SubmitForm', {
      content_type: 'contact_form',
      content_name: formType
    });
    console.log('TikTok: Form submission tracked:', formType);
  }
};

// Generic conversion tracking function
export const trackConversion = (conversionId: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': conversionId
    });
  }
};
