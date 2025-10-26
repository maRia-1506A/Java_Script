function fibonacciGenerator(n) {
  const arr = [];
  if (n === 1) {
    arr.push(0);
  } else if (n === 2) {
    arr.push(0, 1);
  } else {
    arr.push(0, 1);
    for (let i = 2; i < n; i++) {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
  }
  return arr;
}

let result = fibonacciGenerator(3);
console.log(result);
