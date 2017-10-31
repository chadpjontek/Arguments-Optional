function addTogether() {
  // check to see if there are only numbers in args. If not return undefined.
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] != 'number') {
      return undefined;
    }
  }
  // Is there only 1 arg?
  if (arguments.length === 1) {
    var arg1 = arguments[0];
    // return a function to add the arg to the next arg returned
    return function (arg2) {
      if (typeof arg2 != 'number') {
        return undefined;
      }
      return arg1 + arg2;
    };
    // Is there 2 args?
  } else if (arguments.length === 2) {
    // add them
    return arguments[0] + arguments[1];
  } else {
    // Not 1 or 2 args?
    return undefined;
  }
}
// Examples
addTogether(2, 3); // returns 5
addTogether(2)(3); // returns 5
addTogether("http://bit.ly/IqT6zt"); // returns undefined
addTogether(2, "3"); // returns undefined
addTogether(2)([3]); // returns undefined