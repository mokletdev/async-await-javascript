// Async/Await or Asynchronous Await function

const countNum = async () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("This is the promise output"), 1000);
  });

  let result = await promise; // @wait promise

  alert(result);
};

countNum();
