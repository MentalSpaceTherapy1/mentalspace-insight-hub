import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <img 
              src="/lovable-uploads/15cbf558-6b23-4694-9684-232897817b20.png" 
              alt="MentalSpace Therapy" 
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-background/80 mb-4">
              Professional online therapy and life coaching that fits your schedule.
            </p>
            <div className="space-y-2 text-sm text-background/70">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>404-832-0102</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@chctherapy.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Alpharetta, GA 30022</span>
              </div>
            </div>
          </div>

          {/* Therapy Services */}
          <div>
            <h3 className="font-semibold mb-4">Therapy Services</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary-light transition-colors">Individual Therapy</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Couples Therapy</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Teen Therapy</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Online Therapy</a></li>
            </ul>
          </div>

          {/* Coaching Services */}
          <div>
            <h3 className="font-semibold mb-4">Coaching Services</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-secondary-light transition-colors">Life Coaching</a></li>
              <li><a href="#" className="hover:text-secondary-light transition-colors">Relationship Coaching</a></li>
              <li><a href="#" className="hover:text-secondary-light transition-colors">Career Coaching</a></li>
              <li><a href="#" className="hover:text-secondary-light transition-colors">Goal Setting</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Connected</h3>
            <p className="text-background/80 mb-4 text-sm">
              Subscribe to our newsletter for mental health tips and updates.
            </p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button variant="secondary" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-background/70">
          <p>&copy; 2025 MentalSpace Therapy. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-background transition-colors">Emergency Resources</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;