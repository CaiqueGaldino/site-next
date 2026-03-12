#!/usr/bin/env node

/**
 * Quick Start Script - Offline Testing
 * Este script inicia o servidor de desenvolvimento em modo mock
 * 
 * Uso: npm run start:dev-mock
 */

const { spawn } = require('child_process');
const path = require('path');

console.log('\n');
console.log('█████████████████████████████████████████████████████████');
console.log('█                                                       █');
console.log('█   🧪 OFFLINE TESTING MODE - Mock Data Enabled        █');
console.log('█                                                       █');
console.log('█████████████████████████████████████████████████████████');
console.log('\n');
console.log('📊 Using mock data from: src/lib/mock-data.ts');
console.log('📍 Strapi URL: (disabled in mock mode)');
console.log('🔓 API Token: (not required)');
console.log('\n');
console.log('📖 Available Routes:');
console.log('   • http://localhost:3000          - Home page');
console.log('   • http://localhost:3000/blog     - Blog listing');
console.log('   • http://localhost:3000/blog/[slug]  - Individual post');
console.log('\n');
console.log('📖 Available Mock Posts:');
console.log('   • como-comecar-jornada-fitness     (Featured - Top Banner)');
console.log('   • 5-exercicios-crossfit-queimar-calorias (Featured - Banner)');
console.log('   • novo-espaco-cardio-fitness-exclusive (Social)');
console.log('   • dicas-treino-pesos-video        (Video)');
console.log('   • 10-alimentos-recuperacao-pos-treino (Blog)');
console.log('   • yoga-iniciantes-guia-completo   (Blog)');
console.log('\n');
console.log('⚡ Starting development server...');
console.log('═══════════════════════════════════════════════════════════\n');

// Start the dev server
const dev = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  cwd: path.dirname(__filename)
});

dev.on('error', (error) => {
  console.error('Failed to start dev server:', error);
  process.exit(1);
});

dev.on('exit', (code) => {
  process.exit(code);
});
