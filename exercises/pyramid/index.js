// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


function pyramid(n, row=0,level=''){
	const mid = Math.floor((2*n -1)/2);
	if (n === row){
		return;
	}
	if (2*n-1 === level.length){
		console.log(level);
		return pyramid(n,row+1)
	}
	if (mid-row <= level.length &&  mid+row >= level.length){
		level+='#';
	}else{
		level += ' ';
	}
	pyramid(n, row, level)
}






// function pyramid(n) {
// 	const mid = Math.floor((2*n -1)/2);
// 	for (let row = 0; row<n; row++){
// 		let level = "";
// 		for (let col = 0; col< 2*n-1; col ++){
// 			if (mid-row <=col && mid+row >=col){
// 				level += '#';
// 			}else{
// 				level += ' ';
// 			}
// 		}
// 		console.log(level)
// 	}
// }






// function pyramid(n) {
// 	if (n === 1){
// 		return console.log('#')
// 	}
// 	let long = n + n-1;
// 	let j = 1;
// 	for(let i=1; i<=n;i++){
// 		let str = '';
// 		if (long-j > 0){
// 			str = calculateDash((long-j)/2) + calculateHash(j) + calculateDash((long-j)/2);
// 		}
// 		else{
// 			str = calculateHash(j);	
// 		}
// 		console.log(str);
// 		j+=2
// 	}
// }

// function calculateHash(n){
// 	if (n===0){
// 		return ''
// 	}
// 	str = '';
// 	for(let i=1; i<=n;i++){
// 		str +='#';
// 	}
// 	return str
// }
// function calculateDash(n){
// 	if (n===0){
// 		return ''
// 	}
// 	str = '';
// 	for(let i=1; i<=n;i++){
// 		str +=' ';
// 	}
// 	return str
// }


module.exports = pyramid;
