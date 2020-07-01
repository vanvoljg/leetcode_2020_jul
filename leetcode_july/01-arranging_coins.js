'use strict';

/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = (n) => {
  return 0;
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
    { input: 5, expected: 2 },
    { input: 8, expected: 3 },
  ];

  testRunner(tests, arrangeCoins);
};

export default test();
