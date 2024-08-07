// Promises
// new Promise (function (resolve, reject) {...}), .then, .catch, .finally

const myPromise = new Promise(function (resolve, reject) {
    let sampleData = [2, 4, 6, 8];
    let randomNumber = Math.floor(Math.random() * (sampleData.length + 1));
    if (sampleData[randomNumber]) {
      resolve(sampleData[randomNumber]);
    } else {
      reject('An error occured!');
    }
  });
  
  myPromise
    .then(function (e) {
      console.log(e);
    })
    .catch(function (error) {
      throw new Error(error);
    })
    .finally(function () {
      console.log('Promise completed');
    });