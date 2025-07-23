import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-dark-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-black text-white"
        >
          Pronto para focar no que realmente importa?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Deixe a GamingAI cuidar da sua comunidade enquanto você cria o conteúdo incrível que seus fãs amam.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5, type: "spring", stiffness: 120 }}
        >
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Tenho%20interesse%20na%20oferta%20de%20lan%C3%A7amento%20do%20GamingAI."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-4 px-12 py-5 bg-neon-blue text-white font-bold text-xl rounded-lg shadow-neon-blue hover:scale-105 transition-transform duration-300"
          >
            <MessageSquare size={28} />
            FALAR COM UM ESPECIALISTA AGORA
          </a>
          <p className="mt-4 text-sm text-gray-500">Clique no botão para garantir sua vaga com desconto!</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
