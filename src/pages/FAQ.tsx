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

const FAQ = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      faqs: [
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
        }
      ]
    },
    {
      title: "Services & Therapy",
      faqs: [
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
          question: "What types of issues can you help with?",
          answer: "Our therapists and coaches specialize in a variety of issues including anxiety, depression, PTSD, trauma, relationship problems, life transitions, stress management, goal setting, personal growth, and many other mental health and life coaching concerns."
        }
      ]
    },
    {
      title: "Couples & Relationships",
      faqs: [
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
        }
      ]
    },
    {
      title: "Privacy & Safety",
      faqs: [
        {
          question: "How does MentalSpace protect my privacy?",
          answer: "MentalSpace uses HIPAA‑compliant encryption and security measures to protect all client information. Our therapists follow strict professional and ethical confidentiality codes, and all communications are securely stored and encrypted."
        },
        {
          question: "Do teenagers need parental consent?",
          answer: "If under 18, parental consent is required according to U.S. law. MentalSpace guides families through the necessary steps to ensure proper consent and privacy protections for teen clients."
        },
        {
          question: "What if I need crisis support?",
          answer: "If you're experiencing a mental health crisis, please contact your local emergency services immediately or visit our Emergency Resources page for crisis hotlines. MentalSpace provides ongoing support but is not designed for crisis intervention."
        }
      ]
    },
    {
      title: "Platform & Experience",
      faqs: [
        {
          question: "Is MentalSpace as effective as traditional therapy?",
          answer: "MentalSpace's blend of therapy and coaching is effective and backed by satisfied clients. Many clients report that our comprehensive approach addresses their diverse needs more effectively than traditional therapy alone."
        },
        {
          question: "Can I switch therapists or coaches?",
          answer: "Yes, you can switch therapists or coaches at no extra cost to find the perfect fit. We want to ensure you have the best possible therapeutic relationship for your success."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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
                        <p className="text-muted-foreground">404-832-0102</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Have more questions? Contact us for a free consultation and get personalized answers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-started">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-6 group">
                  Get Started
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