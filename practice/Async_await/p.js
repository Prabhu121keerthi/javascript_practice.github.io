async function asyncFunc() {
  //return 123; 
  throw new Error("Problem!");
}

asyncFunc()
.then(result => {
  console.log(result);
})
.catch(err => {
  console.log(err);
})

