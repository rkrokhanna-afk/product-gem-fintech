import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowUpRight } from "lucide-react";
import { projects, domains, type Project, type Domain } from "@/data/projects";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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
        p.client.toLowerCase().includes(q) ||
        p.org.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q)) ||
        p.badges.some((b) => b.toLowerCase().includes(q))
      );
    });
  }, [activeDomain, query]);

  const filters: (Domain | "All")[] = ["All", ...domains];

  return (
    <section className="py-24" id="portfolio">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
            Product Portfolio
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            {projects.length} Products &amp;{" "}
            <span className="text-gradient-gold">Platforms Delivered</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Filter by domain or search by client, capability or technology.
          </p>
        </motion.div>

        {/* Controls */}
        <div className="max-w-6xl mx-auto mb-10 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, clients, tech…"
              aria-label="Search projects"
              className="w-full h-11 pl-9 pr-4 rounded-lg bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((f) => {
              const active = activeDomain === f;
              return (
                <button
                  key={f}
                  onClick={() => setActiveDomain(f)}
                  aria-pressed={active}
                  className={`text-xs font-medium px-3.5 py-2 rounded-full border transition-all duration-300 ${
                    active
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>

          <p className="text-center text-xs text-muted-foreground">
            Showing {filtered.length} of {projects.length} projects
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <motion.button
              key={p.id}
              type="button"
              onClick={() => setSelected(p)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i, 8) * 0.04 }}
              className="group text-left bg-card border border-border rounded-xl p-5 flex flex-col hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-primary block">
                    {p.org}
                  </span>
                  <span className="text-xs text-muted-foreground">{p.client}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </div>

              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {p.summary}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {p.badges.slice(0, 3).map((b) => (
                  <span
                    key={b}
                    className="text-[11px] px-2 py-0.5 rounded bg-secondary text-secondary-foreground"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-sm text-muted-foreground py-10">
            No projects match that search.
          </p>
        )}
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader>
                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-primary">
                  {selected.org} · {selected.client}
                </span>
                <DialogTitle className="font-serif text-2xl text-left">
                  {selected.title}
                </DialogTitle>
                <DialogDescription className="text-left">
                  {selected.summary}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-5 pt-2">
                {[
                  ["Problem", selected.problem],
                  ["My Role", selected.role],
                  ["Systems & Integrations", selected.integrations],
                  ["Impact", selected.impact],
                ].map(([label, body]) => (
                  <div key={label}>
                    <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-primary/70 mb-1.5 block">
                      {label}
                    </span>
                    <p className="text-sm text-secondary-foreground leading-relaxed">
                      {body}
                    </p>
                  </div>
                ))}

                <div>
                  <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                    Technology
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] px-2 py-0.5 rounded bg-secondary text-secondary-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsShowcase;
