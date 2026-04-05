import React from 'react';
import { motion } from 'motion/react';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Scissors, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const LoginPage = ({ type }: { type: 'client' | 'salon' | 'admin' }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock login delay
    setTimeout(() => {
      setIsLoading(false);
      if (type === 'salon') navigate('/dashboard/salon');
      else if (type === 'admin') navigate('/dashboard/admin');
      else navigate('/dashboard/client');
    }, 1500);
  };

  const titles = {
    client: 'Área do Cliente',
    salon: 'Painel do Salão',
    admin: 'Administração Central',
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background text-foreground relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="flex flex-col items-center mb-8">
          <Link to="/">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.3)] mb-4 hover:scale-110 transition-transform">
              <Scissors className="text-white w-8 h-8" />
            </div>
          </Link>
          <h1 className="text-3xl font-bold text-white tracking-tight">{titles[type]}</h1>
          <p className="text-white/60 mt-2 text-sm">Entre com suas credenciais para continuar</p>
        </div>

        <Card glow className="p-8 bg-white/[0.02] border-white/10 backdrop-blur-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <Input 
                label="E-mail" 
                type="email" 
                placeholder="seu@email.com" 
                required 
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary/50"
              />
              <Input 
                label="Senha" 
                type="password" 
                placeholder="••••••••" 
                required 
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary/50"
              />
            </div>
            
            <Button type="submit" variant="neon" className="w-full py-6 text-lg" isLoading={isLoading}>
              Entrar <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-white/40 text-sm">
              Não tem uma conta?{' '}
              <Link to="/register" className="text-primary hover:text-primary/80 transition-colors font-medium">
                Cadastre-se aqui
              </Link>
            </p>
          </div>
        </Card>

        <div className="mt-8 flex justify-center gap-4">
          <Link to="/" className="text-white/40 hover:text-white text-sm transition-colors flex items-center gap-2">
            ← Voltar para Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
