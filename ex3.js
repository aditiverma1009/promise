const onReject = (error) => { console.log(error.message); };

const promise = new Promise((fulfill, reject) => {
  const err = new Error('REJECTED!');
  setTimeout(() =>
    reject(err), 300);
});
promise.then(null, onReject);
module.exports = promise;
