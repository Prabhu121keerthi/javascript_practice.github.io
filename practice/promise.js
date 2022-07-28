var assert = require('assert');
const { resolve } = require('path');

/*
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

*/
/*
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
*/

/*
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

*/

// then() returns 1.another promise   2.synchronous value  3.return/throw an error


let getUser = new Promise((resolve, reject) =>{
  const user = {
    name : 'Sachin',
    email: 'sachin@gmail.com',
    password: 'password',
    permission: ['hr', 'devloper', 'tester']
  }
  resolve(user);
})
  
getUser.then(user => {

console.log(`Got user ${user.name}`);

/*
//return another promise with user address

return new Promise((resolve, reject) =>{

  setTimeout(() =>{
    resolve('Banglore');
  }, 1000)


})
*/

/*
//return value
return user.email;
*/

//throw error

if(user.permission.includes('hr')) {
  throw new Error('You are not allowed');
}

})
.then(email =>{
  console.log(`User email is ${email}`);
})
.catch(error =>{
  console.log(error);
})