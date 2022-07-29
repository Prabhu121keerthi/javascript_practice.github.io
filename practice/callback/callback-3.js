// Error handling

function calculateSquare(number, callback) {

  setTimeout(() => {
    if ( typeof number !== "number") {
      callback (new Error("Argument of type number expected"));
      return;
    }

    const result = number * number;
    callback(null, result);

  }, 1000);
}

let callback = (error, res) => {
  if(error !== null) {
    console.log('caught error' + String(error));
    return;
  }
  
    console.log(res);
  
}

calculateSquare('ab', callback);


