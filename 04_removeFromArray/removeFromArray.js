const removeFromArray = function(array, value) {
  if (array.includes(value) === true) {
   let valueIndex = array.indexOf(value);
   
    array.splice(valueIndex, 1);
    return array;
  } else {
    return array;
  }
   
 };

// Do not edit below this line
module.exports = removeFromArray;
