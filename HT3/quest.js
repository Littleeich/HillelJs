let sum = 0

const questionArray = [
	"Сколько будет 2+2?",
	"Солнце встает на востоке?",
	"Сколько будет 5 / 0?",
	"Какого цвета небо?",
	"Какой правильный ответ на главный вопрос жизни, вселенной и всего такого"
]

const answerArray = [
	"4", 
	"да", 
	"бесконечность", 
	"голубого", 
	"42"
]

if (questionArray.length != answerArray.length) {
	throw new Error('Length of the answer/question arrays should be the same!')
}

for (const iter in questionArray) {
	if (prompt(questionArray[iter]).toLowerCase() == answerArray[iter]) {
		sum += 10
	}
}

alert(sum)

