/**
 * Dynamic Programming
 * Recursion - Store - Bottom-up
 */

const store = {
  1: 1,
  2: 1
};
const fibonacci = (n: number): number => {
  if(store[n]) {
    return store[n];
  }
  const result = fibonacci(n-2) + fibonacci(n-1);
  store[n] = result;
  return result;
}

console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(store);
