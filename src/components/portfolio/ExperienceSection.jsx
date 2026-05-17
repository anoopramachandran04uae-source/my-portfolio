import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const projects = [
  {
    id: "SYS_001",
    title: "TAMM Integrated Booking Platform",
    subtitle:
      "UAE government-integrated cultural and tourism booking platform with booking, amendment, cancellation, payment confirmation, ticketing, and reporting workflows.",
    period: "2024 — Present",
    stack: ["NODE JS", "REACT JS", "MONGO DB", "REST API", "AZURE"],
    details: [
      {
        label: "SYSTEM_RESOURCES",
        value:
          "Leading backend and full-stack development for QPortal booking, ticketing, reporting, and TAMM-integrated service flows.",
      },
      {
        label: "INTEGRATION_LAYER",
        value:
          "Built and maintained APIs for booking creation, amendment, cancellation, payment confirmation, ticket generation, and channel-based reporting.",
      },
      {
        label: "GOVERNMENT_FLOW",
        value:
          "Worked on production-ready integrations for UAE government-related cultural and tourism services connected with TAMM channels.",
      },
      {
        label: "OPERATIONS",
        value:
          "Supported deployment readiness, production sanity checks, API verification, and cross-team integration support with external frontend and stakeholder teams.",
      },
    ],
  },
  {
    id: "SYS_002",
    title: "Smart Ticketing & QR Check-In System",
    subtitle:
      "Secure ticketing and venue access system with QR validation, booking verification, customer flows, and operational admin features.",
    period: "2022 — 2024",
    stack: ["LARAVEL", "MYSQL", "VUE.JS", "REST API", "AZURE BLOB"],
    details: [
      {
        label: "TICKETING",
        value:
          "Developed ticket generation, combined ticket PDF handling, Azure Blob storage flows, and customer booking confirmation features.",
      },
      {
        label: "CHECK_IN_FLOW",
        value:
          "Built QR check-in and check-out logic with booking validation, venue access handling, and date/time-based ticket status workflows.",
      },
      {
        label: "ADMIN_PORTAL",
        value:
          "Implemented admin-side booking management, reporting, customer data handling, and operational controls for venues and facilities.",
      },
      {
        label: "RELIABILITY",
        value:
          "Improved backend logic around booking states, ticket availability, payment records, and reporting accuracy for production use.",
      },
    ],
  },
  {
    id: "SYS_003",
    title: "Identity Verification Integration Platform",
    subtitle:
      "Government API integration layer for secure customer validation, identity checks, and controlled venue/service access.",
    period: "2021 — 2023",
    stack: ["LARAVEL", "PHP", "ICP API", "DCD API", "REST API"],
    details: [
      {
        label: "IDENTITY_LAYER",
        value:
          "Integrated UAE identity verification services including ICP and DCD APIs for customer validation and booking authorization workflows.",
      },
      {
        label: "SECURITY_FLOW",
        value:
          "Handled encrypted request/response flows, validation rules, API error handling, and secure data mapping for customer verification.",
      },
      {
        label: "SERVICE_LAYER",
        value:
          "Created service-based backend structure for third-party API communication, response normalization, and controller-level integration.",
      },
      {
        label: "BUSINESS_RULES",
        value:
          "Implemented customer eligibility checks, blacklisting conditions, profile validation, and authorization rules for restricted services.",
      },
    ],
  },
  {
    id: "SYS_004",
    title: "Admin Portals & Reporting Systems",
    subtitle:
      "Enterprise admin portals for booking operations, venue management, reports, bilingual content, and transaction visibility.",
    period: "2019 — 2021",
    stack: ["LARAVEL", "MYSQL", "VUE.JS", "JAVASCRIPT", "REST API"],
    details: [
      {
        label: "ADMIN_SYSTEMS",
        value:
          "Built admin panels, CRUD modules, venue configuration screens, facility management tools, and booking operation workflows.",
      },
      {
        label: "REPORTING",
        value:
          "Created reporting features for orders, invoices, transactions, bookings, check-in statuses, and channel-based visibility.",
      },
      {
        label: "DATABASE",
        value:
          "Designed MySQL queries, joins, indexes, and optimized reporting queries using Laravel Eloquent and raw SQL where needed.",
      },
      {
        label: "BILINGUAL_CONTENT",
        value:
          "Worked with Arabic and English content fields, venue details, customer additional data, and multilingual admin management.",
      },
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-[11px] tracking-[0.4em] text-primary block mb-4">
            // SYSTEM LEDGER
          </span>

          <h2 className="font-tight font-black text-4xl md:text-5xl uppercase tracking-tight">
            EXPERIENCE
          </h2>

          <div className="w-16 h-px bg-primary mt-6" />
        </motion.div>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <ExperienceCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
