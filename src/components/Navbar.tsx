import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "What I do", href: "#expertise" },
  { label: "Selected work", href: "#featured" },
  { label: "All projects", href: "#portfolio" },
  { label: "How I work", href: "#how-i-work" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || open ? "bg-background/95 backdrop-blur-md border-b border-border" : ""}`}>
      <nav aria-label="Primary navigation">
      <div className="container px-6 flex items-center justify-between h-16">
        <a href="#" className="font-serif text-lg font-bold text-foreground">
          R<span className="text-primary">K</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.label}><a href={l.href} className="inline-flex min-h-11 items-center text-xs font-semibold tracking-wider uppercase text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors">
              {l.label}
            </a></li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="md:hidden text-foreground min-h-11 min-w-11 inline-flex items-center justify-center"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul id="mobile-navigation" className="md:hidden bg-background border-b border-border px-6 py-3">
          {links.map((l) => (
            <li key={l.label}><a
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center text-sm font-medium text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
            >
              {l.label}
            </a></li>
          ))}
        </ul>
      )}
      </nav>
    </header>
  );
};

export default Navbar;
