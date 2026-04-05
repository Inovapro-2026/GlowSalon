import React from 'react';
import { motion } from 'motion/react';
import { Check, HelpCircle, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { PLANS } from '@/lib/plans';
import { PlanCard } from '@/components/ui/PlanCard';

const faqs = [
  { q: "Posso cancelar a qualquer momento?", a: "Sim! Não temos fidelidade nos planos mensais. Você pode cancelar quando quiser sem multas." },
  { q: "Como funciona o split de pagamentos?", a: "O valor pago pelo cliente é dividido automaticamente entre o salão e o profissional, direto na conta de cada um." },
  { q: "Preciso instalar algum software?", a: "Não. O AgendaPro é 100% online e funciona em qualquer navegador, computador ou celular." },
  { q: "Tenho suporte para migrar meus dados?", a: "Sim, no plano Premium e Enterprise ajudamos você a importar sua lista de clientes e serviços." }
];

export const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-grow pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6"
            >
              <Zap className="w-4 h-4" />
              <span>Investimento em Sucesso</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
            >
              Planos que <span className="text-accent">Crescem</span> com Você
            </motion.h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Escolha a transparência e a eficiência. Sem taxas escondidas, apenas resultados.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32 items-stretch">
            {PLANS.map((plan, i) => (
              <PlanCard key={i} plan={plan} index={i} />
            ))}
          </div>

          {/* FAQ Section */}
          <section className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Dúvidas Frequentes</h2>
              <p className="text-white/60">Tudo o que você precisa saber sobre nossos planos.</p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all bg-white/[0.01]"
                >
                  <div className="flex gap-4">
                    <HelpCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-2">{faq.q}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};
