const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '../src/lib/blog-posts.ts');
let text = fs.readFileSync(file, 'utf8');
text = text.replace(/email:\s*"contato@fitnessexclusive\.com\.br"/g, 'email: "@academiafitnessexclusive"');
fs.writeFileSync(file, text);
console.log('Done!');
