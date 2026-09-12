import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import ProjectDetailDialog from "./ProjectDetailDialog";
import { Button } from "@/components/ui/button";

const featured = projects.filter((p) => p.featured);

const FeaturedWork = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className="py-20 md:py-28 scroll-mt-20 outline-none" id="featured" tabIndex={-1} aria-labelledby="featured-title">
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
          <h2 id="featured-title" className="font-serif text-4xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
            Eight things I built,
            <br className="hidden sm:block" /> explained simply.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground font-light leading-relaxed">
            No jargon needed. Each one started as an everyday problem someone had
            to solve — here is what it was, and what changed.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid gap-4 md:gap-5 sm:grid-cols-2 items-stretch">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              type="button"
              onClick={() => setSelected(p)}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: Math.min(i, 5) * 0.05, duration: 0.4 }}
              className="h-full"
            >
              <Button
                variant="outline"
                onClick={() => setSelected(p)}
                className="group h-full min-h-52 w-full whitespace-normal rounded-lg border-border/70 bg-card p-5 md:p-7 text-left items-start justify-start flex-col hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card hover:shadow-lg transition-all duration-300"
                aria-label={`Read the full story: ${p.title}`}
              >
                <h3 className="font-serif text-xl md:text-[1.4rem] font-medium tracking-tight text-foreground leading-snug">
                  {p.title}
                </h3>
                <p className="mt-1 text-[15px] text-muted-foreground font-normal leading-relaxed">
                  {p.plain}
                </p>
                <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary">
                  Read the full story
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Button>
            </motion.div>
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
