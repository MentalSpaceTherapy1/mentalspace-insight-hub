export default function HTMLDiagnostics() {
  const htmlSample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Professional Online Therapy &amp; Mental Health Services | MentalSpace</title>
    <meta name="description" content="Get professional online therapy &amp; mental health support from licensed therapists. Individual, couples &amp; teen therapy available. Start your healing journey today.">
    <link rel="canonical" href="https://mentalspacetherapy.lovable.app/">
</head>
<body>
    <main>
        <h1>Transform Your Mental Health with Professional Online Therapy</h1>
        <p>Connect with licensed therapists from the comfort of your home. Whether you're dealing with anxiety, depression, relationship issues, or life transitions, our compassionate professionals are here to support your journey to wellness.</p>
        <p>We offer individual therapy, couples counseling, teen therapy, and life coaching services tailored to your unique needs.</p>
    </main>
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": ["Organization", "MedicalOrganization"],
        "name": "MentalSpace",
        "url": "https://mentalspacetherapy.lovable.app",
        "description": "Professional online therapy and mental health services"
    }
    </script>
</body>
</html>`;

  return (
    <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
      {htmlSample}
    </pre>
  );
}