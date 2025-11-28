import React, { useState } from 'react';

export function LoginForm({ api }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await api.login(email, password);
      setSuccess('Login efectuado com sucesso');
    } catch (err) {
      setError('Falha na autenticação');
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="login-form">
      <input
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        name="password"
        placeholder="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Entrar</button>
      {error && <div role="alert">{error}</div>}
      {success && <div role="status">{success}</div>}
    </form>
  );
}
