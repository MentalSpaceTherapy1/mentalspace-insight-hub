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

          {/* Modern Insurance Section */}
          <div className="bg-white/80 backdrop-blur-lg border border-white/30 rounded-3xl p-8 shadow-modern hover:shadow-xl transition-all duration-300">
            <p className="text-xl font-semibold text-foreground mb-8 text-center">
              We accept most major insurance plans and self-pay
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              <Link to="/insurance/caresource" className="group">
                <div className="bg-white rounded-xl p-4 shadow-card hover:shadow-modern transition-all duration-300 group-hover:scale-105 border border-gray-100">
                  <div className="text-center font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    CareSource
                  </div>
                </div>
              </Link>
              <Link to="/insurance/amerigroup" className="group">
                <div className="bg-white rounded-xl p-4 shadow-card hover:shadow-modern transition-all duration-300 group-hover:scale-105 border border-gray-100">
                  <div className="text-center font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    Amerigroup
                  </div>
                </div>
              </Link>
              <Link to="/insurance/bluecross-blueshield" className="group">
                <div className="bg-white rounded-xl p-4 shadow-card hover:shadow-modern transition-all duration-300 group-hover:scale-105 border border-gray-100">
                  <div className="text-center font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    BlueCross BlueShield
                  </div>
                </div>
              </Link>
              <Link to="/insurance/aetna" className="group">
                <div className="bg-white rounded-xl p-4 shadow-card hover:shadow-modern transition-all duration-300 group-hover:scale-105 border border-gray-100">
                  <div className="text-center font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    Aetna
                  </div>
                </div>
              </Link>
              <Link to="/insurance/cigna" className="group">
                <div className="bg-white rounded-xl p-4 shadow-card hover:shadow-modern transition-all duration-300 group-hover:scale-105 border border-gray-100">
                  <div className="text-center font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    Cigna
                  </div>
                </div>
              </Link>
              <Link to="/insurance/optum" className="group">
                <div className="bg-white rounded-xl p-4 shadow-card hover:shadow-modern transition-all duration-300 group-hover:scale-105 border border-gray-100">
                  <div className="text-center font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    Optum
                  </div>
                </div>
              </Link>
              <Link to="/insurance" className="group">
                <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-4 shadow-card hover:shadow-modern transition-all duration-300 group-hover:scale-105 border border-primary/20">
                  <div className="text-center font-medium text-white">
                    And more...
                  </div>
                </div>
              </Link>
            </div>
            <div className="text-center mt-6">
              <Link to="/insurance" className="text-primary hover:text-primary/80 font-medium underline-offset-4 hover:underline transition-all">
                View all accepted insurance plans →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;