import { Button } from "@/components/ui/button";
import { Phone, Menu, ChevronDown, X } from "lucide-react";
import { Link } from "react-router-dom";
import ResponsiveImage from "@/components/ResponsiveImage";
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
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/95 shadow-sm">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <ResponsiveImage 
              src="/lovable-uploads/15cbf558-6b23-4694-9684-232897817b20.png" 
              alt="MentalSpace - Professional Online Therapy and Mental Health Services" 
              className="h-8 w-auto"
              width={58}
              height={32}
              sizes="58px"
              loading="eager"
              priority={true}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link 
              to="/" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              Home
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200">
                Services
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-56 mt-2 bg-white border border-gray-200 shadow-lg rounded-xl z-50 p-2"
                align="start"
              >
                <DropdownMenuItem asChild className="rounded-lg">
                  <Link to="/online-therapy" className="w-full px-3 py-2 text-sm hover:bg-gray-50 rounded-lg cursor-pointer">
                    Online Therapy
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg">
                  <Link to="/couples-therapy" className="w-full px-3 py-2 text-sm hover:bg-gray-50 rounded-lg cursor-pointer">
                    Couples Therapy
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg">
                  <Link to="/teen-therapy" className="w-full px-3 py-2 text-sm hover:bg-gray-50 rounded-lg cursor-pointer">
                    Teen Therapy
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg">
                  <Link to="/life-coaching" className="w-full px-3 py-2 text-sm hover:bg-gray-50 rounded-lg cursor-pointer">
                    Life Coaching
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link 
              to="/contact-us" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA Section */}
          <div className="flex items-center gap-3">
            {/* Phone - Hidden on smaller screens */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-gray-700">404-832-0102</span>
            </div>
            
            {/* Admin Login - Hidden on mobile */}
            <Link to="/admin" className="hidden md:block">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                Admin
              </Button>
            </Link>
            
            {/* Main CTA */}
            <Link to="/therapist-matching">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-200">
                Book Appointment
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-6 py-6">
            <nav className="space-y-1">
              <Link 
                to="/" 
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="space-y-1">
                <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Services
                </div>
                <Link 
                  to="/online-therapy" 
                  className="block px-6 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Online Therapy
                </Link>
                <Link 
                  to="/couples-therapy" 
                  className="block px-6 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Couples Therapy
                </Link>
                <Link 
                  to="/teen-therapy" 
                  className="block px-6 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Teen Therapy
                </Link>
                <Link 
                  to="/life-coaching" 
                  className="block px-6 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Life Coaching
                </Link>
              </div>
              
              <Link 
                to="/contact-us" 
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              
              <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-gray-700">404-832-0102</span>
                </div>
                <Link 
                  to="/admin" 
                  className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin Login
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;