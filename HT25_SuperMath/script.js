const ACTIONS = ['+', '-', '/', '*', '%']

class SuperMath {
	
	checkNumberValue(varN) {
		let result = +prompt(`Please, enter you number for ${varN}`, '')
		
		return isNaN(result) ? this.getNumberValue(varN) : result
	}
	
	checkSignValue(varN) {
		let result = prompt(`Please, enter you ${varN}`, 'One of: + - / * %')
		// without additional returns in lines 16 and 20 method will return undefined.
		if(result === '/' && this.y === 0) {
			alert("Sorry, but we can't divide with the zero as the second parameter")
			return this.checkSignValue(varN)
		} else if ( ACTIONS.includes(result) ) {
			return result
		} else {
			return this.checkSignValue(varN)
		}
	}
	
	makeMathMagic(x, y, z) {
		switch(z) {
			case '+': 
				return x + y 
			case '-':
				return x - y
			case '/':
				return x / y
			case '*':
				return x * y
			case '%':
				return x % y
		}
	}
	
	check(obj) {
		let askAgain = confirm('Do you wanna work with the Object data?')
		
		if(askAgain) {
			this.x = !isNaN(+obj.X) ? +obj.X : checkNumberValue('x')
			this.y = !isNaN(+obj.Y) ? +obj.Y : checkNumberValue('y')
			this.znak = ACTIONS.includes(obj.znak) ? obj.znak : checkSignValue('znak')
		} else {
			this.x = this.checkNumberValue('x')
			this.y = this.checkNumberValue('y')
			this.znak = this.checkSignValue('znak')
		}
		// console.log(`${this.x} ${this.znak} ${this.y}`)
		console.log(this.makeMathMagic(this.x, this.y, this.znak))
	}
}

obj = {X:12, Y:3, znak: "/"}

let p = new SuperMath()
p.check(obj)