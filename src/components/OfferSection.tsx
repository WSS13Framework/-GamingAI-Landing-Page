import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap } from 'lucide-react';

const benefits = [
  "IA com seu tom de voz",
  "Dashboard de performance",
  "Filtro de hate e spam",
  "Suporte prioritário via WhatsApp",
  "Relatórios semanais de crescimento",
  "Acesso a novas features"
];

const OfferSection: React.FC = () => {
  return (
    <section id="oferta" className="py-20 sm:py-28 bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-dark-bg border-2 border-neon-blue rounded-2xl p-8 md:p-12 shadow-neon-blue text-center"
        >
          <h2 className="text-2xl font-bold text-white uppercase">Oferta Especial de Lançamento</h2>
          <p className="text-neon-blue text-glow-blue font-bold text-lg mt-1">Para os 50 primeiros influencers</p>
          
          <div className="my-8">
            <p className="text-gray-400 text-2xl line-through">De R$ 997/mês</p>
            <p className="text-6xl md:text-7xl font-black text-white my-2">R$ 497<span className="text-3xl text-gray-300">/mês</span></p>
            <p className="text-neon-green font-semibold">Plano completo com tudo incluso.</p>
          </div>

          <ul className="text-left space-y-3 max-w-md mx-auto my-10">
            {benefits.map(benefit => (
              <li key={benefit} className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-neon-green flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Tenho%20interesse%20na%20oferta%20de%20lan%C3%A7amento%20do%20GamingAI."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 bg-neon-green text-black font-bold text-xl rounded-lg shadow-neon-green hover:scale-105 transition-transform duration-300 transform"
          >
            <Zap size={24} />
            GARANTIR MINHA VAGA
          </a>
          <p className="mt-4 text-sm text-gray-400">Vagas limitadas! O valor voltará ao normal em breve.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
