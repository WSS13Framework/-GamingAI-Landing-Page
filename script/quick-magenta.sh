#!/bin/bash
# quick-magenta-update.sh

echo "🎨 Aplicando tema magenta na landing page..."

# Cores
MAGENTA="#FF00E0"
MAGENTA_LIGHT="#FF33E6"
MAGENTA_DARK="#CC00B3"
MAGENTA_GLOW="rgba(255, 0, 224, 0.3)"

# Criar arquivo de variáveis CSS
cat > src/styles/magenta-theme.css << EOF
:root {
  --magenta-primary: ${MAGENTA};
  --magenta-light: ${MAGENTA_LIGHT};
  --magenta-dark: ${MAGENTA_DARK};
  --magenta-glow: ${MAGENTA_GLOW};
}

/* Botões principais */
.btn-magenta {
  background: linear-gradient(135deg, var(--magenta-primary), var(--magenta-dark));
  border: none;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  box-shadow: 0 4px 15px var(--magenta-glow);
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-magenta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px var(--magenta-glow);
}

/* Texto destaque */
.text-magenta {
  color: var(--magenta-primary);
  font-weight: bold;
}

/* Efeito neon */
.neon-magenta {
  color: var(--magenta-primary);
  text-shadow: 0 0 10px var(--magenta-primary);
}

/* Bordas accent */
.border-magenta {
  border: 2px solid var(--magenta-primary);
}

.border-left-magenta {
  border-left: 4px solid var(--magenta-primary);
}

/* Animação pulso */
@keyframes magenta-pulse {
  0%, 100% { box-shadow: 0 0 5px var(--magenta-glow); }
  50% { box-shadow: 0 0 20px var(--magenta-primary), 0 0 30px var(--magenta-glow); }
}

.pulse-magenta {
  animation: magenta-pulse 2s infinite;
}
EOF

echo "✅ Arquivo magenta-theme.css criado!"

# Atualizar componente Header
cat > temp-header-update.tsx << 'EOF'
// Adicione estas classes no seu Header.tsx:

// Botão principal
<button className="btn-magenta pulse-magenta">
  Começar Agora
</button>

// Título com destaque
<h1 className="text-4xl font-bold">
  Gaming AI <span className="text-magenta neon-magenta">Revolution</span>
</h1>

// Link de navegação ativo
<a href="#" className="text-magenta hover:neon-magenta">
  Home
</a>
EOF

echo "✅ Exemplo de componente criado!"

# Comandos Git para aplicar
echo "🔄 Aplicando mudanças..."
git add .
git commit -m "feat: adiciona tema magenta vibrante inspirado no setup gamer"
git push

echo "🚀 Deploy automático iniciado no Netlify!"
echo "🎯 Acesse: https://anding-page-uxma-alphaproject.netlify.app"