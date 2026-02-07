import { motion } from "framer-motion";
import { useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const ParticleBackground = ({ count = 20 }: { count?: number }) => {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-accent/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() > 0.5 ? 15 : -15, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Connecting lines animation */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <motion.line
          x1="10%"
          y1="20%"
          x2="30%"
          y2="40%"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.line
          x1="70%"
          y1="30%"
          x2="90%"
          y2="60%"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
        <motion.line
          x1="50%"
          y1="70%"
          x2="80%"
          y2="85%"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 2 }}
        />
      </svg>
    </div>
  );
};

export default ParticleBackground;
