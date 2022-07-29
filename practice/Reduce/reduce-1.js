const arr = [1, 2, 3, 4];

const sum = arr.reduce((acc, cur) => {
 return acc = acc + cur;
}, 0);

console.log(sum);


var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

const petCounts = pets.reduce((acc, cur) => {
  if(!acc[cur]) {

    acc[cur] = 1;
  }
  else {
    acc[cur] = ++acc[cur];
  }
  return acc;
}, {});

console.log(petCounts);