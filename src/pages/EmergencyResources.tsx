import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Phone, MessageCircle, Heart, AlertTriangle, Clock, Users, Shield, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import emergencyHero from "@/assets/emergency-hero.jpg";

const EmergencyResources = () => {
  const crisisHotlines = [
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "Free and confidential support for people in distress, 24/7",
      available: "24/7",
      icon: Phone
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "Free crisis support via text message",
      available: "24/7",
      icon: MessageCircle
    },
    {
      name: "National Domestic Violence Hotline",
      number: "1-800-799-7233",
      description: "Support for domestic violence survivors",
      available: "24/7",
      icon: Shield
    },
    {
      name: "LGBTQ National Hotline",
      number: "1-888-843-4564",
      description: "Support for LGBTQ+ individuals",
      available: "Mon-Fri 4pm-12am, Sat 12pm-5pm EST",
      icon: Heart
    }
  ];

  const emergencyContacts = [
    {
      name: "Emergency Services",
      number: "911",
      description: "For immediate life-threatening emergencies",
      icon: AlertTriangle
    },
    {
      name: "MentalSpace Crisis Support",
      number: "404 832 0102",
      description: "Our dedicated crisis support line",
      icon: Phone
    }
  ];

  const onlineResources = [
    {
      name: "SAMHSA Treatment Locator",
      url: "https://findtreatment.samhsa.gov/",
      description: "Find mental health and substance abuse treatment facilities"
    },
    {
      name: "National Alliance on Mental Illness (NAMI)",
      url: "https://nami.org/",
      description: "Support groups and educational resources"
    },
    {
      name: "Crisis Text Line",
      url: "https://crisistextline.org/",
      description: "Text-based crisis support and resources"
    },
    {
      name: "Mental Health America",
      url: "https://mhanational.org/",
      description: "Mental health screening tools and resources"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${emergencyHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6 animate-fade-in">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20">
                <Heart className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Emergency Resources
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in">
              Immediate support when you need it most. You are not alone.
            </p>
            <div className="bg-red-600/20 backdrop-blur-sm border border-red-400/30 rounded-lg p-6 mb-8 animate-fade-in">
              <div className="flex items-center justify-center mb-4">
                <AlertTriangle className="h-8 w-8 text-red-300 mr-3" />
                <h3 className="text-2xl font-bold text-white">Crisis Emergency?</h3>
              </div>
              <p className="text-white/90 text-lg mb-4">
                If you are in immediate danger or having thoughts of self-harm
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="destructive" size="lg" className="bg-red-600 hover:bg-red-700">
                  <a href="tel:911">Call 911</a>
                </Button>
                <Button asChild variant="secondary" size="lg" className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20">
                  <a href="tel:988">Call 988 - Suicide & Crisis Lifeline</a>
                </Button>
              </div>
            </div>
            <Link to="/">
              <Button variant="outline" className="bg-transparent text-white border-white/20 hover:bg-white/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
      </section>

      {/* Crisis Hotlines */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Crisis Hotlines & Support
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                24/7 support lines staffed by trained counselors ready to help
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {crisisHotlines.map((hotline, index) => {
                const IconComponent = hotline.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 rounded-lg p-3">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {hotline.name}
                        </h3>
                        <div className="flex items-center space-x-2 mb-3">
                          <Button asChild variant="outline" size="sm">
                            <a href={`tel:${hotline.number.replace(/\D/g, '')}`}>
                              <Phone className="h-4 w-4 mr-2" />
                              {hotline.number}
                            </a>
                          </Button>
                        </div>
                        <p className="text-muted-foreground mb-2">
                          {hotline.description}
                        </p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {hotline.available}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <Separator className="my-16" />

            {/* Emergency Contacts */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Emergency Contacts
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Direct lines for immediate assistance
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {emergencyContacts.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <Card key={index} className="p-6 bg-red-50 border-red-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="bg-red-100 rounded-lg p-3">
                        <IconComponent className="h-6 w-6 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {contact.name}
                        </h3>
                        <Button asChild variant="destructive" size="lg" className="mb-3">
                          <a href={`tel:${contact.number.replace(/\D/g, '')}`}>
                            <Phone className="h-4 w-4 mr-2" />
                            {contact.number}
                          </a>
                        </Button>
                        <p className="text-muted-foreground">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <Separator className="my-16" />

            {/* Online Resources */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Online Resources
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Additional support and information resources
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {onlineResources.map((resource, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {resource.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {resource.description}
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          Visit Resource
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Additional Support */}
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <div className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Need Ongoing Support?
                </h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Our team of licensed therapists and certified coaches are here to provide ongoing mental health support through your journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/get-started">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Get Started Today
                    </Button>
                  </Link>
                  <Link to="/contact-us">
                    <Button variant="outline" size="lg">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Important Notice */}
            <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-amber-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-amber-800 mb-2">Important Notice</h4>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    These resources are provided for informational purposes and immediate crisis support. They do not replace professional medical advice, diagnosis, or treatment. If you are experiencing a psychiatric emergency, please call 911 or go to your nearest emergency room immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmergencyResources;