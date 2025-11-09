// Esse script lê as pastas materials/pdfs, materials/slides e materials/docs, listando todos os arquivos. 
// Retorna um array de objetos com nome, tipo (palestras, workshops) e url.
const fs = require("fs");
const path = require("path");

module.exports = () => {
  const baseDir = "materials";
  const subfolders = ["talks", "workshops"];
  let files = [];

  subfolders.forEach(folder => {
    const dirPath = path.join(baseDir, folder);
    if (fs.existsSync(dirPath)) {
      const list = fs.readdirSync(dirPath).map(file => ({
        name: file,
        type: folder,
        url: `/${baseDir}/${folder}/${file}`
      }));
      files = files.concat(list);
    }
  });

  return files;
};
