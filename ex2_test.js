const promise = require('./ex2');

describe('Validate the simulation of the promise state:', () => {
  it('Validation for fulfill:', () => {
    expect(promise).resolves.toBe('complete');
  });
  it('Validation for reject:', () => {
    expect(promise).rejects.toBe('error');
  });
});
