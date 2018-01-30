const onReject = (error) => { console.log(error.message); };
const onFulfill = (str) => { console.log(str); };
const promise = new Promise((fulfill, reject) => {
  const err = new Error('I DID NOT FIRE');
  setTimeout(() => {
    fulfill('I FIRED');
  }, 300);
  setTimeout(() =>
    reject(err), 600);
});
promise.then(onFulfill, onReject);
module.exports = promise;
