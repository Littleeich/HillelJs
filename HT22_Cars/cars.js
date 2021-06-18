const Car = {
	getInfo: function() {
		document.write(`
		<h1>Info about the car:</h1>
		<ul>
			<li>Name is ${this.name}</li>
			<li>Vehicle type is ${this.vehicle}</li>
			<li>Price as tested is ${this.price}</li>
			<li>Engine type is ${this.engine}</li>
		</ul>
		`)
	}
}

let mazda = Object.create(Car)
let toyota = Object.create(Car)
let porsche = Object.create(Car)

mazda.name = '2019 Mazda MX-5 Miata Club'
mazda.vehicle = 'front-engine, rear-wheel-drive, 2-passenger, 2-door convertible'
mazda.price = '$34,980 (base price: $30,510)'
mazda.engine = 'DOHC 16-valve inline-4, aluminum block and head, direct fuel injection'

toyota.name = '2021 Toyota Supra 3.0'
toyota.vehicle = 'front-engine, rear-wheel-drive, 2-passenger, 2-door hatchback'
toyota.price = '$52,440 (base price: $51,945)'
toyota.engine = 'turbocharged and intercooled DOHC 24-valve inline-6, aluminum block and head, direct fuel injection'

porsche.name = '2018 Porsche 718 Cayman GTS'
porsche.vehicle = 'mid-engine, rear-wheel-drive, 2-passenger, 2-door hatchback'
porsche.price = '$85,170 (base price: $81,750)'
porsche.engine = 'turbocharged and intercooled DOHC 16-valve flat-4, aluminum block and heads, direct fuel injection'

mazda.getInfo()
toyota.getInfo()
porsche.getInfo()
