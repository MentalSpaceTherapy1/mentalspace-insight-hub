import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Comparison = () => {
  const features = [
    "Licensed therapist availability",
    "Life coach access", 
    "Relationship coaching",
    "Messaging anytime",
    "Chat/phone/video sessions",
    "Digital worksheets",
    "Best-fit matching",
    "Ease of switching providers",
    "Access from anywhere"
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-3xl font-bold text-center text-foreground sm:text-4xl">
            MentalSpace vs. In-Office Therapy
          </h2>
          
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="grid grid-cols-3 bg-gradient-to-r from-primary to-secondary text-white">
              <div className="p-6">
                <h3 className="text-lg font-semibold">Features</h3>
              </div>
              <div className="p-6 text-center border-l border-white/20">
                <h3 className="text-lg font-semibold">MentalSpace</h3>
              </div>
              <div className="p-6 text-center border-l border-white/20">
                <h3 className="text-lg font-semibold">In-Office Therapy</h3>
              </div>
            </div>
            
            {features.map((feature, index) => (
              <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-muted/50' : 'bg-white'}`}>
                <div className="p-4 font-medium text-foreground">
                  {feature}
                </div>
                <div className="p-4 text-center border-l border-border">
                  <Check className="h-5 w-5 text-secondary mx-auto" />
                </div>
                <div className="p-4 text-center border-l border-border">
                  {index < 3 || index === 6 ? (
                    <Check className="h-5 w-5 text-secondary mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-destructive mx-auto" />
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <Link to="/get-started">
              <Button size="lg" className="px-8 py-6 text-lg">
                Experience the MentalSpace Advantage
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;