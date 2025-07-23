import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} GamingAI. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Uma solução inovadora para criadores de conteúdo.</p>
      </div>
    </footer>
  );
};

export default Footer;
