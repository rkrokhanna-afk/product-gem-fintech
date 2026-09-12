import { motion } from "framer-motion";
import { ArrowDown, Download, MessageSquare, Github, GraduationCap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {

  const scrollToPortfolio = () => {
    const portfolio = document.getElementById("featured");
    if (!portfolio) return;
    portfolio.scrollIntoView({ behavior: "smooth" });
    portfolio.focus({ preventScroll: true });
  };

  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden" aria-labelledby="hero-title">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--gold) / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold) / 0.5) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container relative z-10 px-6 py-24 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
           className="max-w-5xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-gold" aria-hidden="true" />
            <span className="text-sm font-semibold text-primary tracking-wide uppercase">Senior / Principal Product Manager · 16+ Years</span>
          </motion.div>

          {/* Name */}
          <h1 id="hero-title" className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-5">
            <span className="text-foreground">Rohit</span>{" "}
            <span className="text-gradient-gold">Khanna</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto font-normal leading-relaxed">
            Technical product leader transforming complex enterprise work into scalable digital platforms across FinTech, banking, AI, supply chain and healthcare.
          </p>

          <ul className="mt-6 flex flex-wrap justify-center gap-2" aria-label="Location and education">
            <li className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" /> Surrey, BC, Canada
            </li>
            <li className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground">
              <GraduationCap className="h-4 w-4 text-primary" aria-hidden="true" /> MBA · Woolf University
            </li>
            <li className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground">
              <GraduationCap className="h-4 w-4 text-primary" aria-hidden="true" /> BNS · IGNOU
            </li>
          </ul>

          {/* Domain tags */}
          <ul className="flex flex-wrap justify-center gap-2 my-7" aria-label="Areas of expertise">
            {["Banking", "Payments", "Lending", "Investing", "Fraud & AML", "AI"].map((tag) => (
              <li
                key={tag}
                className="px-3 py-1.5 text-xs font-semibold tracking-wider uppercase text-primary border border-primary/30 rounded bg-primary/5"
              >
                {tag}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto"
          >
            <Button
              onClick={scrollToPortfolio}
              className="h-12 w-full px-3 rounded-lg text-sm font-semibold tracking-wide bg-gradient-to-r from-primary to-gold-dark text-primary-foreground shadow-md shadow-primary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <ArrowDown className="w-4 h-4 flex-shrink-0" />
              <span>View Product Portfolio</span>
            </Button>
            <Button asChild className="h-12 w-full px-3 rounded-lg text-sm font-semibold tracking-wide bg-gradient-to-r from-primary to-gold-dark text-primary-foreground shadow-md shadow-primary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            <a
              href="https://topmate.io/rohit_khanna11/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="w-4 h-4 flex-shrink-0" />
              <span>Discuss Product Strategy</span>
            </a>
            </Button>
            <Button asChild variant="outline" className="h-12 w-full px-3 rounded-lg text-sm font-semibold tracking-wide bg-card shadow-sm hover:border-primary/50 hover:text-primary hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <a
              href="/Resume_Rohit_Khanna_updated.pdf"
              download
            >
              <Download className="w-4 h-4 flex-shrink-0" />
              <span>Download Resume</span>
            </a>
            </Button>
            <Button asChild variant="outline" className="h-12 w-full px-3 rounded-lg text-sm font-semibold tracking-wide bg-card shadow-sm hover:border-primary/50 hover:text-primary hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <a
              href="https://github.com/rkrokhanna-afk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 flex-shrink-0" />
              <span>GitHub</span>
            </a>
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
