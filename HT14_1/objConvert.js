obj = { 
	x: 10, 
	y: 20, 
	inner: { 
		x: 20, 
		z: 30 
		}, 
	foo2: { 
		k: 23, 
		p: 13 
		} 
}

function convert(obj) {
	let newObj = {}
	for (let key in obj) {
		if(typeof(obj[key]) !== 'object') {
			newObj[key] = obj[key]
		} else {
			for (let innerKey in obj[key]) {
				newObj[innerKey] = obj[key][innerKey]
			}
		}
	}
	return newObj
}

console.log(obj)

const updated = convert(obj)

console.log(updated)