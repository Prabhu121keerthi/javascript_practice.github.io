
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