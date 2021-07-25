const HAMBURGER_BASE = {
	small: [5, 20],
	big: [10, 40]
}

const HAMBURGER_ADDS = {
	cheese: [1, 20],
	salad: [2, 5],
	potato: [1.5, 10],
	flavoring: [1.5, 0],
	mayo: [2, 5]
}

class Hamburger {
	
	constructor() {
		this.chooseBase()
		this.chooseAdds()
	}
	
	chooseBase() {
		let isBig = confirm('Hey, bro! Do you wanna big burger?')
		if(isBig) {
			this.burgerName = 'Big burger'
			this.price = HAMBURGER_BASE['big'][0]
			this.cal = HAMBURGER_BASE['big'][1]
		} else {
			this.burgerName = 'Small burger'
			this.price = HAMBURGER_BASE['small'][0]
			this.cal = HAMBURGER_BASE['small'][1]
		}
	}

	chooseAdds() {
		for (let ad in HAMBURGER_ADDS) {
			let adding = confirm(`Do we need to add ${ad}?`)
			if (adding) {
				this.burgerName += ` + ${ad}`
				this.price += HAMBURGER_ADDS[ad][0]
				this.cal += HAMBURGER_ADDS[ad][1]
			}
		}
	}
	
	printBurgerOrder() {
		console.log(this.burgerName)
		console.log(this.price)
		console.log(this.cal)
	}
}

let california = new Hamburger()
california.printBurgerOrder()