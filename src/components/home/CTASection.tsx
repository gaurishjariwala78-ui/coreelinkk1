import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-primary" />
          
          {/* Gradient Overlays */}
          <div className="absolute top-0 right-0 w-1/2 h-full gradient-accent opacity-20" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-accent/30 blur-[100px]" />
          <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-accent-warm/20 blur-[100px]" />
          
          {/* Content */}
          <div className="relative z-10 px-8 py-20 md:px-16 md:py-24 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-headline font-heading text-primary-foreground mb-6"
            >
              Ready to Transform Your{" "}
              <span className="text-accent">Digital Presence?</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-primary-foreground/80 text-body-lg max-w-2xl mx-auto mb-10"
            >
              Let's discuss how we can help you build a powerful brand, 
              grow your audience, and achieve your business goals.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button variant="accent" size="xl" className="group">
                Book Your Free Strategy Call
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
