
# ⚖️ IA Jurídica Hub

Portal jurídico minimalista e colaborativo, construído em [Eleventy (11ty)](https://www.11ty.dev/) para centralizar materiais e prompts de IA aplicados ao direito.

## ✨ Principais recursos
- Coleta automática de PDFs, PPTX e DOCX disponíveis em `materials/*`.
- Indexação de prompts em Markdown adicionados ao diretório `prompts/`.
- Página pública para envio de novos prompts (Google Forms).
- Build estática rápida e deploy automatizado no [Netlify](https://netlify.com).

## 📦 Pré-requisitos
- Node.js 18+ (recomendado LTS).
- npm (vem com o Node).

## 🛠️ Ambiente local
```bash
git clone <repo-url>
cd legal
npm install
npm start
```

O servidor de desenvolvimento roda em `http://localhost:8080` com live reload.

### Scripts disponíveis
- `npm start`: inicia o servidor do Eleventy em modo desenvolvimento.
- `npm run build`: gera a versão estática em `_site/`.

## 🛰️ Deploy no Netlify
- **Build command:** `npm run build`
- **Publish directory:** `_site`

Basta conectar o repositório no Netlify e manter a branch principal atualizada; cada push gera um deploy automático.

### Checklist antes do deploy
```bash
npm install        # garante dependências atualizadas
npm run build      # valida o build local
netlify build      # (opcional) replica o build Netlify/CI
```
Se o build local falhar, o CI do Netlify também falhará. Priorize corrigir avisos do Eleventy antes de fazer push; só então execute `netlify deploy --build` para publicar manualmente (se necessário).

## 📂 Estrutura do projeto
```
materials/
  ├─ talks/
  └─ workshops/
prompts/
src/
  ├─ _data/
  ├─ _includes/
  └─ *.njk
```

- Qualquer arquivo novo em `materials/**` aparece automaticamente na página de materiais.
- Cada arquivo `.md` dentro de `prompts/` vira um card na listagem de prompts.
- As páginas estão em `src/*.njk`; dados dinâmicos vivem em `src/_data`.

## 🧠 Estrutura dos prompts
Cada prompt deve seguir um front matter mínimo em YAML para que a listagem consiga exibir cards ricos:

```markdown
---
title: Petição Inicial Trabalhista
area: Direito do Trabalho
description: Prompt base para ações envolvendo vínculo empregatício e verbas rescisórias.
tone: Formal
format: Markdown estruturado
---

> "Você é um advogado trabalhista..."
```

- O campo `title` será usado como título do card. Caso ausente, o nome do arquivo (sem `.md`) é exibido.
- `area`, `tone` e `format` alimentam as tags de contexto.
- `description` aparece como texto do card; mantenha em até 200 caracteres.

## 🗃️ Convenções para materiais
- Coloque cada arquivo na pasta correspondente (`materials/pdfs`, `materials/slides`, `materials/docs`, etc.).
- Para facilitar busca, nomeie os arquivos em `snake-case` com prefixo de data ou evento. Ex.: `2024-02-tribunal-superior-diretrizes.pdf`.
- Versões revisadas devem receber sufixo (`-v2`, `-final`) para evitar sobrescrever arquivos antigos.
- Evite espaços e caracteres especiais; isso simplifica o link gerado automaticamente.

## 💎 Exemplos mínimos para teste
- `materials/pdfs/manual-de-uso.pdf`
- `materials/slides/introducao-ia-no-direito.pptx`
- `materials/docs/guia-boas-praticas.docx`
- `prompts/trabalhista.md`

```markdown
# Petição Inicial Trabalhista
Prompt:
> "Você é um advogado trabalhista. Redija uma petição inicial com base nas informações abaixo..."
```

## 🤝 Contribuição
1. Abra uma issue descrevendo a melhoria/bug.
2. Crie uma branch (`feat/nova-pagina`, `fix/lista-materiais`, etc.).
3. Envie um PR com contexto e passos de teste.

Sugestões de novas categorias, prompts e recursos são sempre bem-vindas!
