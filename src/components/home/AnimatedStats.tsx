import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Users, Target, Zap } from "lucide-react";

const AnimatedCounter = ({ 
  value, 
  suffix = "", 
  duration = 2 
}: { 
  value: number; 
  suffix?: string; 
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = value;
    const incrementTime = (duration * 1000) / end;
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 50);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [isInView, value, duration]);
  
  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const stats = [
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Happy Clients",
    description: "Trusted partners",
    color: "from-accent to-accent-warm",
  },
  {
    icon: Target,
    value: 2,
    suffix: "M+",
    label: "Audience Reached",
    description: "Monthly impressions",
    color: "from-accent-warm to-accent-gold",
  },
  {
    icon: TrendingUp,
    value: 300,
    suffix: "%",
    label: "Avg. Growth",
    description: "Client performance",
    color: "from-accent-gold to-accent",
  },
  {
    icon: Zap,
    value: 150,
    suffix: "+",
    label: "Campaigns",
    description: "Successfully delivered",
    color: "from-accent to-accent-gold",
  },
];

const AnimatedStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Our Impact
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading mt-3">
            Numbers That <span className="gradient-text">Speak</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="premium-card text-center relative overflow-hidden">
                {/* Animated gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                {/* Icon with animated ring */}
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className={`absolute inset-0 rounded-full border-2 border-dashed border-accent/20`}
                  />
                  <div className={`absolute inset-1 sm:inset-2 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                </div>
                
                {/* Animated number */}
                <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold gradient-text mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                
                <h3 className="text-sm sm:text-base font-heading font-semibold mb-1">
                  {stat.label}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
