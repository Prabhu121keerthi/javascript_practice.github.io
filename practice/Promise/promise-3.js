
//Promise rejected

Promise.reject("Promise rejected")
.finally(() => {
  console.log("finally");
})
.then(result => {
  console.log('then ' + result);
})
.catch(err => {
  console.log('catch ' + err);
})
