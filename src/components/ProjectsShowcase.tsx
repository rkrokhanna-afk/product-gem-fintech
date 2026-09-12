import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowUpRight } from "lucide-react";
import { projects, domains, type Project, type Domain } from "@/data/projects";
import ProjectDetailDialog from "./ProjectDetailDialog";
import { Button } from "@/components/ui/button";

const plainDomainLabels: Record<Domain, string> = {
  "AI & Agentic Systems": "AI assistants",
  "Banking, FinTech & Payments": "Banking & payments",
  "Wealth & Capital Markets": "Investing & savings",
  "Supply Chain & Procurement": "Supply chain & buying",
  "Healthcare & Life Sciences": "Health & medicine",
  "AgriTech & Financial Inclusion": "Farming & access to credit",
  "Maritime & Enterprise Logistics": "Shipping & logistics",
};

const ProjectsShowcase = () => {
  const [activeDomain, setActiveDomain] = useState<Domain | "All">("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const domainMatch =
        activeDomain === "All" || p.domains.includes(activeDomain);
      if (!domainMatch) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.plain.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q)) ||
        p.badges.some((b) => b.toLowerCase().includes(q))
      );
    });
  }, [activeDomain, query]);

  const filters: (Domain | "All")[] = ["All", ...domains];

  return (
    <section className="py-28 md:py-36" id="portfolio">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-muted-foreground mb-5 block">
            Everything else
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
            All {projects.length} projects,
            <br className="hidden sm:block" /> in one place.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground font-light leading-relaxed">
            Browse by area of work, or search for anything — an industry, a
            company, or a technology. Tap a project to read the full story.
          </p>
        </motion.div>

        {/* Controls */}
        <div className="max-w-3xl mx-auto mb-14 space-y-6">
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try 'payments', 'AI' or a company name…"
              aria-label="Search projects"
              className="w-full h-14 pl-12 pr-5 rounded-full bg-secondary/60 border border-transparent text-[15px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-card focus:border-border focus:ring-2 focus:ring-ring/30 transition-all duration-300"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-x-1 gap-y-2">
            {filters.map((f) => {
              const active = activeDomain === f;
              const label =
                f === "All" ? "Everything" : plainDomainLabels[f as Domain];
              return (
                <Button
                  type="button"
                  variant={active ? "secondary" : "ghost"}
                  size="sm"
                  key={f}
                  onClick={() => setActiveDomain(f)}
                  aria-pressed={active}
                  className={`text-[13px] px-4 py-2 rounded-full transition-all duration-300 min-h-11 ${
                    active
                      ? "text-foreground font-medium bg-secondary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Editorial list */}
        <div className="max-w-4xl mx-auto border-t border-border/60">
          {filtered.map((p, i) => (
            <motion.button
              key={p.id}
              type="button"
              onClick={() => setSelected(p)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: Math.min(i, 6) * 0.03, duration: 0.4 }}
              className="group block w-full text-left border-b border-border/60 py-8 md:py-9 px-2 md:px-6 rounded-2xl transition-colors duration-300 hover:bg-secondary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="flex items-start gap-6">
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-xl md:text-2xl font-medium tracking-tight text-foreground leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] text-muted-foreground font-light leading-relaxed max-w-2xl">
                    {p.plain}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5">
                    {p.domains.map((d) => (
                      <span
                        key={d}
                        className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground"
                      >
                        {plainDomainLabels[d]}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:text-primary group-hover:translate-x-0.5">
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-sm text-muted-foreground py-16" role="status">
            Nothing matches that search yet.
          </p>
        )}

        <p className="mt-10 text-center text-[13px] text-muted-foreground" aria-live="polite" aria-atomic="true">
          Showing {filtered.length} of {projects.length} projects
        </p>
      </div>

      <ProjectDetailDialog
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
};

export default ProjectsShowcase;
