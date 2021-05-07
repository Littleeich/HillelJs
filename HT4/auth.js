alert('Create your account')

const minCharAmount = 6

let name, nick, email, year

do {
	name = prompt("Your Name (must be at least six characters, e.g. Anna Ivanova)").trim()
} while (!isLongEnough(name))
	
do {
	nick = prompt("Nick Name (must be at least six characters, without whitespaces " +
	"and must begin with a letter, e.g. annaivanova)").trim()
} while (!isLongEnough(nick)
		|| isWhitespacesInside(nick)
		|| !isFirstSymbolALetter(nick))

do {
	email = prompt("Email Address (must be at least six characters, without whitespaces, " +
	"begin with a letter and contains @, e.g. annaivanova@gmail.com)").trim()
} while (!isLongEnough(email)
		|| isWhitespacesInside(email)
		|| !isFirstSymbolALetter(email)
		|| !isEmailCorrect(email))
		
do {
	year = prompt("Year of Birth (must be a number, e.g. 1990)").trim()
} while (!isCorrectYear(year))

document.write(`
<ul>
	<li>Your Name: ${name}</li>
	<li>Nick Name: ${nick}</li>
	<li>Email Address: <a href="mailto:${email}">${email}</a></li>
	<li>Age: ${new Date().getFullYear() - year}</li>
</ul>
`)

function isLongEnough(data) {
	return data.length >= minCharAmount
}

function isWhitespacesInside(data) {
	return data.indexOf(' ') != -1
}

function isFirstSymbolALetter(data) {
	return isNaN(+data[0])
}

function isEmailCorrect(email) {
	return email.indexOf('@') != -1
		&& email.indexOf('@') != 1
		&& email.indexOf('@') == email.lastIndexOf('@')
}

function isCorrectYear(year) {
	return !isNaN(year) && year > 1900 && year < new Date().getFullYear()
}