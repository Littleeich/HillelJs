let symbol, operandCount, questionString, result

do {
		symbol = prompt("Please, enter one of this symbols: + - / * ", "")
} while ( !['+', '-', '/', '*'].includes(symbol) )
	
do {
	operandCount = +prompt("Please, enter a number from 2 to 6", "")
} while (isNaN(operandCount) || operandCount < 2 || operandCount > 6)
	
do {
	questionString = prompt(`Please, enter 1 number`, "")
	result = +questionString
	
} while (isNaN(result))

for(let i = 1; i < operandCount; i++) {
	let operand
	do {
		operand = +prompt(`Please, enter ${i + 1} number`, "")
	} while (isNaN(operand))
		
	questionString = questionString.concat(' ', symbol, ' ', operand)
		
	switch(symbol) {
		case '+':
			result += operand
			break
		case '-':
			result -= operand
			break
		case '/':
			result /= operand
			break
		case '*':
			result *= operand
			break
		default:
			alert('Huston, we have a problem!')
	}
}

console.log(`${questionString} = ${result}`)