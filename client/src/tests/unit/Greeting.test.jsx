import { render, screen } from '@testing-library/react';
import { Greeting } from './Greeting';

describe('Greeting component', () => {
  it('renderiza mensagem padrão se API não for passada', () => {
    render(<Greeting name="Ilídio" />);
    expect(screen.getByTestId('greeting')).toHaveTextContent('Olá, Ilídio');
  });

  it('usa API se fornecida (mock)', async () => {
    const mockApi = {
      fetchGreeting: jest.fn().mockResolvedValue('Bem-vindo, Ilídio!'),
    };

    render(<Greeting name="Ilídio" api={mockApi} />);
    const el = await screen.findByText('Bem-vindo, Ilídio!');
    expect(el).toBeInTheDocument();
    expect(mockApi.fetchGreeting).toHaveBeenCalledWith('Ilídio');
  });
});
