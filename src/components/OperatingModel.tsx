import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Understand the ground rules",
    sub: "What the law requires, and what others in the market already do",
  },
  {
    num: "02",
    title: "Get everyone in one room",
    sub: "Risk, legal, operations and engineering, agreeing on the same goal",
  },
  {
    num: "03",
    title: "Write down what we're building",
    sub: "Clear, testable descriptions everyone can hold me to",
  },
  {
    num: "04",
    title: "Agree how it will be built",
    sub: "So it still works when usage grows ten times",
  },
  {
    num: "05",
    title: "Build in small pieces",
    sub: "Short cycles, something usable at the end of each one",
  },
  {
    num: "06",
    title: "Prove it's correct and compliant",
    sub: "Checked by the people who own the risk, and by real users",
  },
  {
    num: "07",
    title: "Get ready for launch day",
    sub: "Including a plan for backing out if something goes wrong",
  },
  {
    num: "08",
    title: "Watch how it behaves live",
    sub: "Real numbers on speed, errors and customer outcomes",
  },
  {
    num: "09",
    title: "Keep improving it",
    sub: "Feed what we learn back into the next round",
  },
];

const OperatingModel = () => {
  return (
    <section className="py-24 bg-navy-gradient" id="how-i-work">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
            How I work
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            Nine steps, from{" "}
            <span className="text-gradient-gold">idea to live</span>
          </h2>
          <p className="mt-6 text-base text-muted-foreground font-light leading-relaxed">
            The same order every time. It's what stops a big, heavily regulated
            project from drifting.
          </p>
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
                <p className="text-xs text-muted-foreground mt-1">{step.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperatingModel;
