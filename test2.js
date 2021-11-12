/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
  // Your Code Here
  //menggunakan set untuk menghapus duplikat data
  var removeData = [...new Set(data)]
  //mengurutkan bilangan dalam array
  removeData.sort()
  return removeData
}

console.log(result(data));
