import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { Project } from "@/data/projects";

interface Props {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetailDialog = ({ project, onClose }: Props) => (
  <Dialog open={!!project} onOpenChange={(o) => !o && onClose()}>
    <DialogContent className="w-[calc(100%-2rem)] max-w-2xl max-h-[88dvh] overflow-y-auto rounded-lg p-5 pt-12 sm:p-7 sm:pt-10">
      {project && (
        <>
          <DialogHeader className="gap-2">
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-muted-foreground">
              {project.domains[0]}
            </span>
            <DialogTitle className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-left">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-left text-[15px] font-light leading-relaxed">
              {project.plain}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-7 pt-3">
            {[
              ["What wasn't working", project.problem],
              ["What I did", project.role],
              ["What changed", project.impact],
             ].map(([label, body]) => (
               <section key={label}>
                 <h3 className="text-[12px] font-semibold tracking-[0.16em] uppercase text-muted-foreground mb-2">
                  {label}
                 </h3>
                 <p className="text-[15px] text-foreground font-normal leading-relaxed">
                  {body}
                </p>
               </section>
            ))}

            <section className="rounded-lg border border-border/70 bg-secondary/40 p-4 sm:p-5">
              <h3 className="text-[12px] font-semibold tracking-[0.16em] uppercase text-muted-foreground mb-3">
                For the technical reader
              </h3>
              <p className="text-[14px] text-muted-foreground font-normal leading-relaxed">
                {project.summary}
              </p>
              <p className="mt-3 text-[14px] text-muted-foreground font-normal leading-relaxed">
                {project.integrations}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[12px] px-3 py-1 rounded-full bg-card border border-border/70 text-secondary-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </>
      )}
    </DialogContent>
  </Dialog>
);

export default ProjectDetailDialog;
