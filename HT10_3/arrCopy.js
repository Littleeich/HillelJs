const a = [1,2,3, 'hello',4,5]
const b = [1,2,3, true, 4, undefined, 6]
const c = [[1,2,3,[1,2,3]], true, 4, undefined, 6]

function arrCopy(arr, f) {
	if(!Array.isArray(arr)) {
		return [arr]
	}
	
	let resultArr = [] 
	
	for(let el of arr) {
		if(Array.isArray(el)) {
			resultArr.push(arrCopy(el, f))
		} else {
			if(f && typeof(f) == 'function') {
				resultArr.push(f(el))
			} else {
				resultArr.push(el)
			}
		}
	}
	return resultArr
}

console.log(arrCopy(a))
console.log(arrCopy(b))
console.log(arrCopy(c))
console.log(arrCopy())
console.log(arrCopy('a'))
console.log(arrCopy(a, function(value){ return value*10; }))
console.log(arrCopy(c, a))
		