import React from 'react';
import { motion } from 'framer-motion';
import { Clock, UserMinus, ShieldOff, BarChartHorizontalBig } from 'lucide-react';

const problems = [
  { icon: Clock, title: "Tempo Desperdiçado", description: "Horas respondendo comentários que poderiam ser usadas para criar conteúdo." },
  { icon: UserMinus, title: "Perda de Seguidores", description: "Fãs se sentem ignorados e deixam de seguir por falta de interação." },
  { icon: ShieldOff, title: "Comentários de Ódio", description: "Haters e spam poluem sua comunidade e afetam sua imagem." },
  { icon: BarChartHorizontalBig, title: "Oportunidades Perdidas", description: "Perguntas sobre parcerias e vendas se perdem no meio de milhares de comentários." },
];

const ProblemSection: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

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
          <h2 className="text-3xl md:text-5xl font-black text-white">Sua Realidade como Influencer</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">Se você se identifica com algum desses pontos, você está deixando dinheiro na mesa.</p>
        </motion.div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="bg-gray-900/50 border border-neon-blue/20 p-8 rounded-xl text-center flex flex-col items-center"
            >
              <div className="bg-neon-blue/10 p-4 rounded-full">
                <problem.icon className="w-10 h-10 text-neon-blue" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">{problem.title}</h3>
              <p className="mt-2 text-gray-400">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
