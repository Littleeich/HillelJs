const arraySize = 15
const arMin = 0
const arMax = 100
let firstAr = [], secondAr = [], thirdAr = [], fourthAr=[], fifthAr=[]

// FIRST TASK
function randomiseArray(ar, arSize = arraySize, max = arMax, min = arMin) {
	for (let i = 0; i < arSize; i++) {
		ar[i] = Math.floor(Math.random() * (max - arMin + 1)) + arMin 
	}
}

randomiseArray(firstAr)
randomiseArray(secondAr)

console.log(firstAr)
console.log(secondAr)

let tempAr = findUniqeElements(firstAr, [])

function findUniqeElements(ar, newAr) {
	for (let i=0; i < ar.length; i++) {
		if (newAr.indexOf(ar[i]) == -1) {
			newAr.push(ar[i])
		}
	}
	return newAr
}

console.log(tempAr)
tempAr = findUniqeElements(secondAr, tempAr)
console.log(`Final result of the task1: ${tempAr}`)

// SECOND TASK
randomiseArray(thirdAr)
console.log(thirdAr)
tempAr = findSimpleInArray(thirdAr, [])

function findSimpleInArray(ar, resultAr) {
	ar = findUniqeElements(ar, [])
	for (let el of ar) {
		for (let i = 2; i < el; i++) {
			if (el % i == 0) {
				break
			}
			if (i == el - 1) {
				resultAr[resultAr.length] = el
			}
		}
	}
	return resultAr
}

console.log(tempAr)
// console.log(Math.max.apply(null, tempAr))
// console.log(Math.min.apply(null, tempAr))
function findMin(ar) {
	let min = ar[0]
	for (let i=1; i < ar.length; i++) {
		if(ar[i] < min) {
			min = ar[i]
		}
	}
	return min
}

function findMax(ar) {
	let max = ar[0]
	for (let i=1; i < ar.length; i++) {
		if(ar[i] > max) {
			max = ar[i]
		}
	}
	return max
}

console.log(`Final result of the task2: 
Min is ${findMin(tempAr)}
Max is ${findMax(tempAr)}`)

// THIRD TASK
randomiseArray(fourthAr)
console.log(fourthAr)
let minIndex = fourthAr.indexOf(findMin(fourthAr))
let maxIndex = fourthAr.indexOf(findMax(fourthAr))
console.log(minIndex, maxIndex)

if (minIndex > maxIndex) {
	let temp = minIndex
	minIndex = maxIndex
	maxIndex = temp
}

tempAr = []

for(let i = minIndex + 1; i < maxIndex; i++) {
	tempAr[tempAr.length] = fourthAr[i]
}

console.log(`Final result of the task3: ${tempAr}`)

// FOURTH TASK
randomiseArray(fifthAr)
console.log(fifthAr)
minIndex = fifthAr.indexOf(findMin(fifthAr))
maxIndex = fifthAr.indexOf(findMax(fifthAr))

let tempChanger = fifthAr[minIndex]
fifthAr[minIndex] = fifthAr[maxIndex]
fifthAr[maxIndex] = tempChanger
console.log(`Final result of the task4: ${fifthAr}`)
