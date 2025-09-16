import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Coping & Healing</h3>
            <p className="text-sm text-muted-foreground">
              Your Trusted Online Therapy and Life/Business Coach Platform.
            </p>
            <p className="text-sm text-red-600 font-medium">
              If you are in a crisis or need immediate help, please contact your local emergency services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Alpharetta, GA 30022</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>404-832-0102</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>support@chctherapy.com</span>
              </div>
            </div>
          </div>

          {/* Therapy Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Therapy Services</h3>
            <div className="space-y-2">
              <Link to="/online-therapy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Online Therapy
              </Link>
              <Link to="/couples-therapy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Couples Therapy
              </Link>
              <Link to="/teen-therapy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Teen Therapy
              </Link>
            </div>
          </div>

          {/* Coaching Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Coaching Services</h3>
            <div className="space-y-2">
              <Link to="/life-coaching" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Life Coaching
              </Link>
              <Link to="/relationship-coaching" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Relationship Coaching
              </Link>
            </div>

            <h4 className="text-md font-semibold mt-6">Resources</h4>
            <div className="space-y-2">
              <Link to="/insurance" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Insurance Coverage
              </Link>
              <Link to="/mental-health-library" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Mental Health Library
              </Link>
              <Link to="/mental-health-tests" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Free Mental Health Tests
              </Link>
              <Link to="/blog" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/emergency-resources" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Emergency Resources
              </Link>
            </div>
          </div>

          {/* About & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About</h3>
            <div className="space-y-2">
              <Link to="/career" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Career
              </Link>
              <Link to="/faq" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link to="/privacy-policy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms and Conditions
              </Link>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-md font-semibold mb-3">Stay Connected</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Subscribe for mental health tips and insights
              </p>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="text-sm"
                />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-background">
        <div className="container mx-auto px-4 py-4">
          {/* HTML Sitemap for SEO */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Complete Site Map</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 text-xs">
              <div className="space-y-1">
                <h5 className="font-semibold text-foreground">Main Pages</h5>
                <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">Home</Link>
                <Link to="/contact-us" className="block text-muted-foreground hover:text-primary transition-colors">Contact</Link>
                <Link to="/get-started" className="block text-muted-foreground hover:text-primary transition-colors">Get Started</Link>
                <Link to="/therapist-matching" className="block text-muted-foreground hover:text-primary transition-colors">Book Appointment</Link>
              </div>
              
              <div className="space-y-1">
                <h5 className="font-semibold text-foreground">Therapy Services</h5>
                <Link to="/online-therapy" className="block text-muted-foreground hover:text-primary transition-colors">Online Therapy</Link>
                <Link to="/couples-therapy" className="block text-muted-foreground hover:text-primary transition-colors">Couples Therapy</Link>
                <Link to="/teen-therapy" className="block text-muted-foreground hover:text-primary transition-colors">Teen Therapy</Link>
                <Link to="/life-coaching" className="block text-muted-foreground hover:text-primary transition-colors">Life Coaching</Link>
                <Link to="/relationship-coaching" className="block text-muted-foreground hover:text-primary transition-colors">Relationship Coaching</Link>
                <Link to="/coaching-services" className="block text-muted-foreground hover:text-primary transition-colors">All Coaching</Link>
              </div>
              
              <div className="space-y-1">
                <h5 className="font-semibold text-foreground">Resources</h5>
                <Link to="/mental-health-library" className="block text-muted-foreground hover:text-primary transition-colors">Health Library</Link>
                <Link to="/mental-health-tests" className="block text-muted-foreground hover:text-primary transition-colors">Mental Health Tests</Link>
                <Link to="/blog" className="block text-muted-foreground hover:text-primary transition-colors">Blog</Link>
                <Link to="/insurance" className="block text-muted-foreground hover:text-primary transition-colors">Insurance</Link>
                <Link to="/emergency-resources" className="block text-muted-foreground hover:text-primary transition-colors">Emergency Help</Link>
                <Link to="/faq" className="block text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
              </div>
              
              <div className="space-y-1">
                <h5 className="font-semibold text-foreground">Conditions</h5>
                <Link to="/mental-health-library/depression" className="block text-muted-foreground hover:text-primary transition-colors">Depression</Link>
                <Link to="/mental-health-library/anxiety" className="block text-muted-foreground hover:text-primary transition-colors">Anxiety</Link>
                <Link to="/mental-health-library/adhd" className="block text-muted-foreground hover:text-primary transition-colors">ADHD</Link>
              </div>
              
              <div className="space-y-1">
                <h5 className="font-semibold text-foreground">Company</h5>
                <Link to="/career" className="block text-muted-foreground hover:text-primary transition-colors">Careers</Link>
                <Link to="/career-application" className="block text-muted-foreground hover:text-primary transition-colors">Apply Now</Link>
                <Link to="/privacy-policy" className="block text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
                <Link to="/terms-conditions" className="block text-muted-foreground hover:text-primary transition-colors">Terms</Link>
              </div>
              
              <div className="space-y-1">
                <h5 className="font-semibold text-foreground">Support</h5>
                <Link to="/assessment-contact" className="block text-muted-foreground hover:text-primary transition-colors">Assessment Help</Link>
                <Link to="/thank-you" className="block text-muted-foreground hover:text-primary transition-colors">Thank You</Link>
              </div>
            </div>
          </div>
          
          <p className="text-center text-sm text-muted-foreground">
            Copyright 2025 | Coping & Healing | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;