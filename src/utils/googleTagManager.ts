// Google Tag Manager conversion tracking utilities

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
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
};

// Track Book Appointment conversion
export const trackBookAppointmentConversion = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-11045234292/jjv7CNjnqKUbEPTM45Ip'
    });
    console.log('Book appointment conversion tracked');
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
};

// Generic conversion tracking function
export const trackConversion = (conversionId: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': conversionId
    });
  }
};
