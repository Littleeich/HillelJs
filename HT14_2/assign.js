const obj1 = { x: 10, y: 20 },
	  obj2 = { z: 30 },
	  obj3 = { x: 10 },
	  obj4 = { x: 20, y: 30 };
	  
function assignObjects(obj1, obj2) {
	let newObj = {}
	fulfillObj(newObj, obj1)
	fulfillObj(newObj, obj2)
	return newObj
}

function fulfillObj(newObj, obj) {
	for (let key in obj) {
		newObj[key] = obj[key]
	}
}

console.log(assignObjects(obj1, obj2))
console.log(assignObjects(obj3, obj4))
console.log(assignObjects(obj1, obj4))
console.log(assignObjects(obj2, obj4))