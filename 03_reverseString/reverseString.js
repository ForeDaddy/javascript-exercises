const reverseString = function(string) {
  var newArray = string.split("");
  let reverseArray = newArray.reverse();
   let newString = reverseArray.join("");
   return newString;
 };

// Do not edit below this line
module.exports = reverseString;
