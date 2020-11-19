onmessage = function(e) {
  const fibonnacciArray = getFibNums(e);
  postMessage(fibonnacciArray)
}

const getFibNums = (e) => {
  if(e.data < 0 || typeof e.data !==  'number') {
    throw new Error('Number must be number greater than 0')
  }

  let result = {
    fib: [],
    evenSum: 0,
  };

  let previous = 0;
  let current = 1;

  for(let i = 0; i < e.data; i++) {
    const total = previous + current;

    if(total % 2 === 0) {
      result.evenSum += total
    }

    result.fib.push(total)
    previous = current;
    current = total;
  }

  return result;
}
