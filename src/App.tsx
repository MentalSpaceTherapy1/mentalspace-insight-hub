import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import FormIntegration from "./components/FormIntegration";
import Admin from "./pages/Admin";
// ... keep existing imports ...
import Index from "./pages/Index";
import OnlineTherapy from "./pages/OnlineTherapy";
import CouplesTherapy from "./pages/CouplesTherapy";
import TeenTherapy from "./pages/TeenTherapy";
import LifeCoaching from "./pages/LifeCoaching";
import RelationshipCoaching from "./pages/RelationshipCoaching";
import CoachingServices from "./pages/CoachingServices";
import Insurance from "./pages/Insurance";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import Career from "./pages/Career";
import EmergencyResources from "./pages/EmergencyResources";
import GetStarted from "./pages/GetStarted";
import InsuranceProvider from "./pages/InsuranceProvider";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";
import TherapistMatching from "./pages/TherapistMatching";
import CareerApplication from "./pages/CareerApplication";
import MentalHealthLibrary from "./pages/MentalHealthLibrary";
import MentalHealthTests from "./pages/MentalHealthTests";
import AssessmentContact from "./pages/AssessmentContact";
import ThankYou from "./pages/ThankYou";
import Blog from "./pages/Blog";
import AnxietyUnderstanding from "./pages/blog/AnxietyUnderstanding";
import DepressionBreakingStigma from "./pages/blog/DepressionBreakingStigma";
import OnlineTherapyBenefits from "./pages/blog/OnlineTherapyBenefits";
import CouplesTherapyCommunication from "./pages/blog/CouplesTherapyCommunication";
import TeenMentalHealth from "./pages/blog/TeenMentalHealth";
import PTSDRecovery from "./pages/blog/PTSDRecovery";
import Depression from "./pages/conditions/Depression";
import Anxiety from "./pages/conditions/Anxiety";
import ADHD from "./pages/conditions/ADHD";
import PTSD from "./pages/conditions/PTSD";
import BipolarDisorder from "./pages/conditions/BipolarDisorder";
import BorderlinePersonalityDisorder from "./pages/conditions/BorderlinePersonalityDisorder";
import NarcissisticPersonalityDisorder from "./pages/conditions/NarcissisticPersonalityDisorder";
import DissociativeIdentityDisorder from "./pages/conditions/DissociativeIdentityDisorder";
import OppositionalDefiantDisorder from "./pages/conditions/OppositionalDefiantDisorder";
import BodyDysmorphicDisorder from "./pages/conditions/BodyDysmorphicDisorder";
import PanicDisorder from "./pages/conditions/PanicDisorder";
import SocialAnxietyDisorder from "./pages/conditions/SocialAnxietyDisorder";
import ObsessiveCompulsiveDisorder from "./pages/conditions/ObsessiveCompulsiveDisorder";
import AntisocialPersonalityDisorder from "./pages/conditions/AntisocialPersonalityDisorder";
import AdjustmentDisorder from "./pages/conditions/AdjustmentDisorder";
import SubstanceUseDisorder from "./pages/conditions/SubstanceUseDisorder";
import Anorexia from "./pages/conditions/Anorexia";
import Codependency from "./pages/conditions/Codependency";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <FormIntegration>
            <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/" element={<Index />} />
            <Route path="/online-therapy" element={<OnlineTherapy />} />
            <Route path="/couples-therapy" element={<CouplesTherapy />} />
            <Route path="/teen-therapy" element={<TeenTherapy />} />
            <Route path="/life-coaching" element={<LifeCoaching />} />
            <Route path="/relationship-coaching" element={<RelationshipCoaching />} />
            <Route path="/coaching-services" element={<CoachingServices />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/insurance/:provider" element={<InsuranceProvider />} />
            <Route path="/insurance/humana" element={<InsuranceProvider />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/career" element={<Career />} />
            <Route path="/career-application" element={<CareerApplication />} />
            <Route path="/emergency-resources" element={<EmergencyResources />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/therapist-matching" element={<TherapistMatching />} />
            <Route path="/mental-health-library" element={<MentalHealthLibrary />} />
            <Route path="/mental-health-tests" element={<MentalHealthTests />} />
            <Route path="/assessment-contact" element={<AssessmentContact />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/understanding-anxiety" element={<AnxietyUnderstanding />} />
            <Route path="/blog/depression-breaking-stigma" element={<DepressionBreakingStigma />} />
            <Route path="/blog/online-therapy-benefits" element={<OnlineTherapyBenefits />} />
            <Route path="/blog/couples-therapy-communication" element={<CouplesTherapyCommunication />} />
            <Route path="/blog/teen-mental-health" element={<TeenMentalHealth />} />
            <Route path="/blog/ptsd-recovery" element={<PTSDRecovery />} />
            <Route path="/mental-health-library/depression" element={<Depression />} />
            <Route path="/mental-health-library/anxiety" element={<Anxiety />} />
            <Route path="/mental-health-library/adhd" element={<ADHD />} />
            <Route path="/mental-health-library/ptsd" element={<PTSD />} />
            <Route path="/mental-health-library/bipolar-disorder" element={<BipolarDisorder />} />
            <Route path="/mental-health-library/borderline-personality-disorder" element={<BorderlinePersonalityDisorder />} />
            <Route path="/mental-health-library/narcissistic-personality-disorder" element={<NarcissisticPersonalityDisorder />} />
            <Route path="/mental-health-library/dissociative-identity-disorder" element={<DissociativeIdentityDisorder />} />
            <Route path="/mental-health-library/oppositional-defiant-disorder" element={<OppositionalDefiantDisorder />} />
            <Route path="/mental-health-library/body-dysmorphic-disorder" element={<BodyDysmorphicDisorder />} />
            <Route path="/mental-health-library/panic-disorder" element={<PanicDisorder />} />
            <Route path="/mental-health-library/social-anxiety-disorder" element={<SocialAnxietyDisorder />} />
            <Route path="/mental-health-library/obsessive-compulsive-disorder" element={<ObsessiveCompulsiveDisorder />} />
            <Route path="/mental-health-library/antisocial-personality-disorder" element={<AntisocialPersonalityDisorder />} />
            <Route path="/mental-health-library/adjustment-disorder" element={<AdjustmentDisorder />} />
            <Route path="/mental-health-library/substance-use-disorder" element={<SubstanceUseDisorder />} />
            <Route path="/mental-health-library/anorexia" element={<Anorexia />} />
            <Route path="/mental-health-library/co-dependency" element={<Codependency />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            </Routes>
          </FormIntegration>
        </BrowserRouter>
      </TooltipProvider>
  </QueryClientProvider>
);

export default App;
