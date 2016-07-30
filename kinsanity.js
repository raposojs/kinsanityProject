var fs = require('fs')

var dictionary = fs.readFileSync("CMUDICT.txt").toString().split("\n");

var kinArr = [];

function kinSelector(name){

	lastThree = name.slice(-3)

	for(var i = 0; i < dictionary.length; i++){

		var wordData = dictionary[i];

		var word = wordData.split(" ")[0];

		if(word.indexOf("(") >= 0){
			word = word.slice(0,-3)
		} else {
			word = word
		}

		if(word.slice(-3).toLowerCase() === lastThree.toLowerCase()){
					
			kinArr.push(word.slice(0,1).concat(word.slice(1,word.length).toLowerCase()))
		}
	}
}

// PASS YOUR NAME AS THE ARGUMENT!
kinSelector("Kin")

console.log(kinArr)

//RUN $ node kinsanity.js in your terminal to see the words you can
// use to reference with your name!