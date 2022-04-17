# Monotonic Stack

The typical paradigm for monotonous increase stack

```js
for (let i = 0; i < A.length; i++) {
  while (stack.length > 0 && A[stack[stack.length - 1]] > A[i]) {
    stack.pop();
  }
  stack.push(i)
}
```

## What monotonous increase stack can do

1. Finding the **previous less** element of each element in an array with **O(n) time**:

   - What is the previous less element of an element?

     For example:<br>
     `[3, 7, 8, 4]`<br>
     The previous less element of 7 is 3.<br>
     The previous less element of 8 is 7.<br>
     **The previous less element of 4 is 3**.<br>
     There is no previous less element for 3.<br>

      ```js
      // previous-less-element.js
      
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
      ```

2. Finding the **next less** element of each element in an array with **O(n) time**:

    - What is the next less element of an element?
      For example:<br>
      [3, 7, 8, 4]<br>
      The next less element of 8 is 4.<br>
      **The next less element of 7 is 4**.<br>
      There is no next less element for 3 and 4.<br>

      ```js
      // next-less-element.js
      
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
      ```

## Reference

<https://leetcode.com/problems/sum-of-subarray-minimums/discuss/178876/stack-solution-with-very-detailed-explanation-step-by-step>
