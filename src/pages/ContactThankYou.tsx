import { Link } from "react-router-dom";
import { CheckCircle, MessageSquare, BookOpen, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const ContactThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <SEOHead 
        title="Thank You for Contacting Us - Coping & Healing Therapy"
        description="Thank you for reaching out. We'll get back to you soon."
        noindex={true}
      />
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Thank You Message */}
          <div className="mb-12">
            <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Thank You for Reaching Out!
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              We've received your message and will get back to you as soon as possible.
            </p>
            <p className="text-muted-foreground">
              Our team typically responds within 24-48 hours. In the meantime, explore our resources.
            </p>
          </div>

          {/* Navigation Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">Schedule Therapy</h3>
                <p className="text-muted-foreground mb-6">
                  Ready to get started? Book your first therapy session
                </p>
                <Button asChild className="w-full">
                  <Link to="/therapist-matching">Get Matched</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">Mental Health Library</h3>
                <p className="text-muted-foreground mb-6">
                  Access articles, resources, and tools for your mental wellness
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/mental-health-library">Browse Library</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <FileText className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">Blog & Insights</h3>
                <p className="text-muted-foreground mb-6">
                  Read expert insights and tips for mental health and wellness
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/blog">Read Articles</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Support */}
          <div className="bg-muted/50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Need Immediate Support?</h3>
            <p className="text-muted-foreground mb-6">
              If you're experiencing a mental health crisis, don't wait for our response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="destructive">
                <Link to="/emergency-resources">Crisis Resources</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="tel:988">Call 988 - Suicide & Crisis Lifeline</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactThankYou;
