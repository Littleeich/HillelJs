const hero = ['Ivan'];
const nat = ['York','Of'];
const destination = ['Poltava','In'];
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

let rainbow = destination.concat(nat).concat(hero)

console.log(`Task1: ${rainbow}`)

rainbow.reverse()

console.log(`Task2: ${rainbow}`)

rainbow.shift()
rainbow.unshift('Richard')
rainbow.splice(-2)
rainbow.push('Gave','Battle','In','Vain')

console.log(`Task3: ${rainbow}`)

if (colors.length != rainbow.length) {
	alert('Wrong size of colors/rainbow arrays!')
}

for (let i = 0; i < rainbow.length; i++) {
	document.write(`
	<div class="some-color">
		<div class="circle" style="background: ${colors[i]}"></div>
			${rainbow[i]}
	</div>
	`)
}