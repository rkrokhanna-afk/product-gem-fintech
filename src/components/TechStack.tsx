import { motion } from "framer-motion";

const categories = [
  {
    title: "Building things that scale",
    plain: "Software designed in small parts so it keeps up as usage grows.",
    items: [
      "Microservices",
      "API-led integration",
      "Kafka",
      "Event-driven architecture",
      "Cloud migration",
    ],
  },
  {
    title: "The systems banks run on",
    plain: "The core software that holds accounts, balances and transactions.",
    items: ["Temenos", "Oracle", "Mambu", "Finacle"],
  },
  {
    title: "Turning data into answers",
    plain: "Dashboards and reporting people actually use to make decisions.",
    items: ["Power BI", "Tableau", "Snowflake", "BigQuery"],
  },
  {
    title: "Keeping teams on track",
    plain: "Where the work is planned, written down and followed through.",
    items: ["Jira", "Confluence", "Azure DevOps"],
  },
];

const TechStack = () => {
  return (
    <section className="py-24" id="tools">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
            Tools
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            What I build{" "}
            <span className="text-gradient-gold">with</span>
          </h2>
          <p className="mt-6 text-base text-muted-foreground font-light leading-relaxed">
            The plain description first, the product names underneath — useful if
            you're hiring for a specific one.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="font-serif text-base font-semibold text-foreground mb-2">
                {cat.title}
              </h3>
              <p className="text-xs text-muted-foreground font-light leading-relaxed mb-5">
                {cat.plain}
              </p>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-secondary-foreground flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
