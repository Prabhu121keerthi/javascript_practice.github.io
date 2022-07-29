// Promise.all()
// promise fulfilled/rejected

const promises  =  [

  Promise.resolve('result a'),
  Promise.resolve('result b'),
  //Promise.resolve('result c'),
  Promise.reject("Error")
];

Promise.all(promises)
.then(res => {
  console.log(res);
})
.catch(err => {
  console.log(err);
})

