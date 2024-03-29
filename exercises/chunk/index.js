// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
// 	let new_arr = [];
// 	let chunk = [];
// 	for(let i=0;i<array.length;i++){
// 		if (chunk.length < size){
// 			chunk.push(array[i])
// 		}
// 		else{
// 			new_arr.push(chunk);
// 			chunk = [];
// 			chunk.push(array[i]);
// 		}
// 	}
// 	if (chunk.length>0){
// 		new_arr.push(chunk)
// 	}
// 	console.log(new_arr)
// 	return new_arr
// }





// function chunk(array,size){
// 	const chunked=[];
// 	for(let ele of array){
// 		const last = chunked[chunked.length -1];
// 		if(!last || last.length === size){
// 			chunked.push([ele]);
// 		}else{
// 			last.push(ele);
// 		}
// 	}
// 	return chunked;
// }




function chunk(array,size){
	const chunked = [];
	let index = 0;

	while(index < array.length){
		chunked.push(array.slice(index, index+size));
		index += size;
	}
	return chunked;
}

module.exports = chunk;


