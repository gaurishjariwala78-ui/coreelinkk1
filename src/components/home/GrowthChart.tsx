import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import growthVisual from "@/assets/growth-visual.jpg";

const GrowthChart = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const chartData = [
    { month: "Jan", value: 20 },
    { month: "Feb", value: 35 },
    { month: "Mar", value: 28 },
    { month: "Apr", value: 45 },
    { month: "May", value: 52 },
    { month: "Jun", value: 68 },
    { month: "Jul", value: 75 },
    { month: "Aug", value: 85 },
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <section ref={ref} className="section-padding section-muted relative overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.15 } : {}}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <img 
          src={growthVisual} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </motion.div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Chart visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="premium-card relative overflow-hidden"
          >
            {/* Chart header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold">Client Growth</h3>
                <p className="text-sm text-muted-foreground">Engagement metrics</p>
              </div>
              <div className="flex items-center gap-1 text-accent">
                <ArrowUpRight className="w-4 h-4" />
                <span className="text-sm font-medium">+127%</span>
              </div>
            </div>

            {/* Animated bar chart */}
            <div className="flex items-end justify-between gap-2 sm:gap-4 h-48 sm:h-56">
              {chartData.map((data, index) => (
                <div key={data.month} className="flex flex-col items-center flex-1">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={isInView ? { height: `${(data.value / maxValue) * 100}%` } : {}}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    className="w-full relative group"
                  >
                    <div className="absolute inset-0 rounded-t-lg gradient-accent opacity-80 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap"
                    >
                      {data.value}%
                    </motion.div>
                  </motion.div>
                  <span className="text-xs text-muted-foreground mt-2">{data.month}</span>
                </div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 border border-dashed border-accent/30 rounded-full"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Proven Results
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading mt-4 mb-6">
              Data-Driven <span className="gradient-text">Success</span>
            </h2>
            <p className="text-muted-foreground text-body-lg leading-relaxed mb-6">
              Our strategies are backed by real data. We continuously monitor, analyze, 
              and optimize every campaign to ensure maximum ROI for your brand.
            </p>

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Engagement Rate", value: "8.5%", trend: "+2.3%" },
                { label: "Conversion Rate", value: "12.4%", trend: "+4.1%" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="p-4 bg-secondary/50 rounded-xl"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    <span className="text-xs text-accent font-medium">{item.trend}</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-heading font-bold">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GrowthChart;
