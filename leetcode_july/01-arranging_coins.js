'use strict';

/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = (n) => {
  // This can be solved using math
  // n = the area of sum(1 to x), and we return floor(x)
  // n = x*(x+1)/2 -> x = (sqrt(8n+1)-1)/2
  // Return floor of this
  let x = Math.floor((Math.sqrt(8 * n + 1) - 1) / 2);
  return x;
};

const testRunner = (tests, func) => {
  const name = func.name;
  for (let { input, expected } of tests) {
    const result = func(input);
    console.log({
      name,
      input,
      result,
      expected,
      pass: result === expected,
    });
  }
};

const test = () => {
  const tests = [
    { input: 1, expected: 1 },
    { input: 3, expected: 2 },
    { input: 5, expected: 2 },
    { input: 8, expected: 3 },
    { input: 15, expected: 5 },
  ];

  testRunner(tests, arrangeCoins);
};

export default test();
