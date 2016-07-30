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

		if(word.slice(-3).toLowerCase() === lastThree){
					
			kinArr.push(word)
		}
	}
}

// PASS YOUR NAME AS THE ARGUMENT!
kinSelector("bruno")

console.log(kinArr)

//RUN $ node kinsanity.js in your terminal to see the words you can
// use to reference with your name!