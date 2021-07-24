let serverResponce = {
	"roles": {
		"admin": "https://www.flaticon.com/svg/static/icons/svg/1424/1424453.svg",
		"student": "https://www.flaticon.com/svg/static/icons/svg/1424/1424424.svg",
		"lector": "https://www.flaticon.com/svg/static/icons/svg/1424/1424450.svg"
	},
	"gradation": [
		[0,20],
		[20,55],
		[55,85],
		[85,100]
	],
	"users": [
		{
			"name": "Jack Smith",
			"age": 23,
			"img": "https://www.flaticon.com/svg/static/icons/svg/2922/2922522.svg",
			"role": "student",
			"courses": [
				{
					"title": "Front-end Pro",
					"mark": 20
				},
				{
					"title": "Java Enterprise",
					"mark": 100
				}
			]
		},
		{
			"name": "Amal Smith",
			"age": 20,
			"img": "https://www.flaticon.com/svg/static/icons/svg/2922/2922656.svg",
			"role": "student"
		},
		{
			"name": "Noah Smith",
			"age": 43,
			"img": "https://www.flaticon.com/svg/static/icons/svg/2922/2922616.svg",
			"role": "student",
			"courses": [
				{
					"title": "Front-end Pro",
					"mark": 50
				}
			]
		},
		{
			"name": "Charlie Smith",
			"age": 18,
			"img": "https://www.flaticon.com/svg/static/icons/svg/2922/2922688.svg",
			"role": "student",
			"courses": [
				{
					"title": "Front-end Pro",
					"mark": 75
				},
				{
					"title": "Java Enterprise",
					"mark": 23
				}]
		},
		{
			"name": "Emily Smith",
			"age": 30,
			"img": "https://www.flaticon.com/svg/static/icons/svg/2922/2922565.svg",
			"role": "admin",
			"courses": [
				{
					"title": "Front-end Pro",
					"score": 10,
					"lector": "Leo Smith"
				},
				{
					"title": "Java Enterprise",
					"score": 50,
					"lector": "David Smith"
				},
				{
					"title": "QA",
					"score": 75,
					"lector": "Emilie Smith"
				}]
		},
		{
			"name": "Leo Smith",
			"age": 25,
			"img": "https://www.flaticon.com/svg/static/icons/svg/2922/2922719.svg",
			"role": "lector",
			"courses": [
				{
					"title": "Front-end Pro",
					"score": 78,
					"studentsScore": 79
				},
				{
					"title": "Java Enterprise",
					"score": 85,
					"studentsScore": 85
				}
			]
		}
	]
}

const ROLES = serverResponce.roles

class User {
    constructor (name, age, img, role, courses = null) {
        this.name = name
        this.age = age
        this.img = img
        this.role = role
        this.courses = courses
    }

    generateUserInfo() {
    return `
    <div class="user__info">
        <div class="user__info--data">
            <img src="${this.img}" alt="${this.name}" height="50">
            <div class="user__naming">
                <p>Name: <b>${this.name}</b></p>
                <p>Age: <b>${this.age}</b></p>
            </div>
        </div>
        <div class="user__info--role ${this.role}">
            <img src="${ROLES[this.role]}" alt="${this.role}" height="25">
            <p>${this.role}</p>
        </div>
    </div>
    `
    }

    generateCoursesInfo() {}

    getMark(number) {
        switch (true) {
            case (number <= serverResponce.gradation[0][1]):
                return 'Satisfactory'
            case (number <= serverResponce.gradation[1][1]):
                return 'Good'
            case (number <= serverResponce.gradation[2][1]):
                return 'Very Good'
            default:
                return 'Excelent'
        }
    }

    renderUser() {
        let resultArr = ['<div class="user">']
        resultArr.push(this.generateUserInfo())
        resultArr.push(this.generateCoursesInfo())
        resultArr.push('</div>')
        return resultArr.join(' ')
    }
}

class Student extends User {
    constructor(name, age, img, courses = null) {
        super(name, age, img, 'student', courses)
    }

    generateCoursesInfo() {
        let resultArr = []
        if(this.courses && this.courses.length > 0) {
            resultArr.push('<div class="user__courses">')
            let role = this.role
            let getMark = this.getMark
            this.courses.forEach( function(el) {
                resultArr.push(`
                <p class="user__courses--course ${role}">
                    ${el.title} <span class="${getMark(el.mark).toLowerCase() === 'very good' ? 'very-good' : getMark(el.mark).toLowerCase()}">${getMark(el.mark)}</span>
                </p>
                `)
            })
            resultArr.push('</div>')
        }
        return resultArr.join('')
    }
}

class Lector extends User {
    constructor(name, age, img, courses = null) {
        super(name, age, img, 'lector', courses)
    }

    generateCoursesInfo() {
        let resultArr = []
        if(this.courses && this.courses.length > 0) {
            resultArr.push('<div class="user__courses admin--info">')
            let role = this.role
            let getMark = this.getMark
            this.courses.forEach( function(el) {
                resultArr.push(`
                <div class="user__courses--course ${role}">
                    <p>Title: <b>${el.title}</b></p>
                    <p>Lector's score: <span class="${getMark(el.score).toLowerCase() === 'very good' ? 'very-good' : getMark(el.score).toLowerCase()}">${getMark(el.score)}</span></p>
                    <p>Average student's score: <span class="${getMark(el.studentsScore).toLowerCase() === 'very good' ? 'very-good' : getMark(el.studentsScore).toLowerCase()}">${getMark(el.studentsScore)}</span></p>
                </div>
                `)
            })
            resultArr.push('</div>')
        }
        return resultArr.join('')
    }
}

class Admin extends User {
    constructor(name, age, img, courses = null) {
        super(name, age, img, 'admin', courses)
    }

    generateCoursesInfo() {
        let resultArr = []
        if(this.courses && this.courses.length > 0) {
            resultArr.push('<div class="user__courses admin--info">')
            let role = this.role
            let getMark = this.getMark
            this.courses.forEach( function(el) {
                resultArr.push(`
                <div class="user__courses--course ${role}">
                    <p>Title: <b>${el.title}</b></p>
                    <p>Admin's score: <span class="${getMark(el.score).toLowerCase() === 'very good' ? 'very-good' : getMark(el.score).toLowerCase()}">${getMark(el.score)}</span></p>
                   <p>Lector: <b>${el.lector}</b></p>
                </div>
                `)
            })
            resultArr.push('</div>')
        }
        return resultArr.join('')
    }
}

function renderNeededUser(obj) {
    let user
    if(obj.role === 'student')
        user = new Student(obj.name, obj.age, obj.img, obj.courses)
    else if (obj.role === 'lector')
        user = new Lector(obj.name, obj.age, obj.img, obj.courses)
    else if (obj.role === 'admin')
        user = new Admin(obj.name, obj.age, obj.img, obj.courses)
    else
        alert('Wrong user! Everything is broken! You are fired!')
    
    return user.renderUser()
}

function renderPage() {
    let allUsers = []
    serverResponce.users.forEach(function (el) {
        allUsers.push(renderNeededUser(el))
    })

    document.write(`
    <div class="users">
        ${allUsers.join(' ')}
    </div>
    `)
}

renderPage()