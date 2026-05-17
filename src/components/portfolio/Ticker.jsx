import React from "react";

const items = [
  "FULL_STACK_DEVELOPER",
  "7+ YEARS EXPERIENCE",
  "NODE.JS",
  "LARAVEL/PHP",
  "REACT.JS",
  "REST API",
  "UAE GOV PLATFORMS",
  "TAMM INTEGRATED",
  "MONGODB",
  "MYSQL",
  "JWT AUTH",
  "PERFORMANCE OPT",
  "SCALABLE SYSTEMS",
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50 h-8 flex items-center overflow-hidden">
      <div className="animate-ticker flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-mono text-[11px] tracking-wider text-muted-foreground mx-6 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
