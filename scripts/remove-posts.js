const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/lib/blog-posts.ts');
let content = fs.readFileSync(filePath, 'utf8');

// The file exports blogPosts array. We can just use string manipulation or a regex to remove specific posts.
// Removing post 2 (CrossFit)
content = content.replace(/\/\/ ----------------------------------------------------------\n\s*\/\/ POST 2\n\s*\/\/ ----------------------------------------------------------\n\s*{\n[\s\S]*?},\n\s*/, '');

// Removing post 3 (Social)
content = content.replace(/\/\/ ----------------------------------------------------------\n\s*\/\/ POST 3\n\s*\/\/ ----------------------------------------------------------\n\s*{\n[\s\S]*?},\n\s*/, '');

// Removing post 4 (Video)
content = content.replace(/\/\/ ----------------------------------------------------------\n\s*\/\/ POST 4\n\s*\/\/ ----------------------------------------------------------\n\s*{\n[\s\S]*?},\n\s*/, '');

// Now updating author object everywhere
//     author: {
//       id: X,
//       documentId: "author-X",
//       username: "...",
//       email: "...",
//     },
content = content.replace(/author:\s*{[\s\S]*?},/g, `author: {
      id: 1,
      documentId: "author-1",
      username: "Fitness Exclusive",
      email: "contato@fitnessexclusive.com.br",
    },`);

fs.writeFileSync(filePath, content);
console.log('Posts removidos e autores atualizados com sucesso.');
