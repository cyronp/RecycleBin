# RecycleBin

Sistema de gerenciamento de coleta de resíduos e pontos de reciclagem.

## Pré-requisitos

- Node.js 18+
- npm, yarn, pnpm ou bun

## Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd RecycleBin
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o banco de dados:

```bash
npx prisma generate
npx prisma db push
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Tecnologias

- Next.js 16
- React 19
- Prisma + SQLite
- TypeScript
- Tailwind CSS
- Shadcn/ui
