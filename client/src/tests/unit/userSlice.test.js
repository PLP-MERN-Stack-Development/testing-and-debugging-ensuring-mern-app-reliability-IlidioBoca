import { userReducer } from './userSlice';

describe('userReducer', () => {
  it('salva o utilizador no login', () => {
    const state = userReducer(undefined, {
      type: 'user/login',
      payload: { name: 'Ilídio' },
    });
    expect(state.user).toEqual({ name: 'Ilídio' });
  });

  it('limpa o utilizador no logout', () => {
    const initial = { user: { name: 'Ilídio' } };
    const state = userReducer(initial, { type: 'user/logout' });
    expect(state.user).toBeNull();
  });
});
