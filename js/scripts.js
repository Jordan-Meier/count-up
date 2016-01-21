var countBy1 = function(number, increment) {
  for (var i = 1; i <=number; i += increment) {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
}


var countBy4 = function(startNumber, endNumber, increment) {
  var result = [];
  for (startNumber; startNumber <= endNumber; startNumber += increment) {
    result.push(startNumber);
  }
  return result;
}

$(document).ready(function() {
  $()



});
