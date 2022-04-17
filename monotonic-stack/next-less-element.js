function NLE(A) {
  let stack = [];
  let nextLess = Array(A.length).fill(-1);
  for (let i = 0; i < A.length; i++) {
    while (stack.length > 0 && A[stack[stack.length - 1]] > A[i]) {
      // A[i] return value
      nextLess[stack[stack.length - 1]] = i - stack[stack.length - 1];
      stack.pop();
    }
    stack.push(i);
  }
  return nextLess;
}

// return next less by a distance from its index
console.log(NLE([3, 7, 8, 4])); // [-1, 2, 1, -1]