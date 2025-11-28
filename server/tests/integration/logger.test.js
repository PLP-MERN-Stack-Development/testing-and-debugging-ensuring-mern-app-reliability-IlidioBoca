const logger = require('../../src/middleware/logger');

describe('logger middleware', () => {
  it('chama next()', () => {
    const req = { method: 'GET', url: '/test' };
    const res = {};
    const next = jest.fn();

    logger(req, res, next);

    expect(next).toHaveBeenCalled();
  });
});
