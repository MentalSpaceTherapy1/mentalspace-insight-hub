import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
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
import CHCServices from "./pages/CHCServices";
import Insurance from "./pages/Insurance";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import Career from "./pages/Career";
import EmergencyResources from "./pages/EmergencyResources";
import GetStarted from "./pages/GetStarted";
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

// Individual Insurance Pages
import CareSourceInsurance from "./pages/insurance/CareSourceInsurance";
import AmerigroupInsurance from "./pages/insurance/AmerigroupInsurance";
import PeachStateInsurance from "./pages/insurance/PeachStateInsurance";
import OptumInsurance from "./pages/insurance/OptumInsurance";
import BlueCrossInsurance from "./pages/insurance/BlueCrossInsurance";
import AetnaInsurance from "./pages/insurance/AetnaInsurance";
import CignaInsurance from "./pages/insurance/CignaInsurance";
import AlliantInsurance from "./pages/insurance/AlliantInsurance";
import HumanaInsurance from "./pages/insurance/HumanaInsurance";

// Blog Article Pages
import UnderstandingAnxiety from "./pages/blog/UnderstandingAnxiety";
import DepressionAdults from "./pages/blog/DepressionAdults";
import BenefitsOnlineTherapy from "./pages/blog/BenefitsOnlineTherapy";
import CouplesTherapyCommunication from "./pages/blog/CouplesTherapyCommunication";
import TeenMentalHealth from "./pages/blog/TeenMentalHealth";
import PTSDRecovery from "./pages/blog/PTSDRecovery";
import TherapyOnlineInsuranceCoverage from "./pages/blog/TherapyOnlineInsuranceCoverage";

import Depression from "./pages/conditions/Depression";
import Anxiety from "./pages/conditions/Anxiety";
import ADHD from "./pages/conditions/ADHD";
import AntisocialPersonalityDisorder from "./pages/conditions/AntisocialPersonalityDisorder";
import BipolarDisorder from "./pages/conditions/BipolarDisorder";
import BodyDysmorphicDisorder from "./pages/conditions/BodyDysmorphicDisorder";
import BorderlinePersonalityDisorder from "./pages/conditions/BorderlinePersonalityDisorder";
import DissociativeIdentityDisorder from "./pages/conditions/DissociativeIdentityDisorder";
import NarcissisticPersonalityDisorder from "./pages/conditions/NarcissisticPersonalityDisorder";
import ObsessiveCompulsiveDisorder from "./pages/conditions/ObsessiveCompulsiveDisorder";
import OppositionalDefiantDisorder from "./pages/conditions/OppositionalDefiantDisorder";
import PTSD from "./pages/conditions/PTSD";
import PanicDisorder from "./pages/conditions/PanicDisorder";
import SocialAnxietyDisorder from "./pages/conditions/SocialAnxietyDisorder";
import AdjustmentDisorder from "./pages/conditions/AdjustmentDisorder";
import SubstanceUseDisorder from "./pages/conditions/SubstanceUseDisorder";
import Anorexia from "./pages/conditions/Anorexia";
import CoDependency from "./pages/conditions/CoDependency";

// Georgia-specific therapy pages
import AnxietyTherapyGA from "./pages/conditions/AnxietyTherapyGA";
import DepressionTherapyGA from "./pages/conditions/DepressionTherapyGA";
import PTSDTherapyGA from "./pages/conditions/PTSDTherapyGA";
import ADHDTherapyGA from "./pages/conditions/ADHDTherapyGA";
import OCDTherapyGA from "./pages/conditions/OCDTherapyGA";
import BipolarTherapyGA from "./pages/conditions/BipolarTherapyGA";
import SocialAnxietyTherapyGA from "./pages/conditions/SocialAnxietyTherapyGA";
import PerinatalMoodTherapyGA from "./pages/conditions/PerinatalMoodTherapyGA";
import GriefTherapyGA from "./pages/conditions/GriefTherapyGA";
import CouplesTherapyGA from "./pages/conditions/CouplesTherapyGA";
import TeenTherapyGA from "./pages/conditions/TeenTherapyGA";
import LGBTQIATherapyGA from "./pages/conditions/LGBTQIATherapyGA";

// Georgia location pages
import GeorgiaTherapyHub from "./pages/GeorgiaTherapyHub";
import FultonCountyTherapy from "./pages/locations/FultonCountyTherapy";
import LowndesCountyTherapy from "./pages/locations/LowndesCountyTherapy";
import HallCountyTherapy from "./pages/locations/HallCountyTherapy";
import GwinnettCountyTherapy from "./pages/locations/GwinnettCountyTherapy";
import CobbCountyTherapy from "./pages/locations/CobbCountyTherapy";
import DeKalbCountyTherapy from "./pages/locations/DeKalbCountyTherapy";
import ChathamCountyTherapy from "./pages/locations/ChathamCountyTherapy";
import RichmondCountyTherapy from "./pages/locations/RichmondCountyTherapy";
import ClarkeCountyTherapy from "./pages/locations/ClarkeCountyTherapy";
import GlynnCountyTherapy from "./pages/locations/GlynnCountyTherapy";
import ThomasCountyTherapy from "./pages/locations/ThomasCountyTherapy";
import CherokeeCountyTherapy from "./pages/locations/CherokeeCountyTherapy";
import ForsythCountyTherapy from "./pages/locations/ForsythCountyTherapy";
import CamdenCountyTherapy from "./pages/locations/CamdenCountyTherapy";
import ColquittCountyTherapy from "./pages/locations/ColquittCountyTherapy";
import ClaytonCountyTherapy from "./pages/locations/ClaytonCountyTherapy";
import HoustonCountyTherapy from "./pages/locations/HoustonCountyTherapy";
import MuscogeeCountyTherapy from "./pages/locations/MuscogeeCountyTherapy";
import BibbCountyTherapy from "./pages/locations/BibbCountyTherapy";

const queryClient = new QueryClient();

const App = () => {
  // Signal to prerender that the app is ready
  if (typeof window !== 'undefined' && document.readyState === 'complete') {
    setTimeout(() => {
      document.dispatchEvent(new Event('render-event'));
    }, 100);
  }

  return (
    <HelmetProvider>
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
                <Route path="/chc-services" element={<CHCServices />} />
                <Route path="/insurance" element={<Insurance />} />
                
                {/* Individual Insurance Provider Pages */}
                <Route path="/insurance/caresource" element={<CareSourceInsurance />} />
                <Route path="/insurance/amerigroup" element={<AmerigroupInsurance />} />
                <Route path="/insurance/peach-state" element={<PeachStateInsurance />} />
                <Route path="/insurance/optum" element={<OptumInsurance />} />
                <Route path="/insurance/bluecross-blueshield" element={<BlueCrossInsurance />} />
                <Route path="/insurance/blue-cross" element={<BlueCrossInsurance />} />
                <Route path="/insurance/aetna" element={<AetnaInsurance />} />
                <Route path="/insurance/cigna" element={<CignaInsurance />} />
                <Route path="/insurance/alliant" element={<AlliantInsurance />} />
                <Route path="/insurance/humana" element={<HumanaInsurance />} />
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
                
                {/* Blog Article Pages */}
                <Route path="/blog/understanding-anxiety" element={<UnderstandingAnxiety />} />
                <Route path="/blog/depression-adults" element={<DepressionAdults />} />
                <Route path="/blog/benefits-online-therapy" element={<BenefitsOnlineTherapy />} />
                <Route path="/blog/couples-therapy-communication" element={<CouplesTherapyCommunication />} />
                <Route path="/blog/teen-mental-health" element={<TeenMentalHealth />} />
                <Route path="/blog/ptsd-recovery" element={<PTSDRecovery />} />
                <Route path="/blog/therapy-online-insurance-coverage" element={<TherapyOnlineInsuranceCoverage />} />
                
                <Route path="/mental-health-library/depression" element={<Depression />} />
                <Route path="/mental-health-library/anxiety" element={<Anxiety />} />
                <Route path="/mental-health-library/adhd" element={<ADHD />} />
                <Route path="/mental-health-library/antisocial-personality-disorder" element={<AntisocialPersonalityDisorder />} />
                <Route path="/mental-health-library/bipolar-disorder" element={<BipolarDisorder />} />
                <Route path="/mental-health-library/body-dysmorphic-disorder" element={<BodyDysmorphicDisorder />} />
                <Route path="/mental-health-library/borderline-personality-disorder" element={<BorderlinePersonalityDisorder />} />
                <Route path="/mental-health-library/dissociative-identity-disorder" element={<DissociativeIdentityDisorder />} />
                <Route path="/mental-health-library/narcissistic-personality-disorder" element={<NarcissisticPersonalityDisorder />} />
                <Route path="/mental-health-library/obsessive-compulsive-disorder" element={<ObsessiveCompulsiveDisorder />} />
                <Route path="/mental-health-library/oppositional-defiant-disorder" element={<OppositionalDefiantDisorder />} />
                <Route path="/mental-health-library/ptsd" element={<PTSD />} />
                <Route path="/mental-health-library/panic-disorder" element={<PanicDisorder />} />
                <Route path="/mental-health-library/social-anxiety-disorder" element={<SocialAnxietyDisorder />} />
                <Route path="/mental-health-library/adjustment-disorder" element={<AdjustmentDisorder />} />
                <Route path="/mental-health-library/substance-use-disorder" element={<SubstanceUseDisorder />} />
                <Route path="/mental-health-library/anorexia" element={<Anorexia />} />
                <Route path="/mental-health-library/codependency" element={<CoDependency />} />
                
                {/* Georgia-specific therapy service pages */}
                <Route path="/anxiety-therapy-georgia" element={<AnxietyTherapyGA />} />
                <Route path="/depression-therapy-georgia" element={<DepressionTherapyGA />} />
                <Route path="/ptsd-therapy-georgia" element={<PTSDTherapyGA />} />
                <Route path="/adhd-therapy-georgia" element={<ADHDTherapyGA />} />
                <Route path="/ocd-therapy-georgia" element={<OCDTherapyGA />} />
                <Route path="/bipolar-therapy-georgia" element={<BipolarTherapyGA />} />
                <Route path="/social-anxiety-therapy-georgia" element={<SocialAnxietyTherapyGA />} />
                <Route path="/perinatal-mood-therapy-georgia" element={<PerinatalMoodTherapyGA />} />
                <Route path="/grief-therapy-georgia" element={<GriefTherapyGA />} />
                <Route path="/couples-therapy-georgia" element={<CouplesTherapyGA />} />
                <Route path="/teen-therapy-georgia" element={<TeenTherapyGA />} />
                <Route path="/lgbtqia-therapy-georgia" element={<LGBTQIATherapyGA />} />
                
                {/* Georgia location pages */}
                <Route path="/online-therapy-georgia" element={<GeorgiaTherapyHub />} />
          <Route path="/fulton-county-therapy" element={<FultonCountyTherapy />} />
          <Route path="/lowndes-county-therapy" element={<LowndesCountyTherapy />} />
          <Route path="/hall-county-therapy" element={<HallCountyTherapy />} />
          <Route path="/gwinnett-county-therapy" element={<GwinnettCountyTherapy />} />
          <Route path="/cobb-county-therapy" element={<CobbCountyTherapy />} />
          <Route path="/dekalb-county-therapy" element={<DeKalbCountyTherapy />} />
          <Route path="/chatham-county-therapy" element={<ChathamCountyTherapy />} />
          <Route path="/richmond-county-therapy" element={<RichmondCountyTherapy />} />
          <Route path="/clarke-county-therapy" element={<ClarkeCountyTherapy />} />
          <Route path="/glynn-county-therapy" element={<GlynnCountyTherapy />} />
          <Route path="/thomas-county-therapy" element={<ThomasCountyTherapy />} />
          <Route path="/cherokee-county-therapy" element={<CherokeeCountyTherapy />} />
          <Route path="/forsyth-county-therapy" element={<ForsythCountyTherapy />} />
          <Route path="/camden-county-therapy" element={<CamdenCountyTherapy />} />
          <Route path="/colquitt-county-therapy" element={<ColquittCountyTherapy />} />
          <Route path="/clayton-county-therapy" element={<ClaytonCountyTherapy />} />
          <Route path="/houston-county-therapy" element={<HoustonCountyTherapy />} />
          <Route path="/muscogee-county-therapy" element={<MuscogeeCountyTherapy />} />
          <Route path="/bibb-county-therapy" element={<BibbCountyTherapy />} />
                
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsAndConditions />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </FormIntegration>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
