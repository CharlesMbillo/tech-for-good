
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { ProfessionalSummary } from "@/components/ProfessionalSummary";
import { CoreExpertise } from "@/components/CoreExpertise";
import { TechnicalFocus } from "@/components/TechnicalFocus";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ProfessionalSummary />
      <CoreExpertise />
      <ServicesSection />
      <TechnicalFocus />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
