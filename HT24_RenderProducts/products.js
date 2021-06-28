let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

function objectCreator(...params) {
	let finalArr = []
	for (let prodArr of params) {
		prodArr[0].forEach( function (el) {
			finalArr.push(new Product(prodArr[1], el.type, el.price))
		})
	}
	return finalArr
}

const getCategory = varObj => Object.keys(varObj)[0].replace('Products', '')

function Product(category, type, price) {
	this.category = category
	this.type = type
	
	if(typeof(price) === 'number') {
		this.price = price
	} else if(Array.isArray(price) && price.length == 2) {
		this.price = `${price[0]}-${price[1]}`
	} else {
		throw Error(`Unknown price: ${price}`)
	}
	
	Product.prototype.render = function() {
		return `
		<tr>
			<td><img src="images/${this.category}/${this.type}.svg" alt="${this.type}" width="50" height="50"></td>
			<td>${this.type}</td>
			<td>${this.price} USD</td>
		</tr>
		`
	}
}

const renderArray = objectCreator(
[kitchenProducts, getCategory({kitchenProducts})],
[devicesProducts, getCategory({devicesProducts})],
[cosmeticsProducts, getCategory({cosmeticsProducts})],
)

function renderTable(rArr) {
	let table = [`
	<table>
		<tr>
			<td><strong>Image</strong></td>
			<td><strong>Name</strong></td>
			<td><strong>Price</strong></td>
		</tr>
	`]
	for(let product of rArr) {
		table.push(product.render())
	}
	document.write(table.join(''))
}

renderTable(renderArray)