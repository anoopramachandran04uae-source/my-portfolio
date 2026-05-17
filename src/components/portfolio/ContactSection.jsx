import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focused, setFocused] = useState(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-[11px] tracking-[0.4em] text-primary block mb-4">
            // API GATEWAY
          </span>
          <h2 className="font-tight font-black text-4xl md:text-5xl uppercase tracking-tight">
            INITIATE CONTACT
          </h2>
          <div className="w-16 h-px bg-primary mt-6" />
        </motion.div>

        {/* Terminal prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <div className="font-mono text-sm text-muted-foreground flex items-center gap-2">
            <span className="text-primary">guest@portfolio:~$</span>
            <span>contact --initiate</span>
            <span className="w-2 h-4 bg-primary cursor-blink" />
          </div>
        </motion.div>

        {/* Form as JSON */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border border-border/50 bg-card/30 backdrop-blur-sm"
        >
          <div className="p-6 border-b border-border/30">
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
              REQUEST_PAYLOAD.json
            </span>
          </div>

          <div className="p-6 font-mono text-sm">
            <span className="text-muted-foreground">{"{"}</span>

            {/* Name field */}
            <div className="pl-6 py-2">
              <label className="text-primary/80">"name"</label>
              <span className="text-muted-foreground">: </span>
              <span className="text-muted-foreground">"</span>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                placeholder="Your Name"
                required
                className={`bg-transparent border-none outline-none text-foreground placeholder-muted-foreground/40 w-48 sm:w-64 ${focused === "name" ? "border-b border-primary" : ""}`}
              />
              <span className="text-muted-foreground">",</span>
            </div>

            {/* Email field */}
            <div className="pl-6 py-2">
              <label className="text-primary/80">"email"</label>
              <span className="text-muted-foreground">: </span>
              <span className="text-muted-foreground">"</span>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                placeholder="your@email.com"
                required
                className={`bg-transparent border-none outline-none text-foreground placeholder-muted-foreground/40 w-48 sm:w-64 ${focused === "email" ? "border-b border-primary" : ""}`}
              />
              <span className="text-muted-foreground">",</span>
            </div>

            {/* Message field */}
            <div className="pl-6 py-2">
              <label className="text-primary/80">"message"</label>
              <span className="text-muted-foreground">: </span>
              <span className="text-muted-foreground">"</span>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                placeholder="Your message..."
                required
                rows={3}
                className={`bg-transparent border-none outline-none text-foreground placeholder-muted-foreground/40 w-full resize-none ${focused === "message" ? "border-b border-primary" : ""}`}
              />
              <span className="text-muted-foreground">"</span>
            </div>

            <span className="text-muted-foreground">{"}"}</span>
          </div>

          <div className="p-6 border-t border-border/30 flex items-center justify-between">
            <span className="font-mono text-[10px] text-muted-foreground">
              {sent ? "STATUS: 200 OK — MESSAGE_SENT" : "READY TO TRANSMIT"}
            </span>
            <button
              type="submit"
              className="flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-primary-foreground bg-primary px-5 py-2.5 hover:bg-primary/90 transition-colors min-w-[44px] min-h-[44px]"
            >
              {sent ? (
                <>
                  <CheckCircle size={14} />
                  SENT
                </>
              ) : (
                <>
                  <Send size={14} />
                  TRANSMIT
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
