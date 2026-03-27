const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '../src/lib/blog-posts.ts');
let text = fs.readFileSync(file, 'utf8');

text = text.replace(/\s*\/\/\s*-+\n\s*\/\/\s*POST 6\n\s*\/\/\s*-+\n\s*{[\s\S]*?slug:\s*"yoga-iniciantes-guia-completo"[\s\S]*?},/, '');
text = text.replace(/\s*\/\/\s*-+\n\s*\/\/\s*POST 12\n\s*\/\/\s*-+\n\s*{[\s\S]*?slug:\s*"treino-em-casa-como-manter-consistencia"[\s\S]*?},/, '');

fs.writeFileSync(file, text);
console.log('Posts de yoga e treino em casa removidos com sucesso.');
