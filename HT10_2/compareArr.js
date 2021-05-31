const a = [1,2,3, 'hello',4,5]
const b = [1,2,3, true, 4, undefined, 6]

function arraySum(arr) {
	let result = 0
	if (Array.isArray(arr)) {
		for(let el of arr) {
			if(!isNaN(+el) && typeof(el) === 'number') {
				result += el
			}
		}
	} else {
		result = NaN
	}
	//console.log(result)
	return result
}

function findBiggerArray(arr, brr) {
	const arrSum = arraySum(arr)
	const brrSum = arraySum(brr)
	
	if(arrSum < brrSum) {
		return brr
	} else if (arrSum > brrSum) {
		return arr
	} else {
		return []
	}
}

console.log(findBiggerArray(a, b))            // expected [1, 2, 3, true, 4, undefined, 6]
console.log(findBiggerArray(b, a))			  // expected [1, 2, 3, true, 4, undefined, 6]
console.log(findBiggerArray(a, a))			  // expected []
console.log(findBiggerArray('text', b))		  // expected []
console.log(findBiggerArray('text', 'some'))  // expected []
console.log(findBiggerArray(a, 'some'))		  // expected []
console.log(findBiggerArray(a))				  // expected []
console.log(findBiggerArray())				  // expected []