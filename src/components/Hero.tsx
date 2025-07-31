import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"></div>
      </div>

      <div className="container relative px-4">
        <div className="mx-auto max-w-4xl text-center">
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

          <div className="mb-12 text-lg font-medium text-foreground">
            What kind of service are you looking for?
          </div>

          {/* Service buttons */}
          <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            <Link to="/online-therapy">
              <Button variant="service" size="lg" className="h-16 flex-col w-full">
                Individual
                <span className="text-sm font-normal text-muted-foreground">Therapy</span>
              </Button>
            </Link>
            <Link to="/couples-therapy">
              <Button variant="service" size="lg" className="h-16 flex-col w-full">
                Couple
                <span className="text-sm font-normal text-muted-foreground">Therapy</span>
              </Button>
            </Link>
            <Link to="/teen-therapy">
              <Button variant="service" size="lg" className="h-16 flex-col w-full">
                Teen
                <span className="text-sm font-normal text-muted-foreground">Therapy</span>
              </Button>
            </Link>
            <Link to="/life-coaching">
              <Button variant="service" size="lg" className="h-16 flex-col w-full">
                Life
                <span className="text-sm font-normal text-muted-foreground">Coaching</span>
              </Button>
            </Link>
          </div>

          {/* Ultra Modern Insurance Section */}
          <div className="bg-gradient-to-br from-white/90 via-blue-50/80 to-green-50/80 backdrop-blur-xl border-2 border-white/40 rounded-3xl p-10 shadow-modern hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
            <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text mb-10 text-center">
              We accept most major insurance plans and self-pay
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
              <Link to="/insurance/caresource" className="group">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 border border-blue-200">
                  <div className="text-center font-bold text-white">
                    CareSource
                  </div>
                </div>
              </Link>
              <Link to="/insurance/amerigroup" className="group">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 border border-purple-200">
                  <div className="text-center font-bold text-white">
                    Amerigroup
                  </div>
                </div>
              </Link>
              <Link to="/insurance/bluecross-blueshield" className="group">
                <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 border border-indigo-200">
                  <div className="text-center font-bold text-white">
                    BlueCross BlueShield
                  </div>
                </div>
              </Link>
              <Link to="/insurance/aetna" className="group">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 border border-green-200">
                  <div className="text-center font-bold text-white">
                    Aetna
                  </div>
                </div>
              </Link>
              <Link to="/insurance/cigna" className="group">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 border border-orange-200">
                  <div className="text-center font-bold text-white">
                    Cigna
                  </div>
                </div>
              </Link>
              <Link to="/insurance/optum" className="group">
                <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 border border-teal-200">
                  <div className="text-center font-bold text-white">
                    Optum
                  </div>
                </div>
              </Link>
              <Link to="/insurance" className="group">
                <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 border border-pink-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="text-center font-bold text-white relative z-10">
                    And more...
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