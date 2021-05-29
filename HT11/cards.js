const suits = ['clubs', 'spades', 'diamonds', 'hearts']
const persons = ['Jack', 'Queen', 'King', 'Tuz']

for (let i = 2; i < 11; i++) {
	for (let suit of suits) {
		document.write(`
			<div class="card">
				<div class="card__info">${i}<img src="images/${suit}.svg" alt="${suit}"></div>
				<div class="card__info">${i}<img src="images/${suit}.svg" alt="${suit}"></div>
			</div>
		`)
	}
}

for (let person of persons) {
	for (let suit of suits) {
		const tempImg = person == 'Tuz' ? suit : person
		document.write(`
			<div class="card card--person">
				<div class="card__info">${person[0]}<img src="images/${suit}.svg" alt="${suit}"></div>
				<img class="person" src="images/${tempImg}.svg" alt="${tempImg}">
				<div class="card__info">${person[0]}<img src="images/${suit}.svg" alt="${suit}"></div>
			</div>
		`)
	}
}