/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here
  var total = numbers.length*(numbers.length + 1)/2

  //membuat perulangan untuk mengecek array
  for (var i = 0; i < numbers.length; i++){
  	total = total - numbers[i];
  	//console.log(total)
  }
  return total
}

console.log(result(numbers));
