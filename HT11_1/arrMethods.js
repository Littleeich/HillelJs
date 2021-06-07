let amount = 100;
let monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];
let tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',180],
   ['A whole lot of nothing',240]
];
let tasks = [monday,tuesday];

const MIN_HOURS_AMOUNT = 2

function fromMinutesToHours(number) {
	return number / 60
}

let tasksInHours = tasks.map( function(arr) {
	return arr.map(elem => {
		return [elem[0], elem[1] / 60]
		})
})

let tasksNeeded = tasksInHours.map( function(arr) {
	return arr.filter(elem => {
		return elem[1] >= MIN_HOURS_AMOUNT
		})
})

console.log(tasksNeeded)
console.log(tasksNeeded.flat())

let trArr = tasksNeeded.flat().map( function(tr, iter) {
	return `
	<tr>
		<td>Task name: ${tr[0]}</td>
		<td>Taks duration: ${tr[1]} hours</td>
		<td>Task amount: $${tr[1] * amount}</td>
	</tr>
	`
})

document.write(`<table>
${trArr.join('')}
</table>`)

