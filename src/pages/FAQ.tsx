import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is MentalSpace?",
      answer: "MentalSpace is an online private practice company offering therapy, life coaching, and relationship coaching. Clients can communicate with therapists and certified coaches via text, audio, or video, with subscriptions starting at $49.95 a week."
    },
    {
      question: "How do I get started?",
      answer: "Just click on Get Started anywhere on MentalSpace website, answer some questions about your needs, choose a subscription plan. Our team will contact you to schedule your first appointment."
    },
    {
      question: "How much does MentalSpace cost?",
      answer: "Subscriptions start at $49.95 a week. All plans give you access to a therapist and a life coach. Various plans are available to suit your needs, with no long‑term contracts."
    },
    {
      question: "How does therapy differ from life coaching?",
      answer: "Life coaching is goal‑oriented and focuses on personal growth, helping you achieve specific objectives and improve various aspects of your life. Individual therapy addresses mental or emotional problems with a focus on healing, exploring underlying emotions, past experiences, and providing therapeutic interventions for mental health challenges."
    },
    {
      question: "Are MentalSpace therapists and coaches experienced?",
      answer: "Yes, our network includes licensed therapists, associates, and certified coaches who have been carefully selected. All therapists are licensed or master's level professionals with experience in various specialties."
    },
    {
      question: "Can I have a life coach and a therapist at the same time?",
      answer: "Yes! For $49.95/week clients can access both a therapist and a life coach, with coordinated sessions to ensure comprehensive support for your mental health and personal growth goals."
    },
    {
      question: "Do teenagers need parental consent?",
      answer: "If under 18, parental consent is required according to U.S. law. MentalSpace guides families through the necessary steps to ensure proper consent and privacy protections for teen clients."
    },
    {
      question: "Is MentalSpace as effective as traditional therapy?",
      answer: "MentalSpace's blend of therapy and coaching is effective and backed by satisfied clients. Many clients report that our comprehensive approach addresses their diverse needs more effectively than traditional therapy alone."
    },
    {
      question: "What is online couples therapy?",
      answer: "Online couples therapy allows partners to connect virtually with licensed therapists through live video sessions to address relationship challenges, improve communication, and strengthen their bond from the comfort of their own space."
    },
    {
      question: "How does couples therapy differ from relationship coaching?",
      answer: "Couples therapy addresses specific relationship problems and focuses on healing emotional wounds, resolving conflicts, and treating relationship dysfunction. Relationship coaching focuses on present and future goals, improving communication skills, and building tools for ongoing relationship success."
    },
    {
      question: "Who should seek couples counseling?",
      answer: "Couples counseling is suitable for relationships at all stages - whether you're experiencing recurring disagreements, want to strengthen your connection, are preparing for marriage, or simply want to improve your communication and intimacy."
    },
    {
      question: "How does MentalSpace protect my privacy?",
      answer: "MentalSpace uses HIPAA‑compliant encryption and security measures to protect all client information. Our therapists follow strict professional and ethical confidentiality codes, and all communications are securely stored and encrypted."
    },
    {
      question: "What types of issues can you help with?",
      answer: "Our therapists and coaches specialize in a variety of issues including anxiety, depression, PTSD, trauma, relationship problems, life transitions, stress management, goal setting, personal growth, and many other mental health and life coaching concerns."
    },
    {
      question: "Can I switch therapists or coaches?",
      answer: "Yes, you can switch therapists or coaches at no extra cost to find the perfect fit. We want to ensure you have the best possible therapeutic relationship for your success."
    },
    {
      question: "What if I need crisis support?",
      answer: "If you're experiencing a mental health crisis, please contact your local emergency services immediately or visit our Emergency Resources page for crisis hotlines. MentalSpace provides ongoing support but is not designed for crisis intervention."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary-light/20 to-secondary-light/20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
              Find answers to common questions about MentalSpace therapy and coaching services
            </p>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-lg font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Contact us for a free consultation and get personalized answers
            </p>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
              Contact Us
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;