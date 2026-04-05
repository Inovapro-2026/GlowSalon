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
  Clock
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
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
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 glass border-r border-white/5 p-6 hidden lg:flex flex-col">
        <div className="flex items-center gap-2 mb-12">
          <Scissors className="text-primary w-6 h-6" />
          <span className="text-xl font-bold">GlowSalon</span>
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
                'w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all',
                item.active 
                  ? 'bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <button className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-xl transition-all mt-auto">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Sair</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-bold">Olá, Studio Glow! 👋</h1>
            <p className="text-white/60">Aqui está o que está acontecendo hoje.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20 w-4 h-4" />
              <input 
                placeholder="Buscar..." 
                className="bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
              />
            </div>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
            </Button>
            <Button variant="neon" className="gap-2">
              <Plus className="w-4 h-4" /> Novo Agendamento
            </Button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Faturamento Total', value: 'R$ 12.450', icon: DollarSign, color: 'text-green-400', bg: 'bg-green-400/10' },
            { label: 'Agendamentos', value: '42', icon: Calendar, color: 'text-primary', bg: 'bg-primary/10' },
            { label: 'Novos Clientes', value: '12', icon: Users, color: 'text-secondary', bg: 'bg-secondary/10' },
            { label: 'Tempo Médio', value: '45 min', icon: Clock, color: 'text-accent', bg: 'bg-accent/10' },
          ].map((stat, i) => (
            <Card key={i} className="flex items-center gap-4">
              <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center', stat.bg)}>
                <stat.icon className={cn('w-6 h-6', stat.color)} />
              </div>
              <div>
                <p className="text-white/40 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold">Desempenho Semanal</h3>
              <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-sm outline-none">
                <option>Últimos 7 dias</option>
                <option>Últimos 30 dias</option>
              </select>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValor" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                  <XAxis dataKey="name" stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a0b2e', border: '1px solid #ffffff10', borderRadius: '12px' }}
                    itemStyle={{ color: '#a855f7' }}
                  />
                  <Area type="monotone" dataKey="valor" stroke="#a855f7" strokeWidth={3} fillOpacity={1} fill="url(#colorValor)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-xl font-bold mb-6">Próximos Agendamentos</h3>
            <div className="space-y-6">
              {[
                { name: 'Ana Silva', service: 'Corte + Coloração', time: '14:30', avatar: 'AS' },
                { name: 'Pedro Santos', service: 'Barba Premium', time: '15:15', avatar: 'PS' },
                { name: 'Carla Lima', service: 'Manicure', time: '16:00', avatar: 'CL' },
                { name: 'Julia Costa', service: 'Escova Progressiva', time: '17:30', avatar: 'JC' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs border border-primary/30">
                      {item.avatar}
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">{item.name}</p>
                      <p className="text-white/40 text-xs">{item.service}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-sm">{item.time}</p>
                    <p className="text-primary text-[10px] uppercase font-bold tracking-wider">Confirmado</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-8 text-white/40 hover:text-white">
              Ver Agenda Completa
            </Button>
          </Card>
        </div>
      </main>
    </div>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
