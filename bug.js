function foo(x) {
  if (x === null) {
    return 0; // Handle null
  }
  return x.length; // Error if x is not an object with length
}

console.log(foo(null)); // 0
console.log(foo([1, 2, 3])); // 3
console.log(foo(undefined)); // TypeError: Cannot read properties of undefined (reading 'length')