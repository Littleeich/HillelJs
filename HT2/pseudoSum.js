let sum = 100

function pseudoSum() {
	const imput = prompt("Введите, пожалуйста, следующее число:")
	// дополнительное действие, чтобы в случае ошибки мы видели какой именно
	// импут был некорректным, иначе мы будем видеть NaN is not valid number
	const num = +imput
	
	if (isNaN(num) || num <= 0) {
		alert(`${imput} is not valid number.`)
	} else {
		alert(`${imput} is valid number.`)
		sum += num
	}
	
	alert(`${sum}`)
}
	
pseudoSum()
pseudoSum()
pseudoSum()