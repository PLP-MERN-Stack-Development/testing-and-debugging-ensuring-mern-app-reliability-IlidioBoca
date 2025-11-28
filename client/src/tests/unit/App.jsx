import React from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Greeting } from './components/Greeting';
import { LoginForm } from './components/LoginForm';

const fakeApi = {
  fetchGreeting: async (name) => `Bem-vindo, ${name}!`,
  login: async (email, password) => {
    if (email === 'test@example.com' && password === '123456') {
      return { token: 'fake-jwt-token' };
    }
    throw new Error('Credenciais inválidas');
  },
};

function App() {
  return (
    <ErrorBoundary>
      <main>
        <h1>Aplicação de Testes MERN</h1>
        <Greeting name="Ilídio" api={fakeApi} />
        <LoginForm api={fakeApi} />
      </main>
    </ErrorBoundary>
  );
}

export default App;
