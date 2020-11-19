const getEvenValueOfFibonnacci = (num) => {
  let value;
  const worker = new window.Worker('fibonacci-worker.js');

  worker.postMessage(num);
  worker.onerror = err => err;
  worker.onmessage = e => {
    value = e.data.evenSum
    console.log(value);
  }
}

getEvenValueOfFibonnacci(12);
