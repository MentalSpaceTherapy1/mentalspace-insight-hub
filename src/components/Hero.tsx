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

          {/* Insurance acceptance */}
          <div className="rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 p-8 shadow-card">
            <p className="mb-6 text-lg font-semibold text-foreground">
              We accept most major insurance plans and self-pay
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 opacity-70">
              <div className="text-sm font-medium text-muted-foreground">CareSource</div>
              <div className="text-sm font-medium text-muted-foreground">Amerigroup</div>
              <div className="text-sm font-medium text-muted-foreground">BlueCross BlueShield</div>
              <div className="text-sm font-medium text-muted-foreground">Aetna</div>
              <div className="text-sm font-medium text-muted-foreground">Cigna</div>
              <div className="text-sm font-medium text-muted-foreground">Optum</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;