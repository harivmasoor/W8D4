/*console.log(sum(1, 2, 3, 4) === 10);
console.log(sum(1, 2, 3, 4, 5) === 15);*/

/*function sum(...args){
    let total = 0
    for(let i = 0; i < args.length; i++){
        total += args[i];
    }
    return total
};*/

Function.prototype.myBind=function(contx, ...bindArgs){
    const func = this;
    return function(...callArgs){
        return func.apply(contx, [bindArgs, callArgs])
    }
  }

class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  
  markov.says("meow", "Ned");
  // Markov says meow to Ned!
  // true
  
  // bind time args are "meow" and "Kush", no call time args
  markov.says.myBind(pavlov, "meow", "Kush")();
  // Pavlov says meow to Kush!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "a tree"
  markov.says.myBind(pavlov)("meow", "a tree");
  // Pavlov says meow to a tree!
  // true
  
  // bind time arg is "meow", call time arg is "Markov"
  markov.says.myBind(pavlov, "meow")("Markov");
  // Pavlov says meow to Markov!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "me"
  const notMarkovSays = markov.says.myBind(pavlov);
  notMarkovSays("meow", "me");
  // Pavlov says meow to me!
  // true



  function curriedSum(numArgs){
    let numbers = [];
        function _curriedSum(number){
            numbers.push(number);

            if (numbers.length === numArgs){
                return numbers.reduce((acc, number) => acc + number);
            }else{
                return _curriedSum;
            }
        }
        return _curriedSum;
    };

    const sum = curriedSum(4);
    console.log(sum(5)(30)(20)(1)); // => 56
  
    Function.prototype.curry = function(numArgs){
        let args = [];
        const func = this; 
         function _curriedfunction(arg){
            args.push(arg);

            if (args.length === numArgs) {
                return func(...args);
            }else {
                return _curriedfunction;
            };
        }
            return _curriedfunction;
    };
    
    function sumThree(num1, num2, num3) {
        return num1 + num2 + num3;
      }
      
      sumThree(4, 20, 6); // == 30
      
      // you'll write `Function#curry`!
      
      let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
      f1 = f1(4); // [Function]
      f1 = f1(20); // [Function]
      f1 = f1(6); // = 30
      
      // or more briefly:
      console.log(sumThree.curry(3)(4)(20)(6)); // == 30