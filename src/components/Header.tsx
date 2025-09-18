import { Button } from "@/components/ui/button";
import { Phone, Menu, ChevronDown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import ResponsiveImage from "@/components/ResponsiveImage";
import chcLogo from "@/assets/chc-logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-gradient-to-r from-background/95 via-background/98 to-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      
      <div className="container relative flex h-20 items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 group">
          <div className="relative">
            <ResponsiveImage
              src={chcLogo} 
              alt="Coping and Healing Counseling - Professional Online Therapy and Mental Health Services" 
              className="max-h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              width={200}
              height={48}
              sizes="200px"
              loading="eager"
              priority={true}
              fetchPriority="high"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link 
            to="/" 
            className="relative px-4 py-2 text-base font-medium text-foreground/80 hover:text-foreground transition-all duration-300 group"
          >
            <span className="relative z-10">Home</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" />
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="relative flex items-center space-x-1 px-4 py-2 text-base font-medium text-foreground/80 hover:text-foreground transition-all duration-300 group border-none bg-transparent focus:outline-none">
              <span className="relative z-10">Services</span>
              <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 bg-card/95 backdrop-blur-xl border border-border/50 shadow-2xl rounded-xl p-2 animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl pointer-events-none" />
              <DropdownMenuItem asChild>
                <Link to="/online-therapy" className="relative w-full cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-200">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span>Online Therapy</span>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/couples-therapy" className="relative w-full cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-200">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span>Couples Therapy</span>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/teen-therapy" className="relative w-full cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-200">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span>Teen Therapy</span>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/life-coaching" className="relative w-full cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-200">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span>Life Coaching</span>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/relationship-coaching" className="relative w-full cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-200">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span>Relationship Coaching</span>
                  </div>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="relative flex items-center space-x-1 px-4 py-2 text-base font-medium text-foreground/80 hover:text-foreground transition-all duration-300 group border-none bg-transparent focus:outline-none">
              <span className="relative z-10">Resources</span>
              <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 bg-card/95 backdrop-blur-xl border border-border/50 shadow-2xl rounded-xl p-2 animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl pointer-events-none" />
              <DropdownMenuItem asChild>
                <Link to="/mental-health-library" className="relative w-full cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-200">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span>Mental Health Library</span>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/mental-health-tests" className="relative w-full cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-200">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span>Mental Health Tests</span>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/blog" className="relative w-full cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-200">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span>Blog</span>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/insurance" className="relative w-full cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-200">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span>Insurance</span>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/faq" className="relative w-full cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-200">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span>FAQ</span>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/emergency-resources" className="relative w-full cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-200">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span>Emergency Resources</span>
                  </div>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link 
            to="/contact-us" 
            className="relative px-4 py-2 text-base font-medium text-foreground/80 hover:text-foreground transition-all duration-300 group"
          >
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" />
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Phone */}
          <div className="hidden lg:flex items-center space-x-2 px-3 py-2 rounded-lg bg-gradient-to-r from-muted/30 to-muted/10 border border-border/30">
            <Phone className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground/90">404-832-0102</span>
          </div>
          
          <Link to="/therapist-matching">
            <Button variant="hero" size="sm" className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Book Appointment
            </Button>
          </Link>
          
          {/* Discrete Admin Link */}
          <Link 
            to="/admin" 
            className="hidden md:block text-xs text-muted-foreground hover:text-primary transition-colors duration-200 px-2 py-1 rounded opacity-50 hover:opacity-100"
            title="Admin Access"
          >
            Admin
          </Link>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-t border-border/40 animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />
          <div className="container relative py-6 space-y-1">
            <Link 
              to="/" 
              className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="space-y-1 pl-4">
              <p className="px-4 py-2 text-xs text-muted-foreground uppercase tracking-wider font-semibold">Services</p>
              <Link 
                to="/online-therapy" 
                className="flex items-center space-x-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles className="h-4 w-4" />
                <span>Online Therapy</span>
              </Link>
              <Link 
                to="/couples-therapy" 
                className="flex items-center space-x-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles className="h-4 w-4" />
                <span>Couples Therapy</span>
              </Link>
              <Link 
                to="/teen-therapy" 
                className="flex items-center space-x-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles className="h-4 w-4" />
                <span>Teen Therapy</span>
              </Link>
              <Link 
                to="/life-coaching" 
                className="flex items-center space-x-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles className="h-4 w-4" />
                <span>Life Coaching</span>
              </Link>
              <Link 
                to="/relationship-coaching" 
                className="flex items-center space-x-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles className="h-4 w-4" />
                <span>Relationship Coaching</span>
              </Link>
              
              <p className="px-4 py-2 text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-4">Resources</p>
              <Link 
                to="/mental-health-library" 
                className="flex items-center space-x-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles className="h-4 w-4" />
                <span>Mental Health Library</span>
              </Link>
              <Link 
                to="/mental-health-tests" 
                className="flex items-center space-x-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles className="h-4 w-4" />
                <span>Mental Health Tests</span>
              </Link>
              <Link 
                to="/blog" 
                className="flex items-center space-x-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles className="h-4 w-4" />
                <span>Blog</span>
              </Link>
              <Link 
                to="/insurance" 
                className="flex items-center space-x-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles className="h-4 w-4" />
                <span>Insurance</span>
              </Link>
              <Link 
                to="/faq" 
                className="flex items-center space-x-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles className="h-4 w-4" />
                <span>FAQ</span>
              </Link>
              <Link 
                to="/emergency-resources" 
                className="flex items-center space-x-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles className="h-4 w-4" />
                <span>Emergency Resources</span>
              </Link>
            </div>
            <Link 
              to="/contact-us" 
              className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <div className="flex items-center space-x-2 px-4 py-3 rounded-lg bg-gradient-to-r from-muted/20 to-muted/10 border border-border/20 mx-4 mt-4">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">404-832-0102</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;