import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { 
  Scissors, Calendar, CreditCard, Star, Shield, Zap, 
  ArrowRight, CheckCircle2, XCircle, PlayCircle, 
  Users, BarChart3, MessageSquare 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PLANS } from '@/lib/plans';
import { PlanCard } from '@/components/ui/PlanCard';
import { DemoCards } from '@/components/sections/DemoCards';

export const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                <span>O Futuro da Gestão de Salões</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6 text-white">
                Organize seu salão, <span className="text-gradient">aumente seus lucros</span> e automatize sua agenda
              </h1>
              <p className="text-xl text-white/60 mb-10 max-w-lg">
                Sistema inteligente para agendamentos, pagamentos e gestão completa do seu salão. Tudo o que você precisa para escalar seu negócio com estilo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" variant="neon" className="gap-2 w-full sm:w-auto">
                    Começar Grátis <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Agendar Demonstração
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
              <Card className="relative p-2 overflow-hidden border-white/10 bg-white/5 backdrop-blur-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern Salon Dashboard"
                  className="rounded-2xl w-full h-auto object-cover shadow-2xl opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-2xl border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-lg">Dashboard Premium</p>
                      <p className="text-white/60 text-sm">Controle total na palma da mão</p>
                    </div>
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-primary/20" />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Problem -> Solution Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-white">Diga adeus à desorganização</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Transformamos os maiores problemas do seu salão em soluções automatizadas e eficientes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  problem: 'Agenda desorganizada e conflitos de horários', 
                  solution: 'Agenda inteligente com bloqueios automáticos',
                  icon: Calendar
                },
                { 
                  problem: 'Clientes esquecendo e faltas constantes', 
                  solution: 'Lembretes automáticos via WhatsApp e E-mail',
                  icon: MessageSquare
                },
                { 
                  problem: 'Confusão no cálculo de comissões', 
                  solution: 'Cálculo e split de pagamentos automáticos',
                  icon: CreditCard
                }
              ].map((item, i) => (
                <Card key={i} className="flex flex-col gap-6 border-white/5 bg-white/[0.02]">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <item.icon className="text-primary w-6 h-6" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 text-red-400/80">
                      <XCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                      <p className="text-sm">{item.problem}</p>
                    </div>
                    <div className="flex items-start gap-3 text-accent">
                      <CheckCircle2 className="w-5 h-5 mt-1 flex-shrink-0" />
                      <p className="text-sm font-medium">{item.solution}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 px-6 bg-white/[0.02] relative overflow-hidden">
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-4 text-white">Como funciona</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Quatro passos simples para modernizar seu salão e encantar seus clientes.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Cliente agenda online', desc: 'Link exclusivo para agendamento 24/7.' },
                { step: '02', title: 'Organização automática', desc: 'O sistema aloca horários e profissionais.' },
                { step: '03', title: 'Notificações automáticas', desc: 'Lembretes enviados sem você mover um dedo.' },
                { step: '04', title: 'Gestão completa', desc: 'Relatórios, finanças e equipe sob controle.' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className="text-6xl font-bold text-white/5 absolute -top-10 -left-4 group-hover:text-primary/10 transition-colors">
                    {item.step}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-white/10" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Cards Section */}
        <DemoCards />

        {/* Benefits Section */}
        <section id="features" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-white">Benefícios Exclusivos</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Tudo o que você precisa para uma gestão de elite, com a tecnologia que seu salão merece.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Calendar, title: 'Agenda Inteligente', desc: 'Evite conflitos e otimize o tempo dos seus profissionais com nossa agenda intuitiva.' },
                { icon: CreditCard, title: 'Pagamentos Automáticos', desc: 'Receba via Mercado Pago com checkout transparente e split automático de comissões.' },
                { icon: Shield, title: 'Gestão de Clientes', desc: 'Histórico completo, preferências e sistema de fidelidade integrado.' },
                { icon: BarChart3, title: 'Relatórios Financeiros', desc: 'Acompanhe faturamento, despesas e lucros em tempo real com gráficos claros.' },
                { icon: Users, title: 'Controle da Equipe', desc: 'Gestão de escalas, comissões individuais e metas de produtividade.' },
                { icon: Zap, title: 'Alta Performance', desc: 'Sistema rápido, seguro e disponível em qualquer dispositivo, 24 horas por dia.' },
              ].map((feature, i) => (
                <Card key={i} className="group hover:border-primary/50 bg-white/[0.01]">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="text-primary w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{feature.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* System Demo Section */}
        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-16 text-white">Sua gestão em outro nível</h2>
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full" />
              <div className="relative glass rounded-[2.5rem] p-4 border-white/10 shadow-2xl">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/40 flex items-center justify-center group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200" 
                    alt="System Preview"
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-20 h-20 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-transform">
                      <PlayCircle className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-white font-medium">Ver demonstração em vídeo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 px-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10" />
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Planos que Crescem com Você</h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">Escolha o plano ideal para o momento do seu salão. Transparência total, sem taxas escondidas.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
              {PLANS.map((plan, i) => (
                <PlanCard key={i} plan={plan} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">Comece agora e transforme seu salão</h2>
            <p className="text-xl text-white/60 mb-12">
              Junte-se a centenas de salões que já automatizaram sua gestão e aumentaram seus lucros.
            </p>
            <Link to="/register">
              <Button size="lg" variant="neon" className="px-12 py-6 text-xl">
                Testar Grátis
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

