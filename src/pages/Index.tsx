
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EngineeringApproach } from "@/components/EngineeringApproach";
import { ProductionReliability } from "@/components/ProductionReliability";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProfessionalSummary } from "@/components/ProfessionalSummary";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <CapabilitiesSection />
      <ProjectsSection />
      <EngineeringApproach />
      <ProductionReliability />
      <ExperienceSection />
      <SkillsSection />
      <ProfessionalSummary />
      <ContactSection />
    </Layout>
  );
};

export default Index;
