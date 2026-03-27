const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '../src/lib/blog-posts.ts');
let content = fs.readFileSync(file, 'utf8');

const mapping = {
  'como-comecar-jornada-fitness': '/images/blog/comecar fitness.jpg',
  '10-alimentos-recuperacao-pos-treino': '/images/blog/alimentos.jpg',
  'yoga-iniciantes-guia-completo': '/images/blog/post2.jpg',
  'hiit-treino-transforma-menos-tempo': '/images/blog/hiit.jpg',
  'suplementacao-ganho-massa-muscular': '/images/blog/suplementacao.jpg',
  'importancia-sono-recuperacao-muscular': '/images/blog/sono.jpg',
  'musculacao-feminina-mitos-e-verdades': '/images/blog/musculacao feminina.jpg',
  'mobilidade-treino-que-voce-ignora': '/images/blog/mobilidade.jpg',
  'treino-em-casa-como-manter-consistencia': '/images/blog/post2.jpg'
};

let currentSlug = '';
let newLines = [];
let lines = content.split('\n');

for (let line of lines) {
  let slugMatch = line.match(/^(\s*)slug: "([^"]+)",/);
  if (slugMatch) {
    currentSlug = slugMatch[2];
  }
  
  if (line.includes('url: "') && currentSlug && mapping[currentSlug]) {
    // replace url with mapping
    line = line.replace(/url:\s*"[^"]+"/, `url: "${mapping[currentSlug]}"`);
  }
  newLines.push(line);
}

fs.writeFileSync(file, newLines.join('\n'));
console.log('URLs de imagens atualizadas para /images/blog/!');
