import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-4">
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.ibb.co/L8pC8Xy/gamer.jpg')" }}
      ></div>
      <div className="relative z-20 flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider text-white"
        >
          Pare de perder <span className="text-glow-blue text-neon-blue">8 horas</span> por semana
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider text-white mt-2"
        >
          Gerenciando Comentários
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl max-w-3xl text-gray-300"
        >
          Conheça a primeira Inteligência Artificial do Brasil que responde seus fãs, filtra hate e aumenta seu engajamento, <span className="font-bold text-neon-green">automaticamente</span>.
        </motion.p>
        <motion.a
          href="#oferta"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 120 }}
          className="mt-10 inline-flex items-center gap-3 px-10 py-4 bg-neon-green text-black font-bold text-lg rounded-lg shadow-neon-green hover:scale-105 transition-transform duration-300"
        >
          <MessageSquare size={24} />
          QUERO AUTOMATIZAR MEUS COMENTÁRIOS
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
