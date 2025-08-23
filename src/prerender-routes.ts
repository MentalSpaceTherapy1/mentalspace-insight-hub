// Define routes for prerendering
export const prerenderRoutes = [
  '/',
  '/online-therapy',
  '/couples-therapy', 
  '/teen-therapy',
  '/life-coaching',
  '/mental-health-tests',
  '/faq',
  '/contact-us',
  '/get-started',
  '/privacy-policy',
  '/terms-and-conditions'
];

// Critical page metadata for SSR
export const pageMetadata = {
  '/': {
    title: 'MentalSpace - Online Therapy & Mental Health Services | Licensed Therapists & Same-Week Starts',
    description: 'Professional online therapy and mental health services. Connect with licensed therapists with flexible scheduling. Individual therapy, couples counseling, teen therapy, and life coaching. Most insurance accepted.',
    critical: true
  },
  '/online-therapy': {
    title: 'Online Therapy Services - Licensed Therapists | MentalSpace',
    description: 'Convenient online therapy with licensed professionals. Video, phone, or text sessions available. Treat depression, anxiety, trauma, and more. Insurance accepted.',
    critical: true
  },
  '/couples-therapy': {
    title: 'Couples Therapy & Relationship Counseling Online | MentalSpace', 
    description: 'Professional couples therapy and relationship counseling online. Strengthen your relationship with licensed therapists. Flexible scheduling and insurance accepted.',
    critical: true
  },
  '/teen-therapy': {
    title: 'Teen Therapy & Adolescent Counseling Services | MentalSpace',
    description: 'Specialized therapy for teenagers aged 13-17. Help your teen navigate challenges with licensed adolescent counselors. Online sessions available.',
    critical: false
  },
  '/life-coaching': {
    title: 'Life Coaching Services Online - Personal Development | MentalSpace',
    description: 'Professional life coaching to help you achieve your goals. Career coaching, relationship coaching, and personal development with certified coaches.',
    critical: false
  }
};