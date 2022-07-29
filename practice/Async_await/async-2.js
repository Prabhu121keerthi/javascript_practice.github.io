//  async/await

async function asyncFunc() {

  let result = await new Promise((resolve, reject) =>{

    setTimeout(() => {
      resolve("Promise resolved");
    }, 1000);

  });

  console.log(result);
  console.log("hello");
}

asyncFunc();