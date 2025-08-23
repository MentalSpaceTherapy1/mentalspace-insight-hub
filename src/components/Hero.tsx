import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import heroImage1 from "@/assets/hero-person-1.jpg";
import heroImage2 from "@/assets/hero-person-2.jpg";
import heroImage3 from "@/assets/hero-person-3.jpg";
import heroImage4 from "@/assets/hero-person-4.jpg";
import heroImage5 from "@/assets/hero-person-5.jpg";
import heroImage6 from "@/assets/hero-person-6.jpg";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5, heroImage6];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const nextIndex = (prev + 1) % heroImages.length;
        console.log(`Hero carousel: switching from image ${prev + 1} to image ${nextIndex + 1}`);
        return nextIndex;
      });
    }, 4000); // Change every 4 seconds
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 lg:py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"></div>
      </div>

      <div className="container relative px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                MentalSpace:
              </span>
              <br />
              Therapy Anytime. Anywhere.
            </h1>
            
            <p className="mb-8 text-xl text-muted-foreground sm:text-2xl">
              Professional online therapy and life coaching that fits your schedule. 
              Connect with licensed therapists from the comfort of your home.
            </p>

            <div className="mb-12">
              <Link to="/therapist-matching">
                <Button size="lg" className="group bg-gradient-to-r from-primary to-secondary text-white font-semibold py-4 px-8 rounded-full hover:shadow-lg transition-all duration-300">
                  Request an Appointment
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right side - Rotating Images */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl">
                {heroImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Mental health therapy success story ${index + 1} - Happy person after online therapy sessions`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                ))}
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10"></div>
              
              {/* Carousel indicators */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-primary scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Insurance Section - Full Width Below */}
        <div className="mt-12 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white/90 via-blue-50/80 to-green-50/80 backdrop-blur-xl border-2 border-white/40 rounded-3xl p-6 shadow-modern hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
            <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text mb-6 text-center">
              We accept most major insurance plans and self-pay
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-6">
              <Link to="/insurance/caresource" className="group">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-4 h-20 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 border border-blue-200">
                  <div className="text-center font-bold text-white text-sm">
                    CareSource
                  </div>
                </div>
              </Link>
              <Link to="/insurance/amerigroup" className="group">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 h-20 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 border border-purple-200">
                  <div className="text-center font-bold text-white text-sm">
                    Amerigroup
                  </div>
                </div>
              </Link>
              <Link to="/insurance/bluecross-blueshield" className="group">
                <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl p-4 h-20 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 border border-indigo-200">
                  <div className="text-center font-bold text-white text-sm">
                    BCBS
                  </div>
                </div>
              </Link>
              <Link to="/insurance/aetna" className="group">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-4 h-20 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 border border-green-200">
                  <div className="text-center font-bold text-white text-sm">
                    Aetna
                  </div>
                </div>
              </Link>
              <Link to="/insurance/cigna" className="group">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-4 h-20 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 border border-orange-200">
                  <div className="text-center font-bold text-white text-sm">
                    Cigna
                  </div>
                </div>
              </Link>
              <Link to="/insurance/optum" className="group">
                <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-4 h-20 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 border border-teal-200">
                  <div className="text-center font-bold text-white text-sm">
                    Optum
                  </div>
                </div>
              </Link>
              <Link to="/insurance/peach-state" className="group">
                <div className="bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl p-4 h-20 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 border border-emerald-200">
                  <div className="text-center font-bold text-white text-sm">
                    Peach State
                  </div>
                </div>
              </Link>
            </div>
            <div className="text-center">
              <Link to="/insurance" className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span>View all accepted insurance plans</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;