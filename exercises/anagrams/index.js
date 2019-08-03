// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA,stringB){
	return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str){
	return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}





// function anagrams(stringA,stringB){
// 	stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
// 	stringB = stringB.replace(/[^\w]/g, "").toLowerCase();

// 	if (stringA.length !== stringB.length){
// 		return false
// 	}
// 	else{
// 		if (stringA.split('').sort().join('') === stringB.split('').sort().join('')){
// 			return true
// 		}
// 		else{
// 			return false
// 		}
// 	}

// }






// function anagrams(stringA,stringB){
// 	const aCharMap = buildCharMap(stringA);
// 	const bCharMap = buildCharMap(stringB);
// 	if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
// 		return false;
// 	}
// 	for (let char in aCharMap){
// 		if (aCharMap[char] !== bCharMap[char]){
// 			return false;
// 		}
// 	}
// 	return true
// }

// function buildCharMap(str){
// 	const charMap = {};

// 	for (let char of str.replace(/[^\w]/g, '').toLowerCase()){
// 		charMap[char] = charMap[char] + 1 || 1;
// 	}
// 	return charMap
// }






// function anagrams(stringA, stringB) {
// 	stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
// 	stringB = stringB.replace(/[^\w]/g, "").toLowerCase();
// 	let hashA = {};
// 	let hashB = {};

// 	for (let char of stringA){
// 		hashA[char] = hashA[char] + 1 || 1;
// 	}
// 	for (let char of stringB){
// 		hashB[char] = hashB[char] + 1 || 1;
// 	}
// 	let anagram = false;
// 	if (stringA.length === stringB.length){
// 		for (let key in hashA){
// 			if (hashA[key] === hashB[key]) {
// 				anagram = true
// 			}
// 			else{
// 				anagram = false
// 			}
// 		}
// 	}
// 	return anagram
// }

module.exports = anagrams;
