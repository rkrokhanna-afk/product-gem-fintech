import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, CreditCard, Landmark, BarChart3, Bot } from "lucide-react";
import ContactFormDialog from "./ContactFormDialog";

const pillars = [
  { icon: Building2, label: "Everyday banking" },
  { icon: CreditCard, label: "Paying & getting paid" },
  { icon: Landmark, label: "Lending & credit" },
  { icon: BarChart3, label: "Investing & markets" },
  { icon: Bot, label: "AI that helps decide" },
];

const Positioning = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section className="py-24 bg-navy-gradient" id="contact">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="section-divider mb-16" />

          <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed mb-8 italic">
            "Money products come with a lot of rules. My job is to turn those
            rules into something that actually works for the person using it."
          </blockquote>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
            I work with banks, lenders and payment companies to make slow,
            paper-heavy processes fast and dependable — without cutting the
            corners that keep customers and regulators protected.
          </p>

          {/* Domain Pillars */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors cursor-default"
              >
                <p.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{p.label}</span>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => setContactOpen(true)}
            className="inline-flex items-center px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300 text-sm tracking-wide"
          >
            Get in touch
          </button>
        </motion.div>
      </div>
      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
    </section>
  );
};

export default Positioning;
