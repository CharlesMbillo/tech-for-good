
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { ProfessionalSummary } from "@/components/ProfessionalSummary";
import { CoreExpertise } from "@/components/CoreExpertise";
import { TechnicalFocus } from "@/components/TechnicalFocus";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ProfessionalSummary />
      <CoreExpertise />
      <TechnicalFocus />
      <ContactSection />
    </Layout>
  );
};

export default Index;
