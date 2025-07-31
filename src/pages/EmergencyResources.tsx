import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";

const EmergencyResources = () => {
  const emergencyContacts = {
    "United States": [
      { name: "Emergency Services", number: "911" },
      { name: "National Suicide Prevention Lifeline", number: "800-273-8255" },
      { name: "National Domestic Violence Hotline", number: "800-799-7233" },
      { name: "Family Violence Helpline", number: "800-996-6228" },
      { name: "Poison Control", number: "800-222-1222" },
      { name: "Alcoholism & Drug Dependency Hope Line", number: "800-622-2255" },
      { name: "TREVOR Crisis Hotline", number: "866-488-7386" },
      { name: "Trans Lifeline", number: "877-565-8860" }
    ],
    "Canada": [
      { name: "Emergency Services", number: "911" },
      { name: "Canada Suicide Prevention Service", number: "833-456-4566" },
      { name: "Trans Lifeline", number: "877-330-6366" }
    ],
    "United Kingdom & Ireland": [
      { name: "Emergency Services", number: "112/999" },
      { name: "Samaritans", number: "116-123" },
      { name: "Crisis Text Line UK", number: "Text SHOUT to 85258" }
    ],
    "Australia": [
      { name: "Emergency Services", number: "000" },
      { name: "Lifeline Australia", number: "13-11-14" }
    ],
    "New Zealand": [
      { name: "Emergency Services", number: "111" },
      { name: "Lifeline 24/7 Helpline", number: "0800-543-354" },
      { name: "Suicide Crisis Helpline", number: "0508-828-865" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20 px-4 bg-gradient-to-br from-primary-light/20 to-secondary-light/20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Emergency Resources – Need help?
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              If you are in danger, please use these resources immediately
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto space-y-12">
            {Object.entries(emergencyContacts).map(([country, contacts]) => (
              <Card key={country}>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-primary">{country}</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {contacts.map((contact, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded border">
                        <Phone className="h-4 w-4 text-primary" />
                        <div>
                          <p className="font-medium">{contact.name}</p>
                          <p className="text-muted-foreground">{contact.number}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EmergencyResources;