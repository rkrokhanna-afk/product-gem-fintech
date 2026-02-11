import { motion } from "framer-motion";
import { Building2, CreditCard, Landmark, BarChart3, Bot } from "lucide-react";
import { useState } from "react";

const domains = [
  {
    icon: Building2,
    title: "Banking & Core Systems",
    items: [
      "Core Banking Modernization (Temenos, Mambu, Finacle)",
      "API-led Banking Architecture",
      "CASA & Deposit Configuration",
      "Retail & Corporate Banking Workflows",
      "RBI / FCA regulatory alignment",
    ],
  },
  {
    icon: CreditCard,
    title: "Payments & FinTech",
    items: [
      "Payment Gateway Integration (Razorpay, PayU)",
      "ACH & eNACH flows",
      "BNPL, Wallets, Neo Banking",
      "AEPS / DMT / BBPS ecosystem",
      "Merchant Settlement & Reconciliation",
      "Authorization → Capture → Settlement → Reconciliation",
    ],
  },
  {
    icon: Landmark,
    title: "Lending & Credit Systems",
    items: [
      "Loan Origination System (LOS)",
      "Loan Management System (LMS)",
      "Underwriting logic & Risk scoring",
      "NACH-based repayment automation",
      "Disbursement cycle acceleration",
    ],
  },
  {
    icon: BarChart3,
    title: "Capital Markets & Investment Banking",
    items: [
      "Trade lifecycle: Order → Execution → Clearing → Settlement",
      "STP improvement initiatives",
      "MiFID / Basel regulatory workflows",
      "Risk reporting & compliance automation",
      "OMS & downstream reporting integration",
    ],
  },
  {
    icon: Bot,
    title: "AI-Driven Financial Systems",
    items: [
      "GenAI-based AML modernization",
      "LLM narrative engine for SAR",
      "Intelligent case summarization",
      "False-positive reduction logic",
      "Explainability layer for regulatory audit",
    ],
  },
];

const DomainExpertise = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-navy-gradient" id="expertise">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">Domain Expertise</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            Product Depth in{" "}
            <span className="text-gradient-gold">Financial Ecosystems</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Tabs */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
            {domains.map((domain, i) => (
              <button
                key={domain.title}
                onClick={() => setActiveIndex(i)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left whitespace-nowrap lg:whitespace-normal transition-all duration-300 text-sm font-medium ${
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
            <div className="flex items-center gap-3 mb-6">
              {(() => {
                const Icon = domains[activeIndex].icon;
                return <Icon className="w-6 h-6 text-primary" />;
              })()}
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                {domains[activeIndex].title}
              </h3>
            </div>
            <ul className="space-y-3">
              {domains[activeIndex].items.map((item, i) => (
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DomainExpertise;
