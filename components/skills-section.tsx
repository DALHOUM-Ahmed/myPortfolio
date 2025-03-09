"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code,
  Database,
  Server,
  Globe,
  Cpu,
  Shield,
  Layers,
  Terminal,
  Braces,
  Cloud,
  GitBranch,
  Zap,
} from "lucide-react";

const skills = [
  { name: "Solidity", icon: <Code className="w-6 h-6" />, level: 95 },
  {
    name: "Smart Contract Testing",
    icon: <Shield className="w-6 h-6" />,
    level: 90,
  },
  { name: "Cryptography", icon: <Lock className="w-6 h-6" />, level: 85 },
  { name: "JavaScript", icon: <Braces className="w-6 h-6" />, level: 90 },
  { name: "Web3", icon: <Globe className="w-6 h-6" />, level: 95 },
  {
    name: "Subgraph Indexing",
    icon: <Database className="w-6 h-6" />,
    level: 85,
  },
  { name: "Golang", icon: <Terminal className="w-6 h-6" />, level: 80 },
  { name: "Python", icon: <Terminal className="w-6 h-6" />, level: 85 },
  { name: "Machine Learning", icon: <Cpu className="w-6 h-6" />, level: 75 },
  { name: "React", icon: <Layers className="w-6 h-6" />, level: 85 },
  { name: "Express.js", icon: <Server className="w-6 h-6" />, level: 80 },
  { name: "AWS", icon: <Cloud className="w-6 h-6" />, level: 80 },
  { name: "Git", icon: <GitBranch className="w-6 h-6" />, level: 90 },
  { name: "Linux", icon: <Terminal className="w-6 h-6" />, level: 85 },
  { name: "GDScript", icon: <Zap className="w-6 h-6" />, level: 70 },
];

function Lock(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Skills & Expertise
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-purple-500/10 shadow-lg hover:shadow-purple-500/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 text-purple-400">{skill.icon}</div>
                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.2 * index }}
                  className="h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
                ></motion.div>
              </div>
              <p className="text-right text-sm text-gray-400 mt-1">
                {skill.level}%
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
