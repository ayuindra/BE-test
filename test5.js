/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
  // Your Code Here
  var prefix = ""
  if(words === null || words.length === 0){
  	return prefix
  }

  for(var i = 0; i < words[0].length; i++){
  	//perulangan untuk semua karakter dari string pertama
  	const char = words[0][i] 

  	for(var j = 1; j < words.length; j++){
  		//perulangan untuk mengulang semua string lainnya dalam array
  		if(words[j][i] !== char){
  			return prefix
  		}
  	}
  	prefix = prefix + char
  }

  return prefix
}

console.log(result(words));
