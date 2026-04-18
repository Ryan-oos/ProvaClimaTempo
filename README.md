# 🌤️ WeatherNow - Consulta Meteorológica

Este projeto é uma aplicação web moderna para consulta de dados climáticos, desenvolvida como parte da avaliação para a disciplina de Desenvolvimento Web.

**Desenvolvido por:** Ryan da Silva Benedito

---

## 📝 Sobre o Projeto

O **WeatherNow** permite que os usuários pesquisem o clima de cidades específicas de forma rápida e intuitiva. A aplicação consome dados de um banco de dados relacional (PostgreSQL via Neon DB) através de uma API interna, garantindo que as informações apresentadas sejam precisas e persistentes.

### Principais Funcionalidades:
- **Busca Dinâmica:** Pesquisa de cidades através de uma barra de busca interativa.
- **Visualização Detalhada:** Exibição de temperatura, umidade, velocidade do vento e descrição do clima.
- **Design Adaptativo (Glassmorphism):** Interface moderna com efeitos de transparência e desfoque, totalmente responsiva.
- **Feedback Visual Dinâmico:** O card de clima muda de cor (Quente, Ameno ou Frio) automaticamente com base na temperatura da cidade.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as ferramentas mais modernas do ecossistema JavaScript:

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** CSS Global e CSS Modules (Design focado em UX/UI)
- **Banco de Dados:** [Neon DB](https://neon.tech/) (PostgreSQL)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🏗️ Arquitetura do Sistema

A estrutura do código foi organizada para seguir as melhores práticas de desenvolvimento:
- `/app`: Contém as rotas e páginas da aplicação (Home, Cidade e Sobre).
- `/components`: Componentes reutilizáveis como a `SearchBar`.
- `/globals.css`: Centralização da identidade visual e estilos do sistema.
- `/api`: Rota de backend para comunicação segura com o banco de dados.

---

## 🚀 Como rodar o projeto localmente

1. Clone o repositório:
   ```bash
   git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)