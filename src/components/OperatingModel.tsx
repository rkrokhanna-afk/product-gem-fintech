import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Market & Regulatory Landscape Study" },
  { num: "02", title: "Stakeholder Workshops" },
  { num: "03", title: "Business Requirement Structuring" },
  { num: "04", title: "Architecture Alignment" },
  { num: "05", title: "Agile Execution" },
  { num: "06", title: "Compliance & UAT Governance" },
  { num: "07", title: "Go-Live Readiness" },
  { num: "08", title: "Performance Monitoring" },
  { num: "09", title: "Continuous Optimization" },
];

const subtitles: Record<string, string> = {
  "01": "Regulatory scanning, competitive benchmarking",
  "02": "Risk, Compliance, Ops, Tech alignment",
  "03": "BRD / FRD / PRD documentation",
  "04": "Microservices, API, Event-driven design",
  "05": "Backlog strategy, Sprint orchestration",
  "06": "Regulatory validation, User acceptance",
  "07": "Deployment, rollback & contingency",
  "08": "KPIs, risk metrics, SLA tracking",
  "09": "Feedback loops, iterative improvement",
};

const OperatingModel = () => {
  return (
    <section className="py-24 bg-navy-gradient" id="framework">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">Operating Model</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            Product Framework for{" "}
            <span className="text-gradient-gold">Regulated Systems</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-6 group"
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center text-xs font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-12 bg-border group-hover:bg-primary/30 transition-colors" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8">
                <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {subtitles[step.num]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperatingModel;
