import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/15cbf558-6b23-4694-9684-232897817b20.png" 
            alt="MentalSpace Therapy" 
            className="h-8 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
          <div className="relative group">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
          </div>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact Us</a>
        </nav>

        {/* CTA Section */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>404-832-0102</span>
          </div>
          <Button variant="hero" size="lg">
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;