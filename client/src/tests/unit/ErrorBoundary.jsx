import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Aqui poderíamos enviar o erro para um serviço externo de logging
    // eslint-disable-next-line no-console
    console.error('Erro capturado no ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Ocorreu um erro inesperado. Tente novamente.</h2>;
    }
    return this.props.children;
  }
}
