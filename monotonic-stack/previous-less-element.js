function PLE(A) {
  let stack = [];
  let previousLess = [];
  for (let i = 0; i < A.length; i++) {
    while (stack.length > 0 && A[stack[stack.length - 1]] > A[i]) {
      stack.pop();
    }
    // A[stack[stack.length - 1]] return value
    previousLess[i] = stack.length == 0 ? -1 : stack[stack.length - 1];
    stack.push(i);
  }
  return previousLess;
}

// return previous less index
console.log(PLE([3, 7, 8, 4])); // [ -1, 0, 1, 0 ]