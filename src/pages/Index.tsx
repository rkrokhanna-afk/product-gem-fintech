import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DomainExpertise from "@/components/DomainExpertise";
import FeaturedWork from "@/components/FeaturedWork";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import OperatingModel from "@/components/OperatingModel";
import TechStack from "@/components/TechStack";
import Positioning from "@/components/Positioning";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <DomainExpertise />
        <div className="section-divider" />
        <FeaturedWork />
        <div className="section-divider" />
        <ProjectsShowcase />
        <div className="section-divider" />
        <OperatingModel />
        <div className="section-divider" />
        <TechStack />
        <Positioning />
      </main>
       <footer className="border-t border-border py-8 text-center">
         <p className="text-sm text-muted-foreground">© 2026 Rohit Khanna. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
