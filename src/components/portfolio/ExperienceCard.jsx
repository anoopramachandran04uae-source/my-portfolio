import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function ExperienceCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-border/50 bg-card/50 backdrop-blur-sm group"
    >
      <div
        className="p-6 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[10px] tracking-[0.3em] text-primary">
                {project.id}
              </span>
              <div className="flex-1 h-px bg-border/50" />
              <span className="font-mono text-[10px] text-muted-foreground">
                {project.period}
              </span>
            </div>

            <h3 className="font-tight font-bold text-xl uppercase tracking-tight text-foreground mb-2">
              {project.title}
            </h3>

            <p className="font-mono text-[11px] text-muted-foreground leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          <ChevronRight
            size={16}
            className={`text-muted-foreground transition-transform duration-300 mt-1 ${expanded ? "rotate-90" : "group-hover:translate-x-1"}`}
          />
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] tracking-wider text-primary/80 border border-primary/20 px-2 py-0.5 bg-primary/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {expanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="border-t border-border/30 px-6 py-5 bg-card/80"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.details.map((detail, i) => (
              <div key={i}>
                <span className="font-mono text-[10px] tracking-[0.2em] text-primary block mb-1">
                  {detail.label}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
