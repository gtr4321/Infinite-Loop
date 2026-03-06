import { motion } from "framer-motion";
import { Award } from "lucide-react";

const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663287023784/FU8KrTQkmJEEcfhuSWS3mH/about-bg-ADjNM8Z7CoXEzicpj8ZMjy.webp";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Python / AI", level: 85 },
  { name: "Node.js", level: 88 },
  { name: "系统设计", level: 82 },
  { name: "UI/UX 设计", level: 78 },
];

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <div>
      <section className="relative -mt-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ABOUT_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060b18]/50 via-[#060b18]/70 to-background" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              关于<span className="gradient-text">我们</span>
            </h1>
            <p className="text-lg text-[#94a3b8] max-w-2xl">
              略
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="glass-card rounded-2xl p-8 w-full"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center text-[#60a5fa]">
              <Award size={16} />
            </div>
            <h3 className="text-lg font-display font-semibold text-white">技能专长</h3>
          </div>
          <div className="space-y-5">
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={fadeUp}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-[#e2e8f0]">{skill.name}</span>
                  <span className="text-xs text-[#60a5fa]">{skill.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-[#1e293b] overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
