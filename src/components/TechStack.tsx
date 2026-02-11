import { motion } from "framer-motion";

const categories = [
  {
    title: "Core Architecture",
    items: ["Microservices", "API-led Integration", "Kafka", "Event-driven Architecture", "Cloud Migration"],
  },
  {
    title: "Banking Platforms",
    items: ["Temenos", "Oracle", "Mambu", "Finacle"],
  },
  {
    title: "Data & Reporting",
    items: ["Power BI", "Tableau", "Snowflake", "BigQuery"],
  },
  {
    title: "Agile & Governance",
    items: ["Jira", "Confluence", "Azure DevOps"],
  },
];

const TechStack = () => {
  return (
    <section className="py-24" id="tech">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">Technology</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            Architecture &{" "}
            <span className="text-gradient-gold">Stack</span>
          </h2>
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
              <h3 className="font-serif text-sm font-semibold text-primary mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-secondary-foreground flex items-center gap-2">
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
