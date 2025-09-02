import { useEffect } from 'react';

const HTMLDiagnostics = () => {
  useEffect(() => {
    document.title = 'HTML Diagnostics';
  }, []);

  const htmlSample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MentalSpace - Professional Online Mental Health Services & Therapy</title>
    <meta name="description" content="Professional online therapy and mental health services. Connect with licensed therapists anytime, anywhere for depression, anxiety, PTSD, ADHD, and more.">
    <link rel="canonical" href="https://mentalspace-insight-hub.lovable.app/">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "MentalSpace - Professional Online Mental Health Services",
      "description": "Professional online therapy and mental health services. Connect with licensed therapists anytime, anywhere for depression, anxiety, PTSD, ADHD, and more.",
      "url": "https://mentalspace-insight-hub.lovable.app/",
      "mainEntity": {
        "@type": "MedicalBusiness",
        "name": "MentalSpace",
        "description": "Leading online therapy platform connecting users with licensed mental health professionals for comprehensive psychiatric care"
      }
    }
    </script>
</head>
<body>
    <main>
        <h1>Transform Your Mental Health with Professional Online Therapy</h1>
        <p>Connect with licensed therapists anytime, anywhere. Professional mental health support for depression, anxiety, PTSD, ADHD, couples therapy, and teen counseling.</p>
        <section>
            <h2>Professional Online Mental Health Services</h2>
            <p>Get matched with the right therapist for your unique needs.</p>
        </section>
    </main>
</body>
</html>`;

  return (
    <div style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap', fontSize: '12px' }}>
      {htmlSample}
    </div>
  );
};

export default HTMLDiagnostics;