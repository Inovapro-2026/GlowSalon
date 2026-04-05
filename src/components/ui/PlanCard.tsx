import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Plan } from '@/lib/plans';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface PlanCardProps {
  plan: Plan;
  index: number;
}

export const PlanCard: React.FC<PlanCardProps> = ({ plan, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <Card 
        glow={plan.highlighted} 
        className={cn(
          "h-full p-8 flex flex-col relative overflow-hidden transition-all duration-500",
          plan.highlighted 
            ? "border-primary/50 bg-primary/[0.03] scale-105 z-10" 
            : "bg-white/[0.02] border-white/5 hover:border-white/20"
        )}
      >
        {plan.badge && (
          <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(124,58,237,0.5)]">
            {plan.badge}
          </div>
        )}

        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
          <p className="text-white/60 text-sm leading-relaxed">{plan.description}</p>
        </div>

        <div className="mb-8 flex items-baseline gap-1">
          {plan.price !== "Consultar" && <span className="text-white/60 text-lg font-medium">R$</span>}
          <span className="text-4xl font-bold text-white">{plan.price}</span>
          <span className="text-white/40 text-sm">{plan.period}</span>
        </div>

        <ul className="space-y-4 mb-10 flex-grow">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-white/70">
              <div className={cn(
                "w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                plan.highlighted ? "bg-primary/20 text-primary" : "bg-white/10 text-white/40"
              )}>
                <Check className="w-3 h-3" />
              </div>
              {feature}
            </li>
          ))}
        </ul>

        <Link to={plan.ctaLink} className="w-full">
          <Button 
            variant={plan.highlighted ? "neon" : "outline"} 
            className={cn(
              "w-full py-6 text-lg font-bold transition-all duration-300",
              !plan.highlighted && "bg-white/5 border-white/10 hover:bg-white/10"
            )}
          >
            {plan.cta}
          </Button>
        </Link>
      </Card>
    </motion.div>
  );
};
