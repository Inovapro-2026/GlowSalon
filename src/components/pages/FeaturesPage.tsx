import React from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, Users, Scissors, TrendingUp, 
  MessageSquare, CreditCard, Shield, Zap,
  Clock, Smartphone, BarChart3, Heart, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';

const features = [
  {
    category: "Gestão de Agenda",
    icon: Calendar,
    title: "Agenda Inteligente",
    description: "Sistema de arrastar e soltar com bloqueios automáticos e recorrência de serviços.",
    color: "bg-primary/10 text-primary"
  },
  {
    category: "Profissionais",
    icon: Users,
    title: "Gestão de Equipe",
    description: "Cálculo automático de comissões, permissões personalizadas e relatórios de desempenho.",
    color: "bg-secondary/10 text-secondary"
  },
  {
    category: "Serviços",
    icon: Scissors,
    title: "Catálogo Digital",
    description: "Organize seus serviços por categorias, tempo de execução e materiais necessários.",
    color: "bg-accent/10 text-accent"
  },
  {
    category: "Financeiro",
    icon: TrendingUp,
    title: "Fluxo de Caixa",
    description: "Controle total de entradas, saídas, despesas fixas e fechamento de caixa diário.",
    color: "bg-primary/10 text-primary"
  },
  {
    category: "Marketing",
    icon: MessageSquare,
    title: "Automação WhatsApp",
    description: "Lembretes de agendamento e mensagens de aniversário automáticas para fidelização.",
    color: "bg-secondary/10 text-secondary"
  },
  {
    category: "Pagamentos",
    icon: CreditCard,
    title: "Split de Pagamento",
    description: "Receba e já divida a comissão do profissional automaticamente via PIX ou Cartão.",
    color: "bg-accent/10 text-accent"
  }
];

export const FeaturesPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-grow pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            >
              <Zap className="w-4 h-4" />
              <span>Funcionalidades de Elite</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
            >
              Recursos que <span className="text-gradient">Transformam</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 max-w-2xl mx-auto"
            >
              Tudo o que você precisa para gerenciar seu salão com a sofisticação e eficiência que seus clientes merecem.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-all group bg-white/[0.01]"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary/60 mb-2 block">
                  {feature.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mt-20 p-12 rounded-[3rem] bg-white/[0.02] border border-white/10 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full -mr-32 -mt-32" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-6">Pronto para elevar o nível do seu salão?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button variant="neon" size="lg" className="gap-2">
                    Começar Teste Grátis <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Falar com Especialista
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
