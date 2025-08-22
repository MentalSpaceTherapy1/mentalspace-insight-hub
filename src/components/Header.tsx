import { Button } from "@/components/ui/button";
import { Phone, Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img 
              src="/lovable-uploads/15cbf558-6b23-4694-9684-232897817b20.png" 
              alt="MentalSpace Therapy" 
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <span>Services</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-background border shadow-lg z-50">
              <DropdownMenuItem asChild>
                <Link to="/online-therapy" className="w-full cursor-pointer">
                  Online Therapy
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/couples-therapy" className="w-full cursor-pointer">
                  Couples Therapy
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/teen-therapy" className="w-full cursor-pointer">
                  Teen Therapy
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/life-coaching" className="w-full cursor-pointer">
                  Life Coaching
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/relationship-coaching" className="w-full cursor-pointer">
                  Relationship Coaching
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/coaching-services" className="w-full cursor-pointer">
                  Coaching Services
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/contact-us" className="text-foreground hover:text-primary transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* CTA Section */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>404-832-0102</span>
          </div>
          <Link to="/admin">
            <Button variant="outline" size="sm">
              Admin Login
            </Button>
          </Link>
          <Link to="/therapist-matching">
            <Button variant="hero" size="lg">
              Request an Appointment
            </Button>
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container py-4 space-y-2">
            <Link 
              to="/" 
              className="block py-2 text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="space-y-1 pl-4">
              <Link 
                to="/online-therapy" 
                className="block py-2 text-sm text-muted-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Online Therapy
              </Link>
              <Link 
                to="/couples-therapy" 
                className="block py-2 text-sm text-muted-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Couples Therapy
              </Link>
              <Link 
                to="/teen-therapy" 
                className="block py-2 text-sm text-muted-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Teen Therapy
              </Link>
              <Link 
                to="/life-coaching" 
                className="block py-2 text-sm text-muted-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Life Coaching
              </Link>
              <Link 
                to="/relationship-coaching" 
                className="block py-2 text-sm text-muted-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Relationship Coaching
              </Link>
              <Link 
                to="/coaching-services" 
                className="block py-2 text-sm text-muted-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Coaching Services
              </Link>
            </div>
            <Link 
              to="/contact-us" 
              className="block py-2 text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link 
              to="/admin" 
              className="block py-2 text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Admin Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;