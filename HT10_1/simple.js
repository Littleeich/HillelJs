function main (a = 2, b = 3, c) { 
	let answer = sum(a, b)
	if (typeof(c) === 'function') {
		answer = c(answer)
	}
	return answer
}

function sum (a, b) { 
    return a + b; 
}

function doubleNumber(num) {
	return num * 2
}

console.log(main(5, 9, doubleNumber)) //expected 28
console.log(main(undefined, undefined, doubleNumber)) //expected 10
console.log(main('text', 'nine', doubleNumber)) // expected NaN
console.log(main('text', 'nine')) // expected textnine
console.log(main(5)) // expected 8
