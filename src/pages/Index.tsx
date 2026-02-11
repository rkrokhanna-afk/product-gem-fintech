import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DomainExpertise from "@/components/DomainExpertise";
import ProductPortfolio from "@/components/ProductPortfolio";
import OperatingModel from "@/components/OperatingModel";
import TechStack from "@/components/TechStack";
import Positioning from "@/components/Positioning";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <DomainExpertise />
      <div className="section-divider" />
      <ProductPortfolio />
      <div className="section-divider" />
      <OperatingModel />
      <div className="section-divider" />
      <TechStack />
      <Positioning />
      <footer className="border-t border-border py-8 text-center">
        <p className="text-xs text-muted-foreground">© 2025 Rohit Khanna. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
