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
          question: "How do I schedule an appointment?",
          answer: "Scheduling is easy! Click 'Request an Appointment' anywhere on our website, answer a few questions about your needs, and our team will contact you within 24 hours on business days. You can also call us directly at (404) 832-0102. We'll conduct an initial assessment and match you with the best therapist for your needs."
        },
        {
          question: "How do I get matched with a therapist?",
          answer: "Our matching process starts with a free consultation where we learn about your concerns, preferences, and goals. Based on this information, we recommend therapists who specialize in your areas of need and fit your personality. If you're not satisfied with your match, we're happy to connect you with a different therapist at no extra cost. <a href='/therapist-matching' class='text-primary hover:underline'>Start your matching process here</a>."
        },
        {
          question: "Do you offer free consultations?",
          answer: "Yes! We offer free consultations to help you determine if our services are right for you. During the consultation, you can ask questions, learn about our approach, and get matched with a therapist who fits your needs. There's no obligation to continue after the consultation. <a href='/therapist-matching' class='text-primary hover:underline'>Schedule your free consultation</a>."
        },
        {
          question: "How soon can I get an appointment?",
          answer: "Most new clients can get an appointment within 24 hours on business days. We understand that when you're ready to start therapy, waiting can be difficult. Our flexible scheduling and availability 7 days a week means we can often accommodate urgent needs. <a href='/get-started' class='text-primary hover:underline'>Get started today</a>."
        },
        {
          question: "What are your hours?",
          answer: "Coping and Healing Counseling is available 7 days a week, from 7am to 7pm (Sunday through Saturday). We offer flexible scheduling to accommodate your work, school, and family commitments. Whether you need early morning sessions before work or evening appointments, we're here for you."
        },
        {
          question: "What is Coping & Healing?",
          answer: "Coping & Healing Counseling is an online therapy practice serving all of Georgia. We offer individual therapy, couples counseling, teen therapy, and life coaching through secure video sessions. Our licensed therapists specialize in anxiety, depression, PTSD, ADHD, relationship issues, and more. We accept most major insurance plans including Georgia Medicaid."
        }
      ]
    },
    {
      title: "About Therapy",
      faqs: [
        {
          question: "What happens in a therapy session?",
          answer: "A typical therapy session is a confidential conversation between you and your therapist lasting 45-60 minutes. You'll discuss what's on your mind, explore your thoughts and feelings, and work together on coping strategies. Your therapist may teach you new skills, help you process difficult experiences, or guide you through exercises. Each session builds on previous ones to help you achieve your goals."
        },
        {
          question: "How long are therapy sessions?",
          answer: "Therapy sessions at Coping and Healing Counseling typically last 45-60 minutes. This gives you enough time to discuss what's on your mind, work through challenges with your therapist, and develop coping strategies. Your therapist may occasionally recommend longer sessions for couples therapy or intensive work."
        },
        {
          question: "How often should I go to therapy?",
          answer: "Most clients start with weekly sessions to build momentum and establish a strong therapeutic relationship. As you progress, you may move to bi-weekly or monthly sessions. Your therapist will work with you to determine the frequency that best supports your goals. Consistency is key, especially in the early stages of treatment."
        },
        {
          question: "How long does therapy take to work?",
          answer: "Everyone's therapy journey is different. Some people notice improvements within a few sessions, while deeper issues may take several months to work through. Research shows that most people experience meaningful change within 12-16 sessions. Your therapist will regularly check in about your progress and adjust the approach as needed."
        },
        {
          question: "Is everything I say in therapy confidential?",
          answer: "Yes, confidentiality is a cornerstone of therapy. What you share stays between you and your therapist with very limited exceptions required by law: if there's imminent danger to yourself or others, suspected abuse of a child or vulnerable adult, or a court order. Your therapist will explain these limits during your first session. <a href='/privacy-policy' class='text-primary hover:underline'>Learn more about our privacy practices</a>."
        },
        {
          question: "What should I talk about in therapy?",
          answer: "You can talk about anything that's on your mind! There's no topic too small or too difficult. Common topics include stress, anxiety, relationship problems, work challenges, family issues, grief, trauma, and personal growth. Your therapist will guide the conversation and ask questions to help you explore what matters most to you."
        },
        {
          question: "Will my therapist judge me?",
          answer: "Absolutely not. Our therapists are trained to create a safe, non-judgmental space where you can be completely honest. They practice 'unconditional positive regard,' meaning they accept you as you are without criticism. Many clients are surprised at how freeing it feels to share openly without fear of judgment."
        },
        {
          question: "What if I don't like my therapist?",
          answer: "The relationship between you and your therapist is crucial to successful therapy. If you don't feel it's a good fit, please let us know! We'll happily match you with a different therapist at no extra cost. Finding the right fit sometimes takes a try or two, and that's completely normal. <a href='/therapist-matching' class='text-primary hover:underline'>Request a new match</a>."
        },
        {
          question: "What's the difference between a therapist, psychologist, and psychiatrist?",
          answer: "A therapist or counselor (LPC, LCSW, LMFT) provides talk therapy to help with emotional and mental health challenges. A psychologist (PhD or PsyD) can provide therapy and conduct psychological testing. A psychiatrist (MD) is a medical doctor who can prescribe medication. At CHC, our licensed therapists provide evidence-based talk therapy. If medication might help, we can coordinate with your doctor or provide referrals."
        },
        {
          question: "What is CBT therapy?",
          answer: "Cognitive Behavioral Therapy (CBT) is an evidence-based approach that focuses on the connection between your thoughts, feelings, and behaviors. By identifying and changing negative thought patterns, you can improve how you feel and act. CBT is highly effective for anxiety, depression, and many other conditions. <a href='/blog/cognitive-behavioral-therapy' class='text-primary hover:underline'>Learn more about CBT</a>."
        },
        {
          question: "What is EMDR therapy?",
          answer: "Eye Movement Desensitization and Reprocessing (EMDR) is a specialized therapy for trauma and PTSD. It helps your brain process difficult memories through guided eye movements or other bilateral stimulation. Many people experience significant relief from trauma symptoms in fewer sessions than traditional talk therapy. <a href='/blog/emdr-therapy' class='text-primary hover:underline'>Learn more about EMDR</a>."
        },
        {
          question: "How do I know if I need therapy?",
          answer: "Consider therapy if you're experiencing persistent sadness, anxiety, or stress that affects daily life; struggling with relationships; going through major life changes; dealing with grief or trauma; or simply wanting personal growth and self-improvement. Therapy isn't just for crisis—it's a valuable tool for anyone wanting to understand themselves better. <a href='/therapist-matching' class='text-primary hover:underline'>Get started</a>."
        },
        {
          question: "What should I expect in my first session?",
          answer: "Your first session (intake) involves getting to know your therapist, discussing what brought you to therapy, and setting goals. Your therapist will ask about your history, current concerns, and what you hope to achieve. There's no pressure to share everything immediately—you set the pace. You'll also have time to ask questions and make sure you feel comfortable."
        },
        {
          question: "Can I do therapy if I'm not in crisis?",
          answer: "Absolutely! Therapy is for anyone who wants support, not just those in crisis. Many clients seek therapy for personal growth, better relationships, stress management, life transitions, or simply having a space to process their thoughts. Proactive mental health care can prevent problems before they become crises."
        },
        {
          question: "How does therapy differ from life coaching?",
          answer: "Therapy focuses on healing emotional or psychological challenges, exploring past experiences, and treating mental health conditions. Life coaching is more goal-oriented, focusing on the present and future—career goals, personal development, and creating action plans. At CHC, we offer both services and can help determine which approach best fits your needs."
        }
      ]
    },
    {
      title: "Insurance & Payment",
      faqs: [
        {
          question: "Does insurance cover therapy?",
          answer: "Yes! Coping and Healing Counseling accepts most major insurance plans including CareSource, Amerigroup, Peach State, Optum, BlueCross BlueShield, Aetna, Cigna, Alliant, Humana, and others. Coverage varies by plan, so we recommend contacting us to verify your benefits. <a href='/insurance' class='text-primary hover:underline'>Visit our insurance page for more details</a>."
        },
        {
          question: "What insurance do you accept?",
          answer: "We accept CareSource, Amerigroup, Peach State, Optum, BlueCross BlueShield, Aetna, Cigna, Alliant, Humana, and many other insurance providers. We also accept Georgia Medicaid through CareSource, Amerigroup, and Peach State. <a href='/contact-us' class='text-primary hover:underline'>Contact us</a> to verify your specific plan. <a href='/insurance' class='text-primary hover:underline'>Learn more about insurance</a>."
        },
        {
          question: "Does Medicaid cover therapy in Georgia?",
          answer: "Yes! Coping and Healing Counseling accepts Georgia Medicaid through CareSource, Amerigroup, and Peach State (Georgia's Medicaid CMOs). If you have Georgia Medicaid, you likely have coverage for mental health services at no cost to you. <a href='/contact-us' class='text-primary hover:underline'>Contact us</a> to verify your benefits."
        },
        {
          question: "How much does therapy cost without insurance?",
          answer: "For self-pay clients, therapy at CHC is $75 per week with a minimum purchase of 4 sessions. We believe mental health care should be accessible, which is why we keep our rates affordable compared to typical private practice rates of $150-250 per session. <a href='/contact-us' class='text-primary hover:underline'>Contact us</a> to discuss payment options."
        },
        {
          question: "What is a copay for therapy?",
          answer: "A copay is the fixed amount you pay per session when using insurance. Your copay depends on your specific insurance plan and typically ranges from $0-50 for in-network mental health providers. Many Georgia Medicaid plans have $0 copays for therapy. We can help you understand your benefits before your first session."
        },
        {
          question: "Do I need a referral to see a therapist?",
          answer: "Most insurance plans do not require a referral for outpatient mental health services. However, some HMO plans may require one. We recommend checking with your insurance company or contacting us—we're happy to help verify your benefits and any referral requirements."
        },
        {
          question: "What is a superbill?",
          answer: "A superbill is a detailed receipt we provide that you can submit to your insurance company for out-of-network reimbursement. It includes diagnosis codes, service codes, dates, and our provider information. If we're not in-network with your insurance, you may be able to receive partial reimbursement by submitting a superbill. <a href='/insurance' class='text-primary hover:underline'>Learn more</a>."
        },
        {
          question: "What's the difference between in-network and out-of-network?",
          answer: "In-network means the provider has a contract with your insurance company, typically resulting in lower costs for you (just a copay). Out-of-network means there's no contract, so you may pay more upfront but can often get partial reimbursement. CHC is in-network with most major Georgia insurance plans, keeping your costs low."
        }
      ]
    },
    {
      title: "Online Therapy",
      faqs: [
        {
          question: "How does online therapy work?",
          answer: "Online therapy at CHC works through secure, HIPAA-compliant video sessions. After scheduling, you'll receive a link to join your session from any private location in Georgia. All you need is a smartphone, tablet, or computer with internet access and a camera. It's just like in-person therapy, but from the comfort of your home. <a href='/online-therapy' class='text-primary hover:underline'>Learn more</a>."
        },
        {
          question: "Is online therapy as effective as in-person?",
          answer: "Yes! Research consistently shows that online therapy is just as effective as in-person therapy for most conditions, including anxiety, depression, PTSD, and relationship issues. Many clients actually prefer the convenience and comfort of therapy from home. The key is the therapeutic relationship, which develops equally well in both formats."
        },
        {
          question: "Does insurance cover online therapy?",
          answer: "Yes! Insurance covers online therapy the same as in-person sessions. Since 2020, most insurance plans have expanded telehealth coverage permanently. We accept the same insurance plans for online therapy as we do for any services, including Georgia Medicaid."
        },
        {
          question: "What do I need for a telehealth session?",
          answer: "You'll need: a device with a camera (smartphone, tablet, laptop, or computer), stable internet connection, a private and quiet space, and headphones (optional but recommended for privacy). Make sure your device is charged and test your camera and microphone beforehand. <a href='/online-therapy' class='text-primary hover:underline'>Learn more about online therapy</a>."
        },
        {
          question: "Is online therapy HIPAA compliant?",
          answer: "Absolutely. We use a secure, encrypted video platform specifically designed for healthcare that meets all HIPAA requirements. Your sessions and personal information are protected with the same level of security as any medical provider. <a href='/privacy-policy' class='text-primary hover:underline'>Read our privacy policy</a>."
        },
        {
          question: "Can I do online therapy from anywhere in Georgia?",
          answer: "Yes! Our therapists are licensed in Georgia and can provide online therapy to anyone located in the state. Whether you're in Atlanta, Savannah, rural Georgia, or anywhere in between, you can access our services. This is especially valuable for clients in areas with limited local mental health resources. <a href='/online-therapy-georgia' class='text-primary hover:underline'>See our coverage areas</a>."
        }
      ]
    },
    {
      title: "Couples & Relationships",
      faqs: [
        {
          question: "Does couples therapy work?",
          answer: "Yes! Research shows that about 70% of couples who participate in therapy experience significant improvements in their relationship. Success depends on both partners being committed to the process. Our therapists use evidence-based approaches to help couples communicate better, resolve conflicts, and rebuild connection. <a href='/couples-therapy' class='text-primary hover:underline'>Learn more about couples therapy</a>."
        },
        {
          question: "When should couples go to therapy?",
          answer: "Consider couples therapy if you're experiencing recurring arguments, communication breakdowns, trust issues, intimacy problems, major life transitions, or simply want to strengthen your relationship. You don't need to wait until things are terrible—early intervention often leads to better outcomes. Many healthy couples use therapy for tune-ups."
        },
        {
          question: "What if my partner won't go to couples therapy?",
          answer: "You can still benefit from individual therapy focused on relationship skills. Often, when one partner starts making positive changes, the other becomes more open to joining. Your therapist can help you develop communication strategies and work on what you can control. Sometimes partners join later once they see positive results. <a href='/couples-therapy' class='text-primary hover:underline'>Learn more</a>."
        },
        {
          question: "Can you do couples therapy online?",
          answer: "Yes! Our online couples therapy is just as effective as in-person sessions. Both partners can join from the same location or different locations if needed. Online sessions offer flexibility for busy couples and eliminate the need for childcare or travel. <a href='/online-therapy' class='text-primary hover:underline'>Learn about online options</a>."
        },
        {
          question: "How long does couples therapy take?",
          answer: "The duration varies based on your goals and challenges. Many couples see meaningful improvement within 8-12 sessions. Deeper issues like rebuilding trust after infidelity may take 6 months or longer. Your therapist will work with you to set realistic expectations and track progress."
        },
        {
          question: "What is online couples therapy?",
          answer: "Coping and Healing's online couples therapy allows partners to connect with therapists virtually through secure video sessions. You and your partner can join from the comfort of your home to address relationship challenges, improve communication, and strengthen your bond."
        },
        {
          question: "How does couples therapy differ from relationship coaching?",
          answer: "Couples therapy focuses on addressing specific problems within a relationship, exploring underlying emotions, and healing emotional wounds. Relationship coaching is more goal-oriented, focusing on enhancing the relationship and achieving specific relationship goals through practical strategies. We offer both services based on your needs."
        },
        {
          question: "What can I expect from couples therapy?",
          answer: "Coping and Healing offers couples therapy to help partners understand their relationship better, resolve conflicts, and build a stronger foundation. The process includes assessment, goal setting, and enhancing communication skills. You'll learn to express needs effectively, listen to your partner, and break negative cycles."
        },
        {
          question: "Is it better to attend couples counseling together or solo?",
          answer: "Starting treatment as a couple is typically best for shared concerns. If individual therapy is also needed, our therapists will guide you through options for individual sessions. Sometimes a combination of couples and individual sessions works best."
        },
        {
          question: "Who should seek couples counseling?",
          answer: "Couples counseling with CHC is suitable for all relationship stages and situations, including recurring disagreements, dealing with tragedy, rebuilding chemistry, or simply strengthening the connection. Whether you're dating, engaged, married, or in a long-term partnership, we can help."
        },
        {
          question: "Is couples therapy only for married couples?",
          answer: "No, CHC offers couples therapy for all types of relationships—dating couples, engaged couples, domestic partners, and married couples. We help partners at any stage reconnect, strengthen bonds, or address conflicts."
        },
        {
          question: "Does CHC offer premarital counseling?",
          answer: "Yes, we provide premarital counseling with experienced therapists. Premarital counseling helps engaged couples strengthen their relationship, discuss important topics like finances and family planning, and resolve any issues before marriage. It's a wonderful investment in your future together. <a href='/blog/premarital-counseling' class='text-primary hover:underline'>Learn more</a>."
        }
      ]
    },
    {
      title: "Privacy & Safety",
      faqs: [
        {
          question: "How does Coping and Healing protect my privacy?",
          answer: "Coping and Healing Counseling prioritizes your security with full HIPAA compliance and industry-standard encryption. All video sessions use secure, encrypted technology. Access requires secure authentication, and we never share your information without your consent except as required by law. <a href='/privacy-policy' class='text-primary hover:underline'>Read our full privacy policy</a>."
        },
        {
          question: "Are my therapy records private?",
          answer: "Yes, your therapy records are protected by federal and state confidentiality laws including HIPAA. We maintain strict protocols for storing and accessing your information. Records are only shared with your written consent or in limited situations required by law (such as court orders or imminent safety concerns)."
        },
        {
          question: "Is online therapy secure?",
          answer: "Absolutely. We use HIPAA-compliant video technology with end-to-end encryption. Your sessions cannot be accessed by unauthorized parties. We recommend using a private space and headphones for additional privacy on your end. Our platform is specifically designed for healthcare and meets all federal security requirements."
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
          "text": faq.answer.replace(/<[^>]*>/g, '') // Strip HTML for schema
        }
      }))
    )
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="FAQ - Frequently Asked Questions | Coping and Healing Counseling"
        description="Find answers to common questions about our online therapy services, insurance coverage, and mental health support. Get instant answers about therapy costs, getting started, and more."
        keywords="therapy FAQ, online therapy questions, therapy cost, insurance coverage, mental health questions, therapy answers, does insurance cover therapy, how does online therapy work"
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
                  Find answers to common questions about Coping and Healing Counseling therapy services
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
                                <p 
                                  className="text-muted-foreground leading-relaxed text-base"
                                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                                />
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
                        <a href="tel:404-832-0102" className="text-muted-foreground hover:text-primary transition-colors">(404) 832-0102</a>
                      </div>
                      <div>
                        <p className="font-medium">Email Support</p>
                        <p className="text-muted-foreground">support@chctherapy.com</p>
                      </div>
                      <div>
                        <p className="font-medium">Hours</p>
                        <p className="text-muted-foreground">7am-7pm, 7 days a week</p>
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
