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
      <div className="container flex h-18 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img 
            src="/lovable-uploads/15cbf558-6b23-4694-9684-232897817b20.png" 
            alt="MentalSpace - Professional Online Therapy and Mental Health Services" 
            className="max-h-10 w-auto object-contain"
            loading="eager"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-base font-medium text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 text-base font-medium text-foreground hover:text-primary transition-colors">
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
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/contact-us" className="text-base font-medium text-foreground hover:text-primary transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Phone */}
          <div className="hidden lg:flex items-center space-x-2 text-foreground">
            <Phone className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">404-832-0102</span>
          </div>
          
          <Link to="/therapist-matching">
            <Button variant="hero" size="sm">
              Book Appointment
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
            </div>
            <Link 
              to="/contact-us" 
              className="block py-2 text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <div className="flex items-center space-x-2 py-2 text-foreground">
              <Phone className="h-4 w-4 text-primary" />
              <span>404-832-0102</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;