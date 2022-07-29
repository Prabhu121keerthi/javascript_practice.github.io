// Promise fulfilled

Promise.resolve("Promise resolved")
.finally(() => {
  console.log("finally");
})
.then(result => {
  console.log('then ' + result);
})
.catch(err => {
  console.log('catch' + err);
})

