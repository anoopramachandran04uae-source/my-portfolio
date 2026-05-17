import React from "react";
import { motion } from "framer-motion";

export default function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border border-border/50 bg-card/40 backdrop-blur-sm p-6 group hover:border-primary/30 transition-all duration-500"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-[10px] tracking-[0.3em] text-primary">
          {skill.id}
        </span>
        <div className="flex-1 h-px bg-border/30 group-hover:bg-primary/20 transition-colors" />
      </div>

      <h3 className="font-tight font-bold text-lg uppercase tracking-tight text-foreground mb-3">
        {skill.title}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
        {skill.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {skill.technologies.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[10px] tracking-wider text-primary/70 bg-primary/5 border border-primary/10 px-2 py-0.5"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-border/20">
        <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground block mb-1.5">
          PROOF_POINT
        </span>
        <p className="text-xs text-muted-foreground/80 leading-relaxed">
          {skill.proof}
        </p>
      </div>
    </motion.div>
  );
}
