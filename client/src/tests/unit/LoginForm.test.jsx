import { render, screen, fireEvent } from '@testing-library/react';
import { LoginForm } from './LoginForm';

describe('LoginForm integration', () => {
  it('envia o formulário e mostra erro na autenticação', async () => {
    const api = {
      login: jest.fn().mockRejectedValue(new Error('Invalid')),
    };

    render(<LoginForm api={api} />);

    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Senha'), {
      target: { value: '123456' },
    });

    fireEvent.click(screen.getByText('Entrar'));

    const alert = await screen.findByRole('alert');
    expect(alert).toHaveTextContent('Falha na autenticação');
    expect(api.login).toHaveBeenCalledWith('test@example.com', '123456');
  });

  it('mostra sucesso quando login funciona', async () => {
    const api = {
      login: jest.fn().mockResolvedValue({ token: 'ok' }),
    };

    render(<LoginForm api={api} />);

    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Senha'), {
      target: { value: '123456' },
    });

    fireEvent.click(screen.getByText('Entrar'));

    const status = await screen.findByRole('status');
    expect(status).toHaveTextContent('Login efectuado com sucesso');
  });
});
