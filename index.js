// Define receivesAFunction function
function receivesAFunction(callback) {
    return callback();
  }
  
  // Define returnsANamedFunction function
  function returnsANamedFunction() {
    return function namedFunction() {
      return "This is a named function.";
    };
  }
  
  // Define returnsAnAnonymousFunction function
  function returnsAnAnonymousFunction() {
    return function () {
      return "This is an anonymous function.";
    };
  }
  