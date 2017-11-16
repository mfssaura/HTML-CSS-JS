Calculator = {
   add: function(num1, num2) {
     return num1 + num2
   },

   subtract: function(num1, num2) {
     return num1 - num2
   }

};

op = "add";

num1 = 1;
num2 = 2;

Calculator[op](num1, num2);
