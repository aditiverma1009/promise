const promise = require('./ex3');

describe('Validate the simulation of the promise state:', () => {
  it('Validation for fulfill:', () => {
    expect(promise).resolves.toBe('completed');
  });
  it('Validation for reject:', () => {
    expect(promise).rejects.toBe('error');
  });
});
