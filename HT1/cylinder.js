const height = parseInt(prompt("Введите, пожалуйста, высоту"))
const radius = parseInt(prompt("Введите, пожалуйста, радиус"))
const space = Math.PI * Math.pow(radius, 2)
const volume = space * height

document.write('**************' +
`<p>Обьем цилиндра с площадью основы S = ${space}, радиусом R = ${radius} и высотой H = ${height} равен:</p>`
+ `<p>-------------------</p> <p>V = ${volume}</p> <p>-------------------</p> <p>end</p>`)