
function add(x, y) {
  return new Promise((resolve, reject) => {

    if(x === undefined || y === undefined) {
      reject(new Error("Must provide 2 parameters"));
    }
    else {
      resolve( x + y);
    }

  });

}

add(3, 4)
.then(result => {
console.log(result);
})
.catch(error => {
  console.log(error);
});

