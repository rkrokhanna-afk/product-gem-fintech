import { motion } from "framer-motion";
import { ArrowDown, FileText, MessageSquare } from "lucide-react";

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
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={scrollToPortfolio}
              className="px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300 flex items-center gap-2 text-sm tracking-wide"
            >
              View Product Portfolio
              <ArrowDown className="w-4 h-4" />
            </button>
            <a
              href="https://topmate.io/rohit_khanna11/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-primary/30 text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2 text-sm tracking-wide"
            >
              <MessageSquare className="w-4 h-4" />
              Discuss Product Strategy
            </a>
            <a
              href="/Resume_Rohit_Khanna_updated.pdf"
              download
              className="px-8 py-3.5 border border-border text-muted-foreground font-medium rounded-lg hover:border-primary/30 hover:text-foreground transition-colors duration-300 flex items-center gap-2 text-sm tracking-wide"
            >
              <FileText className="w-4 h-4" />
              Download Resume
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
