// Error handling using try catch


const validateUser = ({userName, password})  => {

  return new Promise((resolve, reject) => {

    if(userName && password) {

      resolve("Authenticated");
    }
    else {
      reject("Invalid user");
    }

  })

}

const app = async () => {

  const user = {
    userName: '',
    password: ''
  };

  try {
  const result = await validateUser(user);
  console.log(result);
  }

  catch(e) {
    console.log(e);
  }

}

app();