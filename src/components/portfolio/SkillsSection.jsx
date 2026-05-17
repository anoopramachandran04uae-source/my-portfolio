import React from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const skills = [
  {
    id: "SK_01",
    title: "Backend Architecture",
    description:
      "Designing and building scalable server-side systems that handle millions of requests with minimal latency.",
    technologies: ["NODE.JS", "TYPE SCRYPT", "EXPRESS.JS", "LARAVEL", "PHP"],
    proof:
      "Architected TAMM-integrated backend serving UAE government services with 99.9% uptime and sub-200ms response times.",
  },
  {
    id: "SK_02",
    title: "REST API Development",
    description:
      "Creating robust, well-documented APIs with proper versioning, authentication, and error handling.",
    technologies: ["REST", "OPENAPI", "SWAGGER", "GRAPHQL"],
    proof:
      "Built centralized API gateway routing across 15+ microservices with comprehensive documentation and monitoring.",
  },
  {
    id: "SK_03",
    title: "Frontend Engineering",
    description:
      "Building responsive, performant user interfaces with modern JavaScript frameworks and best practices.",
    technologies: ["REACT.JS", "NEXT.JS", "JAVASCRIPT", "TAILWIND"],
    proof:
      "Developed dynamic content platforms with bilingual AR/EN support and real-time data visualization dashboards.",
  },
  {
    id: "SK_04",
    title: "Database Engineering",
    description:
      "Designing efficient schemas, writing optimized queries, and managing data at scale across SQL and NoSQL systems.",
    technologies: ["MONGODB", "MYSQL", "REDIS", "INDEXING"],
    proof:
      "Optimized database queries reducing response times by 60% through strategic indexing and caching layers.",
  },
  {
    id: "SK_05",
    title: "Security & Authentication",
    description:
      "Implementing secure authentication, authorization, request validation, and API protection for production systems.",
    technologies: [
      "JWT",
      "CORS",
      "HELMET",
      "RATE LIMITING",
      "INPUT VALIDATION",
      "ENCRYPTION",
    ],
    proof:
      "Built secure authentication and authorization flows with JWT, role-based access control, encrypted data handling, and protected API endpoints for enterprise and government-related platforms.",
  },
  {
    id: "SK_06",
    title: "Performance & Scalability",
    description:
      "Optimizing backend performance, asynchronous processing, caching strategies, and scalable system architecture for production workloads.",
    technologies: [
      "REDIS",
      "RABBITMQ",
      "BULLMQ",
      "CACHING",
      "QUEUE JOBS",
      "LOAD BALANCING",
      "INDEXING",
    ],
    proof:
      "Built scalable backend workflows using Redis caching, queue-based job processing, and asynchronous task handling for booking, notification, and operational systems.",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 px-6 grid-hairline">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-[11px] tracking-[0.4em] text-primary block mb-4">
            // LOGIC STACK
          </span>
          <h2 className="font-tight font-black text-4xl md:text-5xl uppercase tracking-tight">
            EXPERTISE
          </h2>
          <div className="w-16 h-px bg-primary mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.id} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
