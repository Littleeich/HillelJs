const sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

const summer_sports = sports.slice(5, 7).concat(sports.slice(-2))
const winter_sports = sports.slice(0, 2).concat(sports.slice(3, 5))

let fruits = []
for (let el of sports) {
	if (!summer_sports.includes(el) && !winter_sports.includes(el)) {
		fruits.push(el)
	}
}

function arrLogger(message, arr) {
	console.log(`*** ${message} ***`)
	for (let el of arr) {
		console.log(`${el[0]}: ${el[1]}`)
	}
	console.log(' ')
}

arrLogger('Winter sports', winter_sports)
arrLogger('Summer sports', summer_sports)
arrLogger('Fruits', fruits)