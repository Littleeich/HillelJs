function Animal(name, icon, category, breed, voice) {
	this.name = name
	this.icon = icon
	this.category = category
	this.breed = breed
	this.voice = voice
	Animal.prototype.getVoice = function() {
		let voiceSound = this.voice ? ` I can say ${this.voice}.` : ''
		return `Hello, me name is ${this.name} ${this.icon}. I'm ${this.breed} ${this.category}.${voiceSound}`
	}
}

/*
We can have the function on the same level, but I like to put methods to the higher level prototype.
Smth like variables in one place and functions in another.

function Animal(name, icon, category, breed, voice) {
	this.name = name
	this.icon = icon
	this.category = category
	this.breed = breed
	this.voice = voice
	this.getVoice = function() {
		let voiceSound = this.voice ? ` I can say ${this.voice}.` : ''
		return `Hello, me name is ${this.name} ${this.icon}. I'm ${this.breed} ${this.category}.${voiceSound}`
	}
}
*/

let Ivan = new Animal('Ivan', '🐕', 'dog', 'Australian Shepherds', 'gav-gav'),
	Anna = new Animal('Anna', '🐩', 'dog', 'Siberian Huskies'),

	Olena = new Animal ('Olena', '🐈', 'cat', 'British Shorthair', 'myu-myu'),
	Simba = new Animal ('Simba', '🐆', 'cat', 'Leopard'),

	Kesha = new Animal('Kesha', '🦜', 'parrot', 'Cockatoos');
	
console.log(Ivan.getVoice())
console.log(Anna.getVoice())
console.log(Olena.getVoice())
console.log(Simba.getVoice())
console.log(Kesha.getVoice())