const promise = new Promise((fulfill) => {
  setTimeout(() => {
    fulfill('FULFILLED!');
  }, 300);
});

promise.then(msg => console.log(msg));

module.exports = promise;
