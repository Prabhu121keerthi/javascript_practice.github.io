function firstTask(callback) {
  setTimeout(() => {
    console.log("first task completed");
    callback();
  }, 1000);
}

function secondTask(callback) {
  setTimeout(() => {
    console.log("Second task completed");
    callback();
  }, 500)
}

function thirdTask() {
  setTimeout(() => {
    console.log("third task completed");
  }, 2000)
}

firstTask(() => {
  secondTask(() => {
    thirdTask();
  })
});

