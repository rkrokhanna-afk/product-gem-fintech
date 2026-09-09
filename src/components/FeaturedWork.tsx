import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import ProjectDetailDialog from "./ProjectDetailDialog";

const featured = projects.filter((p) => p.featured);

const FeaturedWork = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className="py-28 md:py-36" id="featured">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-muted-foreground mb-5 block">
            Selected work
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
            Eight things I built,
            <br className="hidden sm:block" /> explained simply.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground font-light leading-relaxed">
            No jargon needed. Each one started as a everyday problem someone had
            to solve — here is what it was, and what changed.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid gap-5 sm:grid-cols-2">
          {featured.map((p, i) => (
            <motion.button
              key={p.id}
              type="button"
              onClick={() => setSelected(p)}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: Math.min(i, 5) * 0.05, duration: 0.4 }}
              className="group text-left rounded-2xl border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <h3 className="font-serif text-xl md:text-[1.4rem] font-medium tracking-tight text-foreground leading-snug">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] text-muted-foreground font-light leading-relaxed">
                {p.plain}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-primary">
                Read the full story
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <ProjectDetailDialog
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
};

export default FeaturedWork;
