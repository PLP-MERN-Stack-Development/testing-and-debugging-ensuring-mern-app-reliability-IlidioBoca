# 🧪 MERN Testing Project

Projeto MERN configurado com:

- Jest (cliente + servidor)
- React Testing Library
- Supertest
- MongoDB Memory Server
- Cypress para testes de ponta a ponta
- Cobertura mínima global de 70%

## Scripts principais

```bash
npm test                # todos os testes Jest
npm run test:server     # apenas servidor
npm run test:client     # apenas cliente
npm run test:coverage   # relatório de cobertura
npm run test:unit       # testes unitários (pattern "unit")
npm run test:integration# testes de integração (pattern "integration")
npm run cypress:open    # abrir Cypress
npm run cypress:run     # rodar Cypress em modo headless
```

## Estrutura

- **server/** – API Express + MongoDB (com testes unit/integration)
- **client/** – React (componentes, hooks, Redux-like store, testes)
- **cypress/** – testes E2E (fluxos de autenticação, navegação)

Consulte o código para exemplos práticos de:

- Middlewares com testes
- Hooks React com testes
- Componentes com mocks de API
- Testes de API com Supertest
- Banco de dados de teste isolado com MongoDB em memória
