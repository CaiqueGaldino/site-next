const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '../src/lib/blog-posts.ts');
let content = fs.readFileSync(file, 'utf8');

const realUnits = [
  { nome: "Fitness Exclusive - Crato", loc: "São Miguel, Crato - CE" },
  { nome: "Fitness Exclusive - Premium", loc: "Lagoa Seca, Juazeiro do Norte - CE" },
  { nome: "Fitness Exclusive - Tiradentes", loc: "Tiradentes, Juazeiro do Norte - CE" },
  { nome: "Fitness Exclusive - São José", loc: "São José, Juazeiro do Norte - CE" },
  { nome: "Fitness Exclusive - Parque Ecológico", loc: "Lagoa Seca, Juazeiro do Norte - CE" },
  { nome: "Fitness Exclusive - Matriz Araripina", loc: "Centro, Araripina - PE" },
  { nome: "Fitness Exclusive - Tianguá", loc: "Rodoviaria, Tianguá - CE" }
];

let unitIndex = 0;

content = content.replace(/unidade:\s*\{\s*id:\s*\d+,\s*documentId:\s*"[^"]+",\s*nome:\s*"[^"]+",\s*localizacao:\s*"[^"]+",\s*\},/g, (match) => {
  const unit = realUnits[unitIndex % realUnits.length];
  unitIndex++;
  return `unidade: {\n      id: ${unitIndex},\n      documentId: "unidade-${unitIndex}",\n      nome: "${unit.nome}",\n      localizacao: "${unit.loc}",\n    },`;
});

fs.writeFileSync(file, content);
console.log('Unidades atualizadas com sucesso!');
