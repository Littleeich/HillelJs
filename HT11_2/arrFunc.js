let users = [
 ["john","red",5,["ball", "book", "pen"]],
 ["becky","blue",10,["tape", "backpack", "pen"]],
 ["susy","red",55,["ball", "eraser", "pen"]],
 ["tyson","green",1,["book", "pen"]],
];

let firstUsers = []

users.forEach(function(el){
	firstUsers.push(el[0] + '!')
})

console.log(firstUsers)

let secondUsers = users.map( function(el) {
	return el[0] + '?'
})

console.log(secondUsers)

let filteredUsers = users.filter (function(el) {
	return el[1] == 'red'
})

console.log(filteredUsers)

let finalSumm = 0
let trArr = filteredUsers.map( function (row) {
	let tdArr = row.map( function(el) {
		return `<td>${el}</td>`
	})
	finalSumm += row[2]
	return `<tr>${tdArr.join('')}</tr>`
})



document.write(`<table>${trArr.join('')}</table><foot>Final summ: ${finalSumm}</foot>`)