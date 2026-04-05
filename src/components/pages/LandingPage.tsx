import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Scissors, Calendar, CreditCard, Star, Shield, Zap, ArrowRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              <Scissors className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              GlowSalon
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-white/70 hover:text-white transition-colors">Recursos</a>
            <a href="#how-it-works" className="text-white/70 hover:text-white transition-colors">Como funciona</a>
            <a href="#pricing" className="text-white/70 hover:text-white transition-colors">Preços</a>
            <Link to="/login">
              <Button variant="ghost">Entrar</Button>
            </Link>
            <Link to="/register">
              <Button variant="neon">Começar Agora</Button>
            </Link>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>O Futuro da Gestão de Salões</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
              Transforme seu Salão em uma <span className="text-primary neon-text-purple">Experiência Premium</span>
            </h1>
            <p className="text-xl text-white/60 mb-10 max-w-lg">
              Gestão completa, agendamento inteligente e pagamentos integrados. Tudo o que você precisa para escalar seu negócio com estilo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="neon" className="gap-2">
                Experimentar Grátis <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                Ver Demonstração
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
            <Card className="relative p-2 overflow-hidden border-primary/30">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Salon"
                className="rounded-2xl w-full h-auto object-cover shadow-2xl"
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

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Recursos que Impulsionam seu Negócio</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Desenvolvemos cada funcionalidade pensando na eficiência do seu salão e na satisfação do seu cliente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Calendar, title: 'Agendamento Inteligente', desc: 'Evite conflitos e otimize o tempo dos seus profissionais com nossa agenda intuitiva.' },
              { icon: CreditCard, title: 'Pagamentos Integrados', desc: 'Receba via Mercado Pago com checkout transparente e split automático de comissões.' },
              { icon: Shield, title: 'Gestão Multi-Tenant', desc: 'Segurança total dos dados e isolamento completo para cada unidade do seu negócio.' },
              { icon: Star, title: 'Fidelização de Clientes', desc: 'Sistema de avaliações e histórico completo para oferecer um atendimento personalizado.' },
              { icon: Zap, title: 'Automação de Marketing', desc: 'Envie lembretes automáticos via WhatsApp e E-mail para reduzir faltas.' },
              { icon: Scissors, title: 'Gestão de Profissionais', desc: 'Controle de escalas, comissões e produtividade de toda a sua equipe.' },
            ].map((feature, i) => (
              <Card key={i} className="group hover:border-primary/50">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Planos que Crescem com Você</h2>
            <p className="text-white/60">Escolha o plano ideal para o momento do seu salão.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Essencial', price: '97', features: ['Até 3 Profissionais', 'Agendamento Online', 'Relatórios Básicos'] },
              { name: 'Premium', price: '197', popular: true, features: ['Profissionais Ilimitados', 'Pagamentos Mercado Pago', 'Marketing Automatizado', 'Suporte VIP'] },
              { name: 'Enterprise', price: '497', features: ['Multi-unidades', 'API de Integração', 'Gerente de Conta', 'Customizações'] },
            ].map((plan, i) => (
              <Card key={i} className={cn('relative flex flex-col', plan.popular && 'border-primary shadow-[0_0_30px_rgba(168,85,247,0.2)]')}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Mais Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">R$ {plan.price}</span>
                    <span className="text-white/60">/mês</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-white/70">
                      <Zap className="w-4 h-4 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.popular ? 'neon' : 'outline'} className="w-full">
                  Assinar Agora
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 glass">
        <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Scissors className="text-primary w-6 h-6" />
            <span className="text-xl font-bold">GlowSalon</span>
          </div>
          <p className="text-white/40 text-sm">© 2026 GlowSalon SaaS. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors">Termos</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
