import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/5 glass mt-auto bg-background/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(124,58,237,0.3)]">
                <Scissors className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white">AgendaPro Salão</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              A solução definitiva para gestão de salões de beleza premium. Transforme seu negócio com tecnologia e sofisticação.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl glass border border-white/5 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/20 transition-all bg-white/[0.02]">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Plataforma</h4>
            <ul className="space-y-4">
              <li><Link to="/recursos" className="text-white/60 hover:text-primary transition-colors text-sm">Recursos</Link></li>
              <li><Link to="/como-funciona" className="text-white/60 hover:text-primary transition-colors text-sm">Como funciona</Link></li>
              <li><Link to="/precos" className="text-white/60 hover:text-primary transition-colors text-sm">Preços</Link></li>
              <li><Link to="/login" className="text-white/60 hover:text-primary transition-colors text-sm">Entrar</Link></li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="font-bold text-white mb-6">Suporte</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">Central de Ajuda</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">Documentação</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">Status do Sistema</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">Contato</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-6">Newsletter</h4>
            <p className="text-white/60 text-sm mb-4">Receba dicas de gestão e novidades do setor.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm w-full focus:outline-none focus:border-primary/30 text-white placeholder:text-white/30"
              />
              <button className="bg-primary text-white p-2 rounded-xl hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">© 2026 AgendaPro Salão. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors text-xs">Termos de Uso</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors text-xs">Privacidade</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors text-xs">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
