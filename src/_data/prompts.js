//Lê a pasta /prompts e lista todos os arquivos .md. Retorna um array de objetos com nome e url.
const fs = require("fs");
const path = require("path");

module.exports = () => {
  const dir = "prompts";
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith(".md"))
    .map(f => ({
      name: f.replace(".md", ""),
      url: `/${dir}/${f}`
    }));
};
