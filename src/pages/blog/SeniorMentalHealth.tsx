import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const SeniorMentalHealth = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Senior Mental Health: Therapy for Older Adults & Common Challenges",
    "description": "Guide to mental health care for seniors covering depression, anxiety, Medicare coverage, and accessible therapy options.",
    "author": {
      "@type": "Organization",
      "name": "Coping and Healing Counseling"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Coping and Healing Counseling",
      "logo": {
        "@type": "ImageObject",
        "url": "https://chctherapy.com/chc-logo.png"
      }
    },
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-15"
  };

  return (
    <>
      <SEOHead
        title="Senior Mental Health: Therapy for Older Adults | CHC Therapy"
        description="Comprehensive guide to mental health care for seniors. Learn about depression, anxiety, Medicare coverage, and accessible therapy options for older adults."
        keywords="therapy for seniors, elderly mental health, depression in older adults, senior counseling, Medicare mental health"
        canonicalUrl="https://chctherapy.com/blog/senior-mental-health-therapy"
        ogTitle="Senior Mental Health: Complete Guide to Therapy for Older Adults"
        ogDescription="Expert guidance on mental health challenges facing older adults and how to access quality care with Medicare coverage."
        ogImage="https://chctherapy.com/therapy-hero-og.jpg"
        structuredData={structuredData}
      />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Senior Mental Health: Therapy for Older Adults & Common Challenges
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Understanding and addressing mental health in the senior years
              </p>
            </div>
          </div>
        </section>

        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <section className="mb-12">
            <p className="text-lg leading-relaxed mb-6">
              Mental health is just as important in our later years as at any other life stage. Yet older adults face unique challenges that can impact their emotional well-being—from chronic health conditions and loss of loved ones to retirement adjustments and concerns about independence. Despite these challenges, mental health issues in seniors are often overlooked or dismissed as a normal part of aging.
            </p>
            <p className="text-lg leading-relaxed">
              This guide explores common mental health concerns affecting older adults, how to recognize warning signs, treatment options including Medicare coverage, and strategies for maintaining mental wellness in the senior years.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Common Mental Health Challenges in Older Adults</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Depression</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Depression affects more than 7 million adults over 65 in the United States. It's not a normal part of aging, yet it often goes unrecognized. Symptoms include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Persistent sadness or feelings of emptiness</li>
                  <li>Loss of interest in hobbies or social activities</li>
                  <li>Changes in appetite or unintentional weight loss</li>
                  <li>Sleep disturbances (insomnia or oversleeping)</li>
                  <li>Fatigue and decreased energy</li>
                  <li>Difficulty concentrating or making decisions</li>
                  <li>Physical aches and pains without clear cause</li>
                  <li>Thoughts of death or suicide</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Anxiety Disorders</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Anxiety is one of the most common mental health concerns among older adults:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Generalized anxiety about health, finances, or safety</li>
                  <li>Health-related anxiety following medical diagnoses</li>
                  <li>Social anxiety or fear of becoming a burden</li>
                  <li>Panic attacks (often mistaken for heart problems)</li>
                  <li>Phobias, particularly about falling or driving</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Grief and Loss</h3>
                <p className="text-lg leading-relaxed">
                  Seniors often experience multiple losses—spouses, siblings, friends, pets, independence, and physical abilities. Prolonged or complicated grief can lead to depression and requires professional support.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Adjustment to Major Life Changes</h3>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Retirement and loss of work identity</li>
                  <li>Relocating to assisted living or downsizing</li>
                  <li>Becoming a caregiver for a spouse</li>
                  <li>Loss of driving privileges</li>
                  <li>Chronic health conditions limiting activities</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Social Isolation and Loneliness</h3>
                <p className="text-lg leading-relaxed">
                  One in four seniors lives alone, and social isolation significantly impacts mental health. Factors contributing to isolation include mobility limitations, transportation barriers, hearing loss, and loss of social networks.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-accent/10 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Why Senior Mental Health Is Often Overlooked</h2>
            <ul className="space-y-3 text-lg">
              <li><strong>Symptoms attributed to aging:</strong> Fatigue, memory issues, or social withdrawal dismissed as "getting old"</li>
              <li><strong>Physical health focus:</strong> Medical appointments prioritize physical conditions over mental health</li>
              <li><strong>Stigma:</strong> Older generations may view mental health treatment as shameful</li>
              <li><strong>Communication barriers:</strong> Hearing loss or cognitive changes make assessment difficult</li>
              <li><strong>Medication side effects:</strong> Some medications cause depression-like symptoms</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Treatment Options for Seniors</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Psychotherapy</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Talk therapy is highly effective for older adults:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Addresses negative thought patterns</li>
                  <li><strong>Interpersonal Therapy (IPT):</strong> Focuses on relationships and life transitions</li>
                  <li><strong>Grief counseling:</strong> Processes loss and bereavement</li>
                  <li><strong>Life review therapy:</strong> Reflects on life accomplishments and meaning</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Medication Management</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Antidepressants and anti-anxiety medications can be effective, but require careful management in older adults due to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Potential drug interactions with other medications</li>
                  <li>Different metabolism rates in older bodies</li>
                  <li>Increased risk of falls or confusion with some medications</li>
                  <li>Need for lower starting doses and gradual increases</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Telehealth Therapy</h3>
                <p className="text-lg leading-relaxed">
                  Online therapy offers significant benefits for seniors with mobility challenges, transportation barriers, or those in rural areas. Many therapists now offer tech support to help seniors access virtual appointments.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-primary/5 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Medicare Coverage for Mental Health Services</h2>
            
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Medicare covers mental health services, making therapy accessible for seniors:
              </p>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Medicare Part B Covers:</h3>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>One depression screening per year at no cost</li>
                  <li>Outpatient mental health care (individual and group therapy)</li>
                  <li>Psychiatric evaluation and diagnostic testing</li>
                  <li>Medication management visits</li>
                  <li>Telehealth mental health services (expanded during COVID-19)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Cost Sharing:</h3>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>After meeting the annual deductible, Medicare covers 80% of the approved amount</li>
                  <li>You pay 20% coinsurance</li>
                  <li>No copay for the annual depression screening</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Finding Providers:</h3>
                <p className="text-lg leading-relaxed">
                  Look for therapists who accept Medicare assignment. Coping and Healing Counseling accepts most major insurance plans including Medicare Advantage plans.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Maintaining Mental Wellness in Senior Years</h2>
            
            <ul className="space-y-3 text-lg">
              <li><strong>Stay socially connected:</strong> Join senior centers, clubs, or faith communities</li>
              <li><strong>Remain physically active:</strong> Even gentle exercise like walking improves mood</li>
              <li><strong>Engage your mind:</strong> Take classes, read, do puzzles, learn new skills</li>
              <li><strong>Maintain purpose:</strong> Volunteer, mentor, pursue hobbies</li>
              <li><strong>Manage chronic conditions:</strong> Control diabetes, heart disease, and other health issues</li>
              <li><strong>Address hearing/vision loss:</strong> Sensory impairments contribute to isolation</li>
              <li><strong>Practice good sleep hygiene:</strong> Maintain regular sleep schedules</li>
              <li><strong>Limit alcohol:</strong> Can worsen depression and interact with medications</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-4">Access Senior-Friendly Mental Health Care</h2>
            <p className="text-lg mb-6">
              Coping and Healing Counseling provides compassionate, accessible therapy for older adults throughout Georgia, with Medicare-accepted services and telehealth options.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/get-started">
                <Button size="lg" variant="secondary">
                  Schedule Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">
                  Learn More
                </Button>
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default SeniorMentalHealth;