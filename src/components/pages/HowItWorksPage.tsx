import React from 'react';
import { motion } from 'motion/react';
import { 
  UserCheck, CalendarCheck, CreditCard, Bell,
  Settings, LayoutDashboard, PieChart, Star,
  ArrowRight, CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';

const clientSteps = [
  { icon: UserCheck, title: "Escolha o Serviço", desc: "O cliente acessa seu link exclusivo e escolhe o serviço e o profissional favorito." },
  { icon: CalendarCheck, title: "Agendamento Online", desc: "Visualiza os horários disponíveis em tempo real e reserva em segundos." },
  { icon: CreditCard, title: "Pagamento Seguro", desc: "Opção de pagamento antecipado ou sinal via PIX e Cartão." },
  { icon: Bell, title: "Lembretes", desc: "Recebe confirmação e lembretes automáticos via WhatsApp e E-mail." }
];

const salonSteps = [
  { icon: Settings, title: "Configuração Rápida", desc: "Cadastre seus profissionais, serviços e horários de funcionamento." },
  { icon: LayoutDashboard, title: "Gestão em Tempo Real", desc: "Acompanhe sua agenda e receba notificações de novos agendamentos." },
  { icon: PieChart, title: "Relatórios e Finanças", desc: "Veja o desempenho do salão, comissões e fluxo de caixa automaticamente." },
  { icon: Star, title: "Fidelização", desc: "Envie promoções e acompanhe o histórico de cada cliente para um atendimento VIP." }
];

export const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-grow pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Passo a Passo</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
            >
              Simples. <span className="text-secondary">Eficiente.</span> Premium.
            </motion.h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Descubra como o AgendaPro Salão simplifica a jornada do seu cliente e a gestão do seu negócio.
            </p>
          </div>

          {/* For Clients */}
          <section className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-grow bg-white/5" />
              <h2 className="text-sm font-bold text-white/40 uppercase tracking-[0.3em]">Para seus Clientes</h2>
              <div className="h-px flex-grow bg-white/5" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {clientSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="glass p-8 rounded-3xl border border-white/5 h-full hover:border-secondary/30 transition-all group bg-white/[0.01]">
                    <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                  {i < clientSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-secondary/20" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* For Salons */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-grow bg-white/5" />
              <h2 className="text-sm font-bold text-white/40 uppercase tracking-[0.3em]">Para seu Salão</h2>
              <div className="h-px flex-grow bg-white/5" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {salonSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all group bg-white/[0.01]"
                >
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <div className="text-center mt-20">
            <Link to="/register">
              <Button variant="secondary" size="lg" className="gap-2">
                Ver Demonstração Completa <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
