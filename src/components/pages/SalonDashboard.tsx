import React from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Scissors, 
  TrendingUp, 
  Settings, 
  LogOut,
  Bell,
  Search,
  Plus,
  DollarSign,
  Clock,
  ChevronRight
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const data = [
  { name: 'Seg', valor: 4000 },
  { name: 'Ter', valor: 3000 },
  { name: 'Qua', valor: 2000 },
  { name: 'Qui', valor: 2780 },
  { name: 'Sex', valor: 1890 },
  { name: 'Sab', valor: 2390 },
  { name: 'Dom', valor: 3490 },
];

export const SalonDashboard = () => {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-72 glass border-r border-white/5 p-8 hidden lg:flex flex-col relative z-20">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.3)]">
            <Scissors className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">AgendaPro</span>
        </div>

        <nav className="space-y-2 flex-grow">
          {[
            { icon: LayoutDashboard, label: 'Dashboard', active: true },
            { icon: Calendar, label: 'Agenda' },
            { icon: Scissors, label: 'Serviços' },
            { icon: Users, label: 'Profissionais' },
            { icon: TrendingUp, label: 'Financeiro' },
            { icon: Settings, label: 'Configurações' },
          ].map((item, i) => (
            <button
              key={i}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all group',
                item.active 
                  ? 'bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(124,58,237,0.05)]' 
                  : 'text-white/40 hover:text-white hover:bg-white/5'
              )}
            >
              <item.icon className={cn('w-5 h-5 transition-transform group-hover:scale-110', item.active ? 'text-primary' : 'text-white/40')} />
              <span className="font-medium text-sm">{item.label}</span>
              {item.active && <ChevronRight className="w-4 h-4 ml-auto" />}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-white/5">
          <div className="flex items-center gap-3 mb-6 p-2 rounded-xl bg-white/5">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
              JD
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-white truncate">João Designer</p>
              <p className="text-xs text-white/40 truncate">Admin</p>
            </div>
          </div>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-xl transition-all">
            <LogOut className="w-5 h-5" />
            <span className="font-medium text-sm">Sair do Sistema</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 lg:p-12 overflow-y-auto relative z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full -z-10" />
        
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-white tracking-tight">Olá, AgendaPro! 👋</h1>
            <p className="text-white/60 mt-1">Aqui está o resumo do seu salão hoje.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden xl:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20 w-4 h-4" />
              <input 
                placeholder="Buscar cliente ou serviço..." 
                className="bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 w-72 text-white placeholder:text-white/20"
              />
            </div>
            <Button variant="outline" size="icon" className="relative bg-white/5 border-white/10">
              <Bell className="w-5 h-5 text-white/70" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
            </Button>
            <Button variant="neon" className="gap-2 shadow-lg shadow-primary/20">
              <Plus className="w-4 h-4" /> Novo Agendamento
            </Button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Faturamento Total', value: 'R$ 12.450', icon: DollarSign, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
            { label: 'Agendamentos', value: '42', icon: Calendar, color: 'text-primary', bg: 'bg-primary/10' },
            { label: 'Novos Clientes', value: '12', icon: Users, color: 'text-secondary', bg: 'bg-secondary/10' },
            { label: 'Tempo Médio', value: '45 min', icon: Clock, color: 'text-accent', bg: 'bg-accent/10' },
          ].map((stat, i) => (
            <Card key={i} className="flex items-center gap-4 bg-white/[0.02] border-white/5 p-6 group hover:border-primary/30 transition-all">
              <div className={cn('w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110', stat.bg)}>
                <stat.icon className={cn('w-7 h-7', stat.color)} />
              </div>
              <div>
                <p className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 p-8 bg-white/[0.02] border-white/5">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h3 className="text-xl font-bold text-white">Desempenho Semanal</h3>
                <p className="text-white/40 text-sm">Faturamento bruto por dia</p>
              </div>
              <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none text-white focus:ring-2 focus:ring-primary/30 transition-all">
                <option className="bg-background">Últimos 7 dias</option>
                <option className="bg-background">Últimos 30 dias</option>
              </select>
            </div>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValor" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#7C3AED" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    stroke="#ffffff20" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                    dy={10}
                  />
                  <YAxis 
                    stroke="#ffffff20" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                    dx={-10}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#16161a', 
                      border: '1px solid rgba(255,255,255,0.1)', 
                      borderRadius: '16px',
                      backdropBlur: '12px'
                    }}
                    itemStyle={{ color: '#7C3AED' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="valor" 
                    stroke="#7C3AED" 
                    strokeWidth={4} 
                    fillOpacity={1} 
                    fill="url(#colorValor)" 
                    animationDuration={2000}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-8 bg-white/[0.02] border-white/5">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-white">Próximos</h3>
              <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">Ver todos</Button>
            </div>
            <div className="space-y-6">
              {[
                { name: 'Ana Silva', service: 'Corte + Coloração', time: '14:30', avatar: 'AS', status: 'Confirmado' },
                { name: 'Pedro Santos', service: 'Barba Premium', time: '15:15', avatar: 'PS', status: 'Aguardando' },
                { name: 'Carla Lima', service: 'Manicure', time: '16:00', avatar: 'CL', status: 'Confirmado' },
                { name: 'Julia Costa', service: 'Escova Progressiva', time: '17:30', avatar: 'JC', status: 'Confirmado' },
                { name: 'Marcos Oliveira', service: 'Corte Masculino', time: '18:15', avatar: 'MO', status: 'Confirmado' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer p-2 -mx-2 rounded-xl hover:bg-white/5 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-sm border border-primary/20 transition-transform group-hover:scale-110">
                      {item.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-white group-hover:text-primary transition-colors">{item.name}</p>
                      <p className="text-white/40 text-[11px] font-medium">{item.service}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-sm text-white">{item.time}</p>
                    <p className={cn(
                      "text-[10px] uppercase font-bold tracking-wider",
                      item.status === 'Confirmado' ? 'text-accent' : 'text-amber-400'
                    )}>{item.status}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 p-4 rounded-2xl bg-primary/5 border border-primary/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <p className="text-xs font-bold text-white">Meta Mensal</p>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-primary w-[75%] shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
              </div>
              <div className="flex justify-between text-[10px] text-white/40 font-bold">
                <span>R$ 15.000</span>
                <span className="text-primary">75%</span>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};
