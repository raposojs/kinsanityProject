	 
	 // What is your name??

	INSERT_NAME_HERE = "Kin" 
	
	// INSERT NAME HERE ^^^

	// After inserting name, save file


// RUN "$ node kinsanity.js" in your terminal to see the words you 
// reference with your name!

// Visit https://github.com/raposojs/kinsanityProject for repo






















































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

kinSelector(INSERT_NAME_HERE)

console.log(kinArr)

