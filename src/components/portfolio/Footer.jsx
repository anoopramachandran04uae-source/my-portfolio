import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/30 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/anoopramachandran04uae-source"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/anoop-ramachandran-69aa91125/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="mailto:anoopramachandran04@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/60 text-center sm:text-right">
          © {new Date().getFullYear()} ANOOP RAMACHANDRAN — ALL SYSTEMS
          OPERATIONAL
        </div>
      </div>
    </footer>
  );
}
