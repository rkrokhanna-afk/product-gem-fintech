import { motion } from "framer-motion";
import { ArrowDown, Download, MessageSquare, Github } from "lucide-react";

const Hero = () => {

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--gold) / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold) / 0.5) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container relative z-10 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-gold" />
            <span className="text-sm font-medium text-primary tracking-wide uppercase">Enterprise Product Leader</span>
          </motion.div>

          {/* Name */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Rohit</span>{" "}
            <span className="text-gradient-gold">Khanna</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 font-light">
            Designing, Modernizing & Scaling Regulated Financial Products
          </p>

          {/* Domain tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {["Core Banking", "Lending", "Payments", "Trade Lifecycle", "AML", "GenAI"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium tracking-wider uppercase text-primary/80 border border-primary/20 rounded bg-primary/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto"
          >
            <button
              onClick={scrollToPortfolio}
              className="h-12 w-full px-5 rounded-lg text-sm font-semibold tracking-wide inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <ArrowDown className="w-4 h-4" />
              View Product Portfolio
            </button>
            <a
              href="https://topmate.io/rohit_khanna11/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-full px-5 rounded-lg text-sm font-semibold tracking-wide inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <MessageSquare className="w-4 h-4" />
              Discuss Product Strategy
            </a>
            <a
              href="/Resume_Rohit_Khanna_updated.pdf"
              download
              className="h-12 w-full px-5 rounded-lg text-sm font-semibold tracking-wide inline-flex items-center justify-center gap-2 bg-card border border-border text-foreground shadow-sm hover:border-primary/40 hover:text-primary hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="https://github.com/rkrokhanna-afk"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-full px-5 rounded-lg text-sm font-semibold tracking-wide inline-flex items-center justify-center gap-2 bg-card border border-border text-foreground shadow-sm hover:border-primary/40 hover:text-primary hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-primary/30 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 rounded-full bg-primary/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
