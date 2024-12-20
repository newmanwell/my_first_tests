const Calculate = {
    factorial(fact) {
      if (fact === 0) {
        return 1;
      }
      for (let i = fact - 1; i >= 1; i--) {
        fact = fact * i; 
      } 
    return fact;
    }
  }
  
  module.exports = Calculate;
  