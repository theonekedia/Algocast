// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let hash = {};
	let max = 0;
	let maxChar = "";

	for (let char of str){
		hash[char] = hash[char] + 1 || 1;
	}
	for (let key in hash){
		if (hash[key] > max) {
			max = hash[key]
			maxChar = key
		}
	}
	return maxChar
}

module.exports = maxChar;
