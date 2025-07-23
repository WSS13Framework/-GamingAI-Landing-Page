import React from 'react';
import { motion } from 'framer-motion';
import { Bot, ShieldCheck, TrendingUp } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white">A Solução Definitiva: <span className="text-neon-green text-glow-green">GamingAI</span></h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">Nossa IA foi treinada para entender a comunidade gamer brasileira e agir como você.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="bg-neon-green/10 p-3 rounded-full"><Bot className="w-8 h-8 text-neon-green" /></div>
              <div>
                <h3 className="text-xl font-bold text-white">Respostas Automáticas e Humanizadas</h3>
                <p className="text-gray-400 mt-1">A IA responde elogios, perguntas frequentes e interage com seus fãs 24/7, mantendo seu tom de voz.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-neon-green/10 p-3 rounded-full"><ShieldCheck className="w-8 h-8 text-neon-green" /></div>
              <div>
                <h3 className="text-xl font-bold text-white">Filtragem de Hate e Spam</h3>
                <p className="text-gray-400 mt-1">Bloqueie e remova comentários de ódio, spam e links maliciosos antes que alguém veja.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-neon-green/10 p-3 rounded-full"><TrendingUp className="w-8 h-8 text-neon-green" /></div>
              <div>
                <h3 className="text-xl font-bold text-white">Aumento de Engajamento</h3>
                <p className="text-gray-400 mt-1">Ao interagir com todos, o algoritmo entende que seu conteúdo é relevante, mostrando para mais pessoas.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-900 border border-neon-green/20 p-4 rounded-xl shadow-neon-green">
              <div className="bg-black p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-lg text-white">Dashboard GamingAI</h4>
                  <div className="flex items-center gap-2 text-sm text-neon-green">
                    <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse"></div>
                    <span>Ativo</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-800 p-3 rounded">
                    <p className="text-sm text-gray-400">"Qual o seu mouse?"</p>
                    <p className="text-sm text-white mt-1"><span className="font-bold text-neon-blue">[AI]:</span> "Opa! Eu uso o Logitech G Pro X, é o melhor pra mim!"</p>
                  </div>
                  <div className="bg-gray-800 p-3 rounded">
                    <p className="text-sm text-gray-400">"Salve! Vídeo incrível!"</p>
                    <p className="text-sm text-white mt-1"><span className="font-bold text-neon-blue">[AI]:</span> "Tmj meu mano! Fico feliz que curtiu!"</p>
                  </div>
                  <div className="bg-gray-800 p-3 rounded opacity-50">
                    <p className="text-sm text-gray-500 line-through">"Seu lixo, para de jogar"</p>
                    <p className="text-sm text-red-500 mt-1">[HATE FILTRADO]</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
