class Monopage {
    constructor(file) {
        this.xhr = new XMLHttpRequest()
        this.xhr.open('GET', file, false)
        this.xhr.send()

        this.menu = JSON.parse(this.xhr.response).menu
        this.body = document.querySelector('body')

        this.renderMenu()
        this.renderDataSection(this.getActiveElementArray())

        const menuFields = document.querySelectorAll('.menuHeader li')

        for (let item of menuFields) {
            item.addEventListener('click', () => {
                if(!item.classList.contains('active')) {
                    document.querySelector('.menuHeader .active').classList.remove('active')
                    item.classList.add('active')
                    this.updateDataSection(this.getActiveElementArray())
                }
            })
        }
    }

    renderMenu() {
        this.body.innerHTML = `
        <header>
            <ul class="menuHeader">
                ${this.generateMenuItems(this.menu)}
            </ul>
        </header>
        `
    }
    
    generateMenuItems(data) {
        return data.map( function(el, iter) {
            const addClass = iter ? '' : ` class="active"`
            return `<li ${addClass}>${el.tab}</li>` 
        }).join('\n')
    }
    
    renderDataSection(dataArr) {
        this.body.innerHTML += `
        <section class="mainData">
        </section>
        `
        this.updateDataSection(dataArr)
    }
    
    updateDataSection(dataArr) {
        const data = document.querySelector('.mainData')
        data.innerHTML = `
        <div class="dataImg"><img src="icons/${dataArr.icon.toLowerCase()}.svg" alt="Some data about ${dataArr.icon}" width="100px" height="100px">
        </div>
        <section class="dataInfo">
            <h3 class="sectionHeader">${dataArr.title}</h3>
            <p class="sectionText">${dataArr.description}"
            </p>
        </section>
        `
    }
    
    getActiveSection() {
        return document.querySelector('.menuHeader li.active')
    }
    
    getActiveElementArray() {
        const search = this.getActiveSection().innerHTML
        return this.menu.filter( elem => elem.tab === search)[0]
    }
}

const page = new Monopage('data/monoPage.json')