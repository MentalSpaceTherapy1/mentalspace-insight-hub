import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, HelpCircle, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/faq-hero.jpg";
import SEOHead from "@/components/SEOHead";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      faqs: [
        {
          question: "What is Coping & Healing?",
          answer: "Coping & Healing is an online private practice company offering therapy, life coaching, and relationship coaching. Clients can communicate with therapists and certified coaches via text, audio, or video, with subscriptions starting at $49.95 a week. Live Video Sessions are also available."
        },
        {
          question: "How do I get started?",
          answer: "Just click on Request an Appointment anywhere on Coping & Healing website, answer some questions about your needs, choose a subscription plan. Our team will contact you to schedule your first appointment. A licensed therapist will conduct an in-depth assessment with you, then we will propose the best therapists and coaches that match your needs and personality."
        },
        {
          question: "How much does Coping & Healing cost?",
          answer: "Coping & Healing offers subscriptions starting at $49.95 a week. All plans give you access to a therapist and a life coach. Various plans are available to suit your needs, with no long-term contracts. You can change or cancel your plan at any time."
        }
      ]
    },
    {
      title: "Services & Therapy",
      faqs: [
        {
          question: "How does therapy differ from life coaching?",
          answer: "Life Coaching: Focus on goal-oriented personal growth, development, and achievement. It addresses specific life goals, career aspirations, or personal development areas. Coaches use practical strategies and tools to help clients create actionable plans and make positive changes. The main goal is to empower individuals to reach their potential and achieve specific life objectives.\n\nIndividual Therapy: Focused on addressing specific mental or emotional problems, such as anxiety, depression, trauma, or relationship issues. Therapists explore underlying emotions, patterns, and psychological dynamics. The primary goal is to understand and resolve emotional challenges, heal psychological wounds, and foster overall mental well-being."
        },
        {
          question: "Are Coping & Healing therapists and coaches experienced?",
          answer: "Yes. Coping & Healing's network includes licensed therapists, associates, mastered level therapists, and certified coaches, ensuring quality care. Our professionals are experienced and have been carefully selected and trained to provide services on our platform."
        },
        {
          question: "Can I have a Life Coach and a Therapist at the same time for the same $49.95/week subscription?",
          answer: "Absolutely! For just $49.95/week, you can access both a Life Coach and a Therapist. Our professionals work in harmony, coordinating or alternating sessions to provide you with cohesive, personalized care. This innovative approach ensures that you receive comprehensive guidance, empowering you to overcome challenges and unlock your true potential. Experience the synergy of therapy and coaching with Coping & Healing, where your growth and healing are our top priority."
        },
        {
          question: "If I'm a teenager, do I need permission from my parents/guardian?",
          answer: "If you are under 18, most U.S. states require parent/guardian consent to start therapy or coaching. Coping & Healing requires parental consent through specific procedures. Our support team can guide you through the required steps."
        },
        {
          question: "Is Coping & Healing as effective as traditional therapy?",
          answer: "Coping & Healing's unique blend of therapy, life coaching, and relationship coaching is designed to address diverse needs effectively. Our approach is backed by satisfied clients who have found success and improvement through our platform."
        }
      ]
    },
    {
      title: "Couples & Relationships",
      faqs: [
        {
          question: "What is online couples therapy?",
          answer: "Coping & Healing's online couples therapy allows partners to connect with therapists virtually, addressing relationship challenges through live video sessions."
        },
        {
          question: "How does couples' therapy differ from relationship coaching?",
          answer: "Couples' Therapy: Primarily focused on addressing specific problems within a relationship, from communication breakdowns to more severe issues like infidelity or substance abuse. The therapist explores underlying emotions, patterns, and dynamics that contribute to relationship problems. The primary goal is to resolve conflicts, heal emotional wounds, and foster a healthier relationship.\n\nRelationship Coaching: More goal-oriented and focuses on the present and future of the relationship rather than delving into deep-seated issues from the past. It's about enhancing the relationship, improving communication, and achieving specific relationship goals. Coaches work on practical strategies, tools, and techniques to improve relationship dynamics. The main goal is to empower the couple to develop skills, create actionable plans, and make positive changes in their relationship."
        },
        {
          question: "What can I expect from couples therapy?",
          answer: "MentalSpace offers couples therapy to help partners understand their relationship better, resolve conflicts, and build a stronger foundation. The process includes assessment, goal setting, and enhancing communication skills, whether conducted online or in-person."
        },
        {
          question: "Is it better to attend online couples counseling as a couple or solo?",
          answer: "Starting treatment as a couple is typically best for shared concerns. If individual therapy is needed, MentalSpace therapists will guide you through options for individual sessions."
        },
        {
          question: "Who should seek couples counseling?",
          answer: "Couples counseling with MentalSpace is suitable for all relationship stages and situations, including recurring disagreements, dealing with tragedy, rebuilding chemistry, or simply strengthening the connection."
        },
        {
          question: "Is online couples counseling really effective?",
          answer: "Yes, MentalSpace's online couples' therapy has been shown to be as effective as in-person sessions, offering a convenient and impactful way to enhance relationships."
        },
        {
          question: "Is online couples counseling right for my partner and me?",
          answer: "Online couples therapy with MentalSpace offers flexibility and accessibility. The key is both partners feeling comfortable with the therapist and treatment method."
        },
        {
          question: "Is couples therapy only for married couples?",
          answer: "No, MentalSpace offers couples therapy for all type of relationship, helping partners reconnect, strengthen bonds, or address conflicts."
        },
        {
          question: "Does MentalSpace offer premarital counseling?",
          answer: "Yes, MentalSpace provides premarital counseling with experienced therapists, supporting engaged couples in strengthening their relationship and resolving issues before marriage."
        }
      ]
    },
    {
      title: "Privacy & Safety",
      faqs: [
        {
          question: "How does MentalSpace protect my privacy?",
          answer: "MentalSpace prioritizes your security with HIPAA compliance and industry-standard encryption. Access requires secure authentication, and additional security features are available on enabled devices."
        }
      ]
    }
  ];

  // Create FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category => 
      category.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="FAQ - Frequently Asked Questions | Coping and Healing Counseling"
        description="Find answers to common questions about our online therapy services, insurance coverage, and mental health support. Get instant answers about therapy costs, getting started, and more."
        keywords="therapy FAQ, online therapy questions, therapy cost, insurance coverage, mental health questions, therapy answers"
        canonicalUrl="https://chctherapy.com/faq"
        ogTitle="FAQ - Your Therapy Questions Answered"
        ogDescription="Get instant answers to common questions about online therapy, insurance, costs, and getting started with mental health support."
        ogImage="https://chctherapy.com/therapy-hero-og.jpg"
        structuredData={faqStructuredData}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="FAQ and support" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
          </div>
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Frequently Asked Questions
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                  Find answers to common questions about MentalSpace therapy and coaching services
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 text-white/90">
                    <HelpCircle className="h-5 w-5" />
                    <span>Instant Answers</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <MessageCircle className="h-5 w-5" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* FAQ Categories */}
              <div className="lg:col-span-3">
                <div className="space-y-8">
                  {faqCategories.map((category, categoryIndex) => (
                    <Card key={categoryIndex} className="border-0 shadow-lg">
                      <CardContent className="p-8">
                        <h2 className="text-2xl font-bold mb-6 text-primary flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-sm font-bold mr-3">
                            {categoryIndex + 1}
                          </div>
                          {category.title}
                        </h2>
                        <Accordion type="single" collapsible className="w-full space-y-4">
                          {category.faqs.map((faq, faqIndex) => (
                            <AccordionItem 
                              key={faqIndex} 
                              value={`item-${categoryIndex}-${faqIndex}`} 
                              className="border rounded-lg px-6 hover:shadow-md transition-shadow"
                            >
                              <AccordionTrigger className="text-left hover:no-underline py-6 group">
                                <span className="text-lg font-semibold group-hover:text-primary transition-colors">
                                  {faq.question}
                                </span>
                              </AccordionTrigger>
                              <AccordionContent className="pb-6">
                                <p className="text-muted-foreground leading-relaxed text-base">
                                  {faq.answer}
                                </p>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="border-0 shadow-xl bg-gradient-to-br from-primary to-secondary text-white">
                  <CardContent className="p-6 text-center">
                    <HelpCircle className="h-12 w-12 mx-auto mb-4 text-white/90" />
                    <h3 className="text-xl font-bold mb-2">Still need help?</h3>
                    <p className="text-white/90 mb-4">
                      Can't find what you're looking for? Our support team is here to help.
                    </p>
                    <Link to="/contact-us">
                      <Button variant="secondary" className="w-full">
                        Contact Support
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 flex items-center">
                      <Phone className="h-5 w-5 mr-2 text-primary" />
                      Quick Contact
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-medium">Phone Support</p>
                        <a href="tel:404-832-0102" className="text-muted-foreground hover:text-primary transition-colors">404-832-0102</a>
                      </div>
                      <div>
                        <p className="font-medium">Email Support</p>
                        <p className="text-muted-foreground">support@chctherapy.com</p>
                      </div>
                      <div>
                        <p className="font-medium">Response Time</p>
                        <p className="text-muted-foreground">Within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-2">Emergency Support</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      If you're in crisis, please seek immediate help.
                    </p>
                    <Link to="/emergency-resources">
                      <Button variant="outline" size="sm" className="w-full">
                        Emergency Resources
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Ready to Request an Appointment?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Have more questions? Contact us for a free consultation and get personalized answers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/therapist-matching">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-6 group">
                  Request an Appointment
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact-us">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;