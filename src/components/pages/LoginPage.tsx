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
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.5)] mb-4">
            <Scissors className="text-white w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold">{titles[type]}</h1>
          <p className="text-white/60 mt-2">Entre com suas credenciais para continuar</p>
        </div>

        <Card glow className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <Input label="E-mail" type="email" placeholder="seu@email.com" required />
            <Input label="Senha" type="password" placeholder="••••••••" required />
            
            <Button type="submit" variant="neon" className="w-full" isLoading={isLoading}>
              Entrar <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-white/40 text-sm">
              Não tem uma conta?{' '}
              <Link to="/register" className="text-primary hover:underline">
                Cadastre-se aqui
              </Link>
            </p>
          </div>
        </Card>

        <div className="mt-8 flex justify-center gap-4">
          <Link to="/" className="text-white/40 hover:text-white text-sm transition-colors">
            ← Voltar para Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
