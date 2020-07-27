function greeting (parameterVariable) {
  // This line prints 'Hello, World!' to the console:
  // Write a line of code that prints parameterVariable to stdout using console.log:
  console.log('Hello, World!');
  console.log(parameterVariable);
};

function main() {
  const parameterVariable = readLine();

  greeting(parameterVariable);
}
