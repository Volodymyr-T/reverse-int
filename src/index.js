module.exports = function reverse (n) {
  return parseInt (         // 6. Return result converted to a Number
            Math.abs(n)     // 1. Get absolute value of n
            .toString()     // 2. Convert a Number to a String
            .split('')      // 3. Convert a String to an Array of chars
            .reverse()      // 4. Cast a reverse method to reverse an Array
            .join('')       // 5. Join an Array to a String
  );
}
