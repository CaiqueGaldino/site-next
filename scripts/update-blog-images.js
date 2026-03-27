const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/lib/blog-posts.ts');
const content = fs.readFileSync(filePath, 'utf8');

let currentSlug = '';
const newContent = content.split('\n').map(line => {
  const slugMatch = line.match(/^\s*slug:\s*"([^"]+)"/);
  if (slugMatch) {
    currentSlug = slugMatch[1];
  }
  
  if (line.includes('https://images.unsplash.com') && line.includes('url: "')) {
    return line.replace(/url:\s*"[^"]+"/, `url: "/blog/${currentSlug}.jpg"`);
  }
  return line;
}).join('\n');

fs.writeFileSync(filePath, newContent);
console.log('URLs atualizadas com sucesso para caminhos locais /blog/...');
