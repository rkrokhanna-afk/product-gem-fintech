import { motion } from "framer-motion";
import { Building2, CreditCard, Landmark, BarChart3, Bot } from "lucide-react";

const pillars = [
  { icon: Building2, label: "Banking" },
  { icon: CreditCard, label: "Payments" },
  { icon: Landmark, label: "Lending" },
  { icon: BarChart3, label: "Capital Markets" },
  { icon: Bot, label: "AI Compliance" },
];

const Positioning = () => {
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
            "I specialize in building and modernizing regulated financial products across Banking, Capital Markets, Lending, and Payments."
          </blockquote>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
            My expertise lies in translating regulatory complexity into scalable, AI-enabled product architectures that drive operational efficiency, risk transparency, and business growth.
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

          <a
            href="mailto:rohit@example.com"
            className="inline-flex items-center px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300 text-sm tracking-wide"
          >
            Let's Discuss Product Strategy
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Positioning;
