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
import Depression from "./pages/conditions/Depression";
import Anxiety from "./pages/conditions/Anxiety";
import ADHD from "./pages/conditions/ADHD";

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
            <Route path="/mental-health-library/depression" element={<Depression />} />
            <Route path="/mental-health-library/anxiety" element={<Anxiety />} />
            <Route path="/mental-health-library/adhd" element={<ADHD />} />
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
