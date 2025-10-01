import { Link } from "react-router-dom";
import { CheckCircle, Heart, BookOpen, FileText } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { trackBookAppointmentConversion } from "@/utils/googleTagManager";

const ThankYou = () => {
  // Track conversion when user lands on thank you page
  useEffect(() => {
    trackBookAppointmentConversion();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Thank You Message */}
          <div className="mb-12">
            <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              We've received your information and will be in touch soon to schedule your therapy session.
            </p>
            <p className="text-muted-foreground">
              In the meantime, explore our resources to continue your mental health journey.
            </p>
          </div>

          {/* Navigation Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">Our Services</h3>
                <p className="text-muted-foreground mb-6">
                  Explore our comprehensive therapy and coaching services
                </p>
                <Button asChild className="w-full">
                  <Link to="/online-therapy">View Services</Link>
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
              If you're experiencing a mental health crisis, don't wait for your appointment.
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

export default ThankYou;