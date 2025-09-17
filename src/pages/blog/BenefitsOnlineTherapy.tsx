import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import onlineTherapyHeroImage from "@/assets/online-therapy-hero.jpg";

const BenefitsOnlineTherapy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <SEOHead
        title="The Benefits of Online Therapy: Accessible Mental Health Care"
        description="Discover how online therapy has revolutionized mental health care, making it more accessible and convenient for everyone."
        keywords="online therapy, teletherapy, virtual therapy, accessible mental health, therapy benefits"
      />
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/blog" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </nav>

          <article>
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                The Benefits of Online Therapy: Accessible Mental Health Care
              </h1>
              
              <div className="flex items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  December 15, 2024
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  5 min read
                </div>
              </div>

              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img
                  src={onlineTherapyHeroImage}
                  alt="Online therapy session - accessible mental health care"
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-6">
                The digital revolution has transformed many aspects of our lives, and mental health care is no exception. 
                Online therapy has emerged as a game-changing solution, breaking down barriers and making professional 
                mental health support more accessible than ever before.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">What is Online Therapy?</h2>
              <p className="mb-6">
                Online therapy, also known as teletherapy or e-therapy, involves receiving mental health services 
                through digital platforms. This can include video calls, phone sessions, text messaging, or email 
                communication with licensed mental health professionals.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Key Benefits of Online Therapy</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Increased Accessibility</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Access therapy from anywhere with an internet connection</li>
                <li>Eliminates transportation barriers</li>
                <li>Serves rural and underserved communities</li>
                <li>Available for people with mobility issues or disabilities</li>
                <li>Reduces stigma by providing privacy and discretion</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Convenience and Flexibility</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Flexible scheduling options, including evenings and weekends</li>
                <li>No need to take time off work for travel</li>
                <li>Sessions from the comfort of your own home</li>
                <li>Easier to maintain consistent therapy attendance</li>
                <li>Option for more frequent check-ins when needed</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Cost-Effectiveness</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Often more affordable than traditional in-person therapy</li>
                <li>Saves money on transportation and parking</li>
                <li>Reduced missed appointments due to convenience</li>
                <li>Some platforms offer subscription-based models</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4. Comfort and Privacy</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Familiar environment can enhance openness</li>
                <li>Reduced anxiety about being seen at a mental health facility</li>
                <li>Greater sense of control over the therapeutic environment</li>
                <li>Ability to continue sessions during travel or relocation</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Types of Online Therapy</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Video Sessions</h3>
              <p className="mb-4">
                Most similar to traditional therapy, allowing for face-to-face interaction and non-verbal communication.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Phone Therapy</h3>
              <p className="mb-4">
                Voice-only sessions that can be more comfortable for some clients and don't require video technology.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Text-Based Therapy</h3>
              <p className="mb-4">
                Written communication that allows for thoughtful responses and can be particularly helpful for those who express themselves better in writing.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Is Online Therapy Effective?</h2>
              <p className="mb-6">
                Research consistently shows that online therapy can be just as effective as in-person therapy for many 
                mental health conditions, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Depression and anxiety disorders</li>
                <li>Post-traumatic stress disorder (PTSD)</li>
                <li>Eating disorders</li>
                <li>Substance use disorders</li>
                <li>Relationship and family issues</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Who Can Benefit from Online Therapy?</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Busy professionals with limited time</li>
                <li>Parents with young children</li>
                <li>Individuals in rural or remote areas</li>
                <li>People with mobility challenges</li>
                <li>Those who prefer privacy and anonymity</li>
                <li>Frequent travelers</li>
                <li>Individuals with social anxiety</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Getting Started with Online Therapy</h2>
              <p className="mb-6">
                Beginning online therapy is simple and straightforward. Most platforms offer easy signup processes, 
                secure video platforms, and matching services to connect you with the right therapist for your needs.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">Ready to Experience Online Therapy?</h3>
                <p className="mb-4">
                  Take the first step toward accessible, convenient mental health care. Our online therapy platform 
                  connects you with licensed professionals who can provide the support you need, when and where you need it.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <Link to="/online-therapy">Learn More About Online Therapy</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/therapist-matching">Get Matched with a Therapist</Link>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BenefitsOnlineTherapy;