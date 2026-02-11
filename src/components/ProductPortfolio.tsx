import { motion } from "framer-motion";
import { Shield, TrendingUp, BookOpen, Landmark, CreditCard, Leaf } from "lucide-react";

const products = [
  {
    icon: Shield,
    label: "Banking & Financial Crime",
    title: "AI-Driven AML Investigation Platform",
    role: "Principal Consultant / Product Lead",
    objective: "Modernize transaction monitoring & SAR filing using GenAI.",
    capabilities: [
      "Automated SAR narrative generation",
      "Contextual transaction anomaly detection",
      "Risk summarization engine",
      "Regulatory explainability module",
      "Case management automation",
    ],
    impact: [
      "35% reduction in manual investigation effort",
      "Improved alert triage accuracy",
      "Audit-ready compliance reporting",
    ],
  },
  {
    icon: TrendingUp,
    label: "Capital Markets",
    title: "Investment Banking Trade Lifecycle Platform",
    role: "Product Consultant",
    objective: "End-to-end lifecycle: Trade booking → Confirmation → Risk → Collateral → Settlement → Regulatory reporting.",
    capabilities: [
      "Defined BRDs & trade workflows",
      "Impact analysis (MiFID, Basel)",
      "Improved STP rates",
      "Reduced operational risk via automation",
      "Cross-functional alignment (Traders, Risk, Compliance)",
    ],
    impact: [
      "Improved straight-through processing",
      "Reduced operational risk",
      "Regulatory compliance achieved",
    ],
  },
  {
    icon: BookOpen,
    label: "Investment Banking",
    title: "ResearchWise – Sell-Side Research Publishing",
    role: "Product Lead",
    objective: "Equity research document workflow with compliance approval routing.",
    capabilities: [
      "Equity research document workflow",
      "Compliance approval routing",
      "Content distribution engine",
      "SLA tracking dashboard",
      "Cloud modernization",
    ],
    impact: [
      "Improved turnaround time",
      "Enhanced transparency across global banks",
      "Streamlined compliance workflows",
    ],
  },
  {
    icon: Landmark,
    label: "Lending & FinTech",
    title: "Loan Origination & Loan Management Platform",
    role: "Product Manager",
    objective: "Full-stack lending platform from credit evaluation to repayment tracking.",
    capabilities: [
      "LOS (Credit evaluation, underwriting logic)",
      "LMS (Repayment tracking, interest calculation, penalty logic)",
      "NACH auto-debit integration",
      "Payment gateway integration (Razorpay, PayU)",
      "Disbursement workflow automation",
    ],
    impact: [
      "Accelerated loan disbursement cycles",
      "Improved repayment tracking efficiency",
      "Reduced manual processing",
    ],
  },
  {
    icon: CreditCard,
    label: "FinTech & Digital Payments",
    title: "Payment Integration & Merchant Flow System",
    role: "Product Owner",
    objective: "End-to-end payment lifecycle from authorization to merchant settlement.",
    capabilities: [
      "Payment gateway integration",
      "Authorization → Capture → Settlement lifecycle",
      "Reconciliation logic",
      "Merchant payout engine",
      "Compliance reporting",
    ],
    impact: [
      "Streamlined merchant onboarding",
      "Reduced settlement delays",
      "Improved reconciliation accuracy",
    ],
  },
  {
    icon: Leaf,
    label: "Grassroots FinTech",
    title: "DoodhBhandaar – Agri-FinTech Platform",
    role: "Founder / Product Builder",
    objective: "Financial digitalization for dairy farming ecosystem.",
    capabilities: [
      "Dairy farmer revenue tracking",
      "Loan tracking module",
      "Inventory management",
      "Debt transparency dashboard",
      "Financial analytics for rural ecosystem",
    ],
    impact: [
      "Recognized by IIT Kanpur, PUSA Krishi & IIM Udaipur",
      "Brought financial transparency to rural communities",
      "Demonstrated product innovation beyond corporate systems",
    ],
  },
];

const ProductPortfolio = () => {
  return (
    <section className="py-24" id="portfolio">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">Product Portfolio</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            Products I Have{" "}
            <span className="text-gradient-gold">Built</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-500 hover:glow-gold"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <product.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-primary block">{product.label}</span>
                    <span className="text-xs text-muted-foreground">{product.role}</span>
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{product.objective}</p>

              {/* Capabilities */}
              <div className="mb-4">
                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-2 block">Capabilities</span>
                <div className="flex flex-wrap gap-1.5">
                  {product.capabilities.map((cap) => (
                    <span key={cap} className="text-[11px] px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div>
                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-primary/70 mb-2 block">Impact</span>
                <ul className="space-y-1">
                  {product.impact.map((imp) => (
                    <li key={imp} className="flex items-center gap-2 text-xs text-secondary-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {imp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPortfolio;
