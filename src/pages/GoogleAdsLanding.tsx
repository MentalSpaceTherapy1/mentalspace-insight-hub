import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SEOHead from '@/components/SEOHead';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import { useToast } from '@/hooks/use-toast';
import { Shield, Clock, Video, CheckCircle2, Phone, Star, ArrowRight, Heart } from 'lucide-react';
import chcLogo from '@/assets/chc-logo.png';
const GoogleAdsLanding = () => {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const {
    submitForm,
    isSubmitting
  } = useFormSubmission();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    appointmentPreference: '',
    concern: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.state) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    const result = await submitForm('therapist_matching', {
      firstName: formData.name.split(' ')[0],
      lastName: formData.name.split(' ').slice(1).join(' ') || '',
      email: formData.email,
      phone: formData.phone,
      state: formData.state,
      appointmentPreference: formData.appointmentPreference,
      concerns: formData.concern,
      source: 'google_ads_landing'
    });
    if (result.success) {
      navigate('/thank-you');
    } else {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive"
      });
    }
  };
  return <>
      <SEOHead title="Online Therapy in Georgia | Free Consultation | CHC" description="Start online therapy in Georgia today. Insurance accepted, same-week appointments available. Licensed therapists ready to help. Free consultation." keywords="online therapy Georgia, teletherapy GA, virtual counseling, mental health support, therapist near me" canonicalUrl="https://chctherapy.com/start" />
      
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/10">
        {/* Minimal Header */}
        <header className="py-4 px-6 border-b border-border/50 bg-background/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <img src={chcLogo} alt="CHC Therapy" className="h-10 w-auto" />
            <a href="tel:+14048320102" className="flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors">
              <Phone className="h-5 w-5" />
              <span className="hidden sm:inline">(404) 832-0102</span>
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <main className="px-4 py-8 md:py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              
              {/* Left Column - Content */}
              <div className="space-y-6 lg:space-y-8">
                {/* Trust Badge */}
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <Shield className="h-4 w-4" />
                  Licensed Georgia Therapists
                </div>

                {/* Main Headline */}
                <div className="space-y-4">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                    Start Feeling Better with
                    <span className="text-primary block">Online Therapy</span>
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                    Connect with a licensed therapist from the comfort of your home. 
                    Same-week appointments available across Georgia.
                  </p>
                </div>

                {/* Value Props */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
                    <div className="p-2 rounded-lg bg-green-500/10">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Insurance Accepted</p>
                      <p className="text-sm text-muted-foreground">Caresource, Amerigroup, Peach State and more.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
                    <div className="p-2 rounded-lg bg-blue-500/10">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Same-Week Appts</p>
                      <p className="text-sm text-muted-foreground">Don't wait weeks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
                    <div className="p-2 rounded-lg bg-purple-500/10">
                      <Video className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Free Consultation</p>
                      <p className="text-sm text-muted-foreground">No commitment</p>
                    </div>
                  </div>
                </div>

                {/* Social Proof */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/30">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-background flex items-center justify-center">
                        <Heart className="h-4 w-4 text-primary" />
                      </div>)}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Trusted by <span className="font-semibold text-foreground">500+</span> Georgia families
                    </p>
                  </div>
                </div>

                {/* What We Help With */}
                <div className="space-y-3">
                  <p className="font-medium text-foreground">We can help with:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Anxiety', 'Depression', 'PTSD', 'ADHD', 'Bipolar', 'Stress', 'Grief', 'Relationships', 'Trauma', 'Life Changes', 'Self-Esteem', 'Family Issues', 'And More'].map(item => <span key={item} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                        {item}
                      </span>)}
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:sticky lg:top-8">
                <Card className="p-6 md:p-8 shadow-2xl border-2 border-primary/20 bg-card">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-foreground">
                      Get Your Free Consultation
                    </h2>
                    <p className="text-muted-foreground mt-2">
                      Takes less than 2 minutes
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input name="name" placeholder="Your full name *" value={formData.name} onChange={handleInputChange} className="h-12 text-base" required />
                    </div>
                    
                    <div>
                      <Input name="email" type="email" placeholder="Email address *" value={formData.email} onChange={handleInputChange} className="h-12 text-base" required />
                    </div>
                    
                    <div>
                      <Input name="phone" type="tel" placeholder="Phone number *" value={formData.phone} onChange={handleInputChange} className="h-12 text-base" required />
                    </div>
                    
                    <div>
                      <Select value={formData.state} onValueChange={value => setFormData(prev => ({
                      ...prev,
                      state: value
                    }))}>
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder="State *" />
                        </SelectTrigger>
                        <SelectContent className="max-h-[300px] bg-popover">
                          <SelectItem value="AL">Alabama</SelectItem>
                          <SelectItem value="AK">Alaska</SelectItem>
                          <SelectItem value="AZ">Arizona</SelectItem>
                          <SelectItem value="AR">Arkansas</SelectItem>
                          <SelectItem value="CA">California</SelectItem>
                          <SelectItem value="CO">Colorado</SelectItem>
                          <SelectItem value="CT">Connecticut</SelectItem>
                          <SelectItem value="DE">Delaware</SelectItem>
                          <SelectItem value="FL">Florida</SelectItem>
                          <SelectItem value="GA">Georgia</SelectItem>
                          <SelectItem value="HI">Hawaii</SelectItem>
                          <SelectItem value="ID">Idaho</SelectItem>
                          <SelectItem value="IL">Illinois</SelectItem>
                          <SelectItem value="IN">Indiana</SelectItem>
                          <SelectItem value="IA">Iowa</SelectItem>
                          <SelectItem value="KS">Kansas</SelectItem>
                          <SelectItem value="KY">Kentucky</SelectItem>
                          <SelectItem value="LA">Louisiana</SelectItem>
                          <SelectItem value="ME">Maine</SelectItem>
                          <SelectItem value="MD">Maryland</SelectItem>
                          <SelectItem value="MA">Massachusetts</SelectItem>
                          <SelectItem value="MI">Michigan</SelectItem>
                          <SelectItem value="MN">Minnesota</SelectItem>
                          <SelectItem value="MS">Mississippi</SelectItem>
                          <SelectItem value="MO">Missouri</SelectItem>
                          <SelectItem value="MT">Montana</SelectItem>
                          <SelectItem value="NE">Nebraska</SelectItem>
                          <SelectItem value="NV">Nevada</SelectItem>
                          <SelectItem value="NH">New Hampshire</SelectItem>
                          <SelectItem value="NJ">New Jersey</SelectItem>
                          <SelectItem value="NM">New Mexico</SelectItem>
                          <SelectItem value="NY">New York</SelectItem>
                          <SelectItem value="NC">North Carolina</SelectItem>
                          <SelectItem value="ND">North Dakota</SelectItem>
                          <SelectItem value="OH">Ohio</SelectItem>
                          <SelectItem value="OK">Oklahoma</SelectItem>
                          <SelectItem value="OR">Oregon</SelectItem>
                          <SelectItem value="PA">Pennsylvania</SelectItem>
                          <SelectItem value="RI">Rhode Island</SelectItem>
                          <SelectItem value="SC">South Carolina</SelectItem>
                          <SelectItem value="SD">South Dakota</SelectItem>
                          <SelectItem value="TN">Tennessee</SelectItem>
                          <SelectItem value="TX">Texas</SelectItem>
                          <SelectItem value="UT">Utah</SelectItem>
                          <SelectItem value="VT">Vermont</SelectItem>
                          <SelectItem value="VA">Virginia</SelectItem>
                          <SelectItem value="WA">Washington</SelectItem>
                          <SelectItem value="WV">West Virginia</SelectItem>
                          <SelectItem value="WI">Wisconsin</SelectItem>
                          <SelectItem value="WY">Wyoming</SelectItem>
                          <SelectItem value="DC">Washington D.C.</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Select value={formData.appointmentPreference} onValueChange={value => setFormData(prev => ({
                      ...prev,
                      appointmentPreference: value
                    }))}>
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder="When would you like to start? (optional)" />
                        </SelectTrigger>
                        <SelectContent className="bg-popover">
                          <SelectItem value="asap">As soon as possible</SelectItem>
                          <SelectItem value="this_week">This week</SelectItem>
                          <SelectItem value="next_week">Next week</SelectItem>
                          <SelectItem value="flexible">I'm flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Textarea name="concern" placeholder="What brings you to therapy? (optional)" value={formData.concern} onChange={handleInputChange} className="min-h-[80px] text-base resize-none" />
                    </div>

                    <Button type="submit" size="lg" className="w-full h-14 text-lg font-semibold group" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : <>
                          Get My Free Consultation
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </>}
                    </Button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span>Your information is 100% confidential</span>
                    </div>
                  </div>

                  {/* Urgency */}
                  <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/20 text-center">
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">Limited availability</span> — We have openings this week
                    </p>
                  </div>
                </Card>

                {/* Mobile CTA */}
                <div className="mt-4 lg:hidden">
                  <a href="tel:+14048320102" className="flex items-center justify-center gap-2 w-full p-4 rounded-xl bg-secondary text-secondary-foreground font-semibold">
                    <Phone className="h-5 w-5" />
                    Or call us: (404) 832-0102
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Simple Footer */}
        <footer className="py-6 px-4 border-t border-border/50 bg-background/80">
          <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} CHC Therapy. Licensed in Georgia.</p>
            <p className="mt-1">
              <a href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</a>
              {' · '}
              <a href="/terms-and-conditions" className="hover:text-foreground transition-colors">Terms</a>
            </p>
          </div>
        </footer>
      </div>
    </>;
};
export default GoogleAdsLanding;