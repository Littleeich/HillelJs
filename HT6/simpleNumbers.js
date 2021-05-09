maxNumber = 10
sumOfSimpleNumbers = 0
for (let i =2; i < maxNumber; i++) {
	for (let j = 2; j < i; j++) {
		if (i % j == 0) {
			break
		}
		if (j == i - 1) {
			sumOfSimpleNumbers += i
		}
	}
}

console.log(sumOfSimpleNumbers)