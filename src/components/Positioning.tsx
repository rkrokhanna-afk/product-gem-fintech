import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Building2, CreditCard, Landmark, BarChart3, Bot, Github, Linkedin, Mail, Phone } from "lucide-react";
import ContactFormDialog from "./ContactFormDialog";
import { Button } from "@/components/ui/button";

const pillars = [
  { icon: Building2, label: "Everyday banking" },
  { icon: CreditCard, label: "Paying & getting paid" },
  { icon: Landmark, label: "Lending & credit" },
  { icon: BarChart3, label: "Investing & markets" },
  { icon: Bot, label: "AI that helps decide" },
];

const certifications = [
  { name: "PMP", detail: "Leading complex projects from plan to delivery." },
  { name: "CSPO", detail: "Turning customer needs into clear product priorities." },
  { name: "PMI-ACP", detail: "Delivering useful improvements in short, practical cycles." },
  { name: "SAFe 6 Agilist", detail: "Coordinating product delivery across large organisations." },
  { name: "AWS Cloud Practitioner", detail: "Understanding how secure cloud products are designed and run." },
  { name: "Lean Six Sigma Black Belt", detail: "Removing waste and improving measurable outcomes." },
  { name: "Jira Certified", detail: "Keeping product work visible, organised and accountable." },
];

const contacts = [
  { label: "Email", value: "rkrokhanna@gmail.com", href: "mailto:rkrokhanna@gmail.com", icon: Mail },
  { label: "Phone", value: "+1 236-501-9338", href: "tel:+12365019338", icon: Phone },
  { label: "LinkedIn", value: "Rohit Khanna", href: "https://www.linkedin.com/in/rohit-khanna63611611b", icon: Linkedin },
  { label: "GitHub", value: "rkrokhanna-afk", href: "https://github.com/rkrokhanna-afk", icon: Github },
];

const Positioning = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-navy-gradient" id="contact" aria-labelledby="contact-title">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="section-divider mb-16" />

           <h2 id="contact-title" className="font-serif text-3xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
             Experience you can verify.<br className="hidden sm:block" /> A conversation you can start easily.
           </h2>
           <blockquote className="font-serif text-lg md:text-2xl text-foreground leading-relaxed mb-6 italic">
            "Money products come with a lot of rules. My job is to turn those
            rules into something that actually works for the person using it."
          </blockquote>
           <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            I work with banks, lenders and payment companies to make slow,
            paper-heavy processes fast and dependable — without cutting the
            corners that keep customers and regulators protected.
          </p>

          {/* Domain Pillars */}
           <div className="flex flex-wrap justify-center gap-3 mb-14" aria-label="Areas of work">
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

           <div className="border-t border-border pt-12 text-left">
             <div className="mx-auto max-w-2xl text-center">
               <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-primary">
                 <Award className="h-4 w-4" aria-hidden="true" /> Certifications
               </span>
               <p className="mt-3 text-sm text-muted-foreground">What each qualification means in day-to-day product leadership.</p>
             </div>
             <ul className="mt-7 grid gap-x-8 gap-y-0 sm:grid-cols-2">
               {certifications.map((item) => (
                 <li key={item.name} className="border-b border-border py-4">
                   <p className="font-semibold text-foreground">{item.name}</p>
                   <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                 </li>
               ))}
             </ul>
           </div>

           <div className="mt-14 border-t border-border pt-12">
             <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">Let’s talk</h3>
             <p className="mt-3 text-sm text-muted-foreground">Choose the contact method that works best for you.</p>
             <ul className="mx-auto mt-6 grid max-w-3xl gap-3 sm:grid-cols-2">
               {contacts.map((contact) => (
                 <li key={contact.label}>
                   <a
                     href={contact.href}
                     target={contact.href.startsWith("http") ? "_blank" : undefined}
                     rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                     className="flex min-h-14 items-center gap-3 rounded-lg border border-border bg-card px-4 text-left text-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                     aria-label={`${contact.label}: ${contact.value}${contact.href.startsWith("http") ? ", opens in a new tab" : ""}`}
                   >
                     <contact.icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                     <span className="min-w-0">
                       <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{contact.label}</span>
                       <span className="block break-words text-sm font-medium">{contact.value}</span>
                     </span>
                   </a>
                 </li>
               ))}
             </ul>
           </div>

           <Button
            onClick={() => setContactOpen(true)}
             size="lg"
             className="mt-8 min-h-12 px-8 font-semibold shadow-md shadow-primary/20"
          >
             Send a message
           </Button>
        </motion.div>
      </div>
      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
    </section>
  );
};

export default Positioning;
