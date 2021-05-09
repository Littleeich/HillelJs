let firstNumber, secondNumber, stepSize

function getNumber(question, minimum) {
	let number
	do {
		//function is safe, because round of NaN will return NaN (no errors)
		number = Math.round(+prompt(question, ""))
	} while (isNaN(number) || number < minimum)
	return number
}

firstNumber = getNumber("Enter the first number: (1 or more)", 1)
secondNumber = getNumber(`Enter the second number: (more than ${firstNumber})`, firstNumber + 1)
stepSize = getNumber("Enter the step size: (1 or more)", 1)

function getFactorial(number) {
	let factorial = 1
	if (isNaN(number) || number < 0 || number % 1 > 0) {
		return NaN
	} else {
		for (let i = number; i > 0; i--) {
			factorial *= i
		}
	}
	return factorial
}

function getSumOfMidFactorials(first, second, step) {
	// if there are no middle numbers, we will return 0 (the sum of nothing)
	if (first + step > second) {
		return 0
	}
	// we don't wanna count factorials each time, because it is quite expensive
	// I wanna use logic that 7! = 7 * 6 * 5!, so if I know amount of 5!, I will
	// not count it again, I will reuse the previous count results
	let factorialIndex = first + step
	let middleFactorial = getFactorial(factorialIndex)
	let sum = middleFactorial
	
	for (factorialIndex; factorialIndex + step < second; factorialIndex = factorialIndex + step){
		for (let i = factorialIndex + step; i > factorialIndex; i--) {
			middleFactorial *= i
		}
		sum += middleFactorial
	}
	
	return sum
}

document.write(`
<ul>
	<li>The first number: ${firstNumber}</li>
	<li>The second number: ${secondNumber}</li>
	<li>The step size: ${stepSize}</li>
	<li>The sum of factorials between the numbers: ${getSumOfMidFactorials(firstNumber, secondNumber, stepSize)}</li>
</ul>
`)