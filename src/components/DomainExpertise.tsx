import { motion } from "framer-motion";
import { Building2, CreditCard, Landmark, BarChart3, Bot } from "lucide-react";
import { useState } from "react";

const domains = [
  {
    icon: Building2,
    title: "Everyday banking",
    blurb:
      "The systems behind your current account: opening it, holding your money, moving it, and keeping the bank on the right side of the rules.",
    items: [
      "Replacing ageing bank systems with modern ones",
      "Letting a bank's systems talk to each other reliably",
      "Setting up current and savings accounts",
      "Day-to-day journeys for personal and business customers",
      "Meeting what the regulators require",
    ],
    terms: ["Temenos", "Mambu", "Finacle", "API-led architecture", "RBI / FCA"],
  },
  {
    icon: CreditCard,
    title: "Paying and getting paid",
    blurb:
      "Everything between tapping a card and the money actually landing in a shop's account.",
    items: [
      "Taking card, wallet and QR payments online",
      "Automatic recurring payments, like a monthly subscription",
      "Pay-later, wallets and app-only banks",
      "Paying out to shops and checking every penny adds up",
      "The full journey: approved → charged → paid out → checked",
    ],
    terms: ["Razorpay", "PayU", "ACH / eNACH", "BNPL", "AEPS / DMT / BBPS"],
  },
  {
    icon: Landmark,
    title: "Lending and credit",
    blurb:
      "Deciding who can borrow, how much, and making the money arrive quickly — then collecting it back smoothly.",
    items: [
      "Applying for a loan, start to finish",
      "Managing the loan for its whole life",
      "Deciding fairly and consistently who to lend to",
      "Collecting repayments automatically",
      "Getting the money to the borrower faster",
    ],
    terms: ["Loan origination (LOS)", "Loan management (LMS)", "Risk scoring", "NACH"],
  },
  {
    icon: BarChart3,
    title: "Investing and markets",
    blurb:
      "What happens after someone buys or sells an investment, and how firms keep track of the risk they are carrying.",
    items: [
      "The life of a trade: placed → done → confirmed → paid for",
      "Removing manual steps between those stages",
      "Meeting the rules markets are held to",
      "Reporting risk clearly and on time",
      "Connecting trading systems to reporting systems",
    ],
    terms: ["Trade lifecycle", "STP", "MiFID", "Basel", "OMS"],
  },
  {
    icon: Bot,
    title: "AI that helps people decide",
    blurb:
      "Using AI to do the reading and gathering, so specialists spend their time on the judgement call — with a record of how each answer was reached.",
    items: [
      "Spotting suspicious money movement faster",
      "Drafting the write-up an investigator has to produce",
      "Summarising a long case into a readable brief",
      "Cutting down false alarms",
      "Showing why the system reached its answer, for auditors",
    ],
    terms: ["GenAI", "LLMs", "AML", "SAR narratives", "Explainability"],
  },
];

const DomainExpertise = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = domains[activeIndex];
  const Icon = active.icon;

  return (
    <section className="py-24 bg-navy-gradient" id="expertise">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
            What I work on
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            Five areas, in{" "}
            <span className="text-gradient-gold">plain English</span>
          </h2>
          <p className="mt-6 text-base text-muted-foreground font-light leading-relaxed">
            Pick an area to see the kind of problems I take on. The technical
            names sit at the bottom of each card if you want them.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Tabs */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
            {domains.map((domain, i) => (
              <button
                key={domain.title}
                onClick={() => setActiveIndex(i)}
                aria-pressed={activeIndex === i}
                className={`flex items-center gap-3 px-4 py-3 min-h-11 rounded-lg text-left whitespace-nowrap lg:whitespace-normal transition-all duration-300 text-sm font-medium ${
                  activeIndex === i
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 border border-transparent"
                }`}
              >
                <domain.icon className="w-5 h-5 flex-shrink-0" />
                {domain.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-xl border border-border p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Icon className="w-6 h-6 text-primary" />
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                {active.title}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
              {active.blurb}
            </p>
            <ul className="space-y-3">
              {active.items.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 text-secondary-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-7 pt-5 border-t border-border/70">
              <span className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground block mb-3">
                Industry names for the above
              </span>
              <div className="flex flex-wrap gap-2">
                {active.terms.map((t) => (
                  <span
                    key={t}
                    className="text-[12px] px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DomainExpertise;
