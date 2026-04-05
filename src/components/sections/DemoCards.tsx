import React from 'react';
import { motion } from 'motion/react';
import { 
  Mic, 
  Send, 
  MoreVertical, 
  ArrowLeft, 
  Phone, 
  Video, 
  Smile, 
  Paperclip, 
  Camera,
  Check,
  CheckCheck,
  Clock,
  Calendar as CalendarIcon,
  Plus
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const DemoCards = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Tecnologia que <span className="text-gradient">trabalha por você</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Automatize o atendimento e a organização do seu salão com interfaces intuitivas e poderosas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Card 1: WhatsApp Chat */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-[#E5DDD5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 aspect-[9/16] max-w-[380px] mx-auto">
              {/* WhatsApp Header */}
              <div className="bg-[#075E54] p-4 flex items-center gap-3 text-white">
                <ArrowLeft className="w-5 h-5" />
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center overflow-hidden border border-white/10">
                  <img 
                    src="https://picsum.photos/seed/salon/100/100" 
                    alt="Salon Avatar" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-grow">
                  <p className="font-bold text-sm">AgendaPro Salão</p>
                  <p className="text-[10px] opacity-80">Online</p>
                </div>
                <div className="flex gap-4">
                  <Video className="w-5 h-5" />
                  <Phone className="w-5 h-5" />
                  <MoreVertical className="w-5 h-5" />
                </div>
              </div>

              {/* Chat Area */}
              <div className="p-4 space-y-4 h-[calc(100%-120px)] overflow-y-auto bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat">
                {/* System Message */}
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] relative">
                    <p className="text-sm text-gray-800">
                      Você gostaria de agendar com algum profissional específico ou prefere ser atendido por quem estiver disponível?
                    </p>
                    <span className="text-[10px] text-gray-400 block text-right mt-1">14:30</span>
                  </div>
                </div>

                {/* Client Message */}
                <div className="flex justify-end">
                  <div className="bg-[#DCF8C6] p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[85%] relative">
                    <p className="text-sm text-gray-800">
                      Quero ser atendido pela Maria Clara
                    </p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-[10px] text-gray-400">14:31</span>
                      <CheckCheck className="w-3 h-3 text-blue-500" />
                    </div>
                  </div>
                </div>

                {/* System Message */}
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] relative">
                    <p className="text-sm text-gray-800">
                      Perfeito! Qual horário você prefere?
                    </p>
                    <span className="text-[10px] text-gray-400 block text-right mt-1">14:31</span>
                  </div>
                </div>

                {/* Client Message */}
                <div className="flex justify-end">
                  <div className="bg-[#DCF8C6] p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[85%] relative">
                    <p className="text-sm text-gray-800">
                      Pode ser amanhã às 13h
                    </p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-[10px] text-gray-400">14:32</span>
                      <CheckCheck className="w-3 h-3 text-blue-500" />
                    </div>
                  </div>
                </div>

                {/* System Message */}
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] relative">
                    <p className="text-sm text-gray-800 font-medium text-primary">
                      Agendamento confirmado com sucesso! ✅
                    </p>
                    <p className="text-[11px] text-gray-500 mt-2 border-t pt-2">
                      📅 24 Dez, 13:00<br/>
                      💇‍♀️ Maria Clara<br/>
                      📍 AgendaPro Salão
                    </p>
                    <span className="text-[10px] text-gray-400 block text-right mt-1">14:32</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Input */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-[#F0F0F0] flex items-center gap-2">
                <div className="flex-grow bg-white rounded-full px-4 py-2 flex items-center gap-3 shadow-sm">
                  <Smile className="w-6 h-6 text-gray-400" />
                  <span className="text-gray-400 text-sm flex-grow">Mensagem</span>
                  <Paperclip className="w-6 h-6 text-gray-400 -rotate-45" />
                  <Camera className="w-6 h-6 text-gray-400" />
                </div>
                <div className="w-12 h-12 bg-[#075E54] rounded-full flex items-center justify-center text-white shadow-md">
                  <Mic className="w-6 h-6" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Salon Schedule */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 aspect-[9/16] max-w-[380px] mx-auto flex flex-col">
              {/* Calendar Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CalendarIcon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-bold text-gray-800">Agenda</span>
                  </div>
                  <MoreVertical className="w-5 h-5 text-gray-400" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Terça, 23 Dez</h3>
                    <p className="text-sm text-gray-400">5 compromissos hoje</p>
                  </div>
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Avatar" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline Area */}
              <div className="flex-grow overflow-y-auto p-6 space-y-6">
                {[
                  { time: '09:00', title: 'Preparação de materiais', type: 'internal', duration: '30 min' },
                  { time: '09:30', title: 'Ana Silva (Corte)', type: 'client', duration: '45 min', active: true },
                  { time: '10:00', title: 'Reservado', type: 'blocked', duration: '30 min' },
                  { time: '10:30', title: 'Pedro Santos (Barba)', type: 'client', duration: '60 min' },
                  { time: '12:00', title: 'Almoço', type: 'internal', duration: '60 min' },
                  { time: '13:30', title: 'Lúcia Ferreira (Coloração)', type: 'client', duration: '120 min' },
                ].map((slot, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    <div className="w-12 text-right">
                      <p className={cn(
                        "text-xs font-bold transition-colors",
                        slot.active ? "text-primary" : "text-gray-400"
                      )}>{slot.time}</p>
                    </div>
                    <div className="relative flex-grow">
                      {/* Timeline Line */}
                      <div className="absolute -left-[1.35rem] top-2 bottom-0 w-px bg-gray-100 group-last:hidden" />
                      <div className={cn(
                        "absolute -left-[1.6rem] top-1.5 w-2 h-2 rounded-full border-2 border-white transition-colors",
                        slot.active ? "bg-primary" : "bg-gray-200"
                      )} />
                      
                      <div className={cn(
                        "p-4 rounded-2xl border transition-all duration-300",
                        slot.active 
                          ? "bg-primary/5 border-primary/20 shadow-lg shadow-primary/5 scale-[1.02]" 
                          : "bg-gray-50 border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-md",
                        slot.type === 'blocked' && "bg-red-50/50 border-red-100/50 opacity-60"
                      )}>
                        <div className="flex items-center justify-between mb-1">
                          <h4 className={cn(
                            "text-sm font-bold",
                            slot.active ? "text-primary" : "text-gray-800",
                            slot.type === 'blocked' && "text-red-400"
                          )}>{slot.title}</h4>
                          <Clock className="w-3 h-3 text-gray-300" />
                        </div>
                        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{slot.duration}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating Action Button */}
              <div className="p-6 bg-gradient-to-t from-white via-white to-transparent">
                <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  <Plus className="w-5 h-5" /> Novo Agendamento
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
