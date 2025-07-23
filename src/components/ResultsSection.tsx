import React from 'react';
import { motion } from 'framer-motion';

const results = [
  { value: "+300%", label: "Aumento no Engajamento", color: "text-neon-green" },
  { value: "90%", label: "Menos Tempo Gerenciando", color: "text-neon-blue" },
  { value: "+150%", label: "Aumento na Receita", color: "text-neon-green" },
];

const ResultsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white">Resultados Comprovados</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">Nossos clientes beta viram resultados expressivos já no primeiro mês.</p>
        </motion.div>
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {results.map((result, i) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-gray-900/50 border border-gray-700 p-8 rounded-xl text-center"
            >
              <p className={`text-6xl md:text-7xl font-black ${result.color} ${result.color.includes('green') ? 'text-glow-green' : 'text-glow-blue'}`}>{result.value}</p>
              <p className="mt-4 text-xl font-semibold text-white">{result.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
