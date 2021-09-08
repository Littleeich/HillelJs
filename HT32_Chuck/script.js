const CHUCK_URL = 'https://api.chucknorris.io/jokes'

class JokesPage {
    form = document.querySelector('#formJoke')
    jokeContainer = document.querySelector('#jokeContainer')
    categoriesList = document.querySelector('#categoriesList')
    jokeCategories = document.querySelectorAll('input[name="jokeType"]')
    searchJoke = document.querySelector('#searchJoke')
    jokesFav = document.querySelector('.joke__favourites')

    constructor(URL) {
        this.URL = URL
        this.form.addEventListener('submit', e=> {
            e.preventDefault()
            let type = this.form.querySelector(`input[name="jokeType"]:checked`).value

            if(type === 'random') {
                this.getJoke(`${this.URL}/random`)
            } else if(type === 'categories') {
                let cat = this.categoriesList.querySelector(`input[name="categoryList"]:checked`).value
                this.getJoke(`${this.URL}/random?category=${cat}`)
            } else if(type === 'search') {
                this.getJoke(`${this.URL}/search?query=${searchJoke.value}`)
            }
        })

        this.jokeCategories.forEach( input => {
            input.addEventListener('change', () => {
                input.id === 'categoriesCategory' ? this.categoriesList.classList.add('show') : this.categoriesList.classList.remove('show')
                if (input.id === 'searchCategory') {
                    this.searchJoke.classList.add('show')
                 } else {
                    this.searchJoke.classList.remove('show')
                    this.searchJoke.value = ''
                 } 
        
                let checkedCategory = this.categoriesList.querySelector(`input[name="categoryList"]:checked`),
                    checkedCategoryIndex = checkedCategory.dataset.index
        
                    this.categoriesList.querySelectorAll('input').forEach ( input => {
                        input.addEventListener('click', () => {
                            this.categoriesList.querySelectorAll('label').forEach ( label => {
                                label.classList.remove('checked')
                            })
                            let label = input.closest('label')
                            label.classList.add('checked')
                        })
                    })

                    if(checkedCategoryIndex !== 0) {
                        checkedCategory.checked = false
                        checkedCategory.closest('label').classList.remove('checked')
                        let first = this.categoriesList.querySelector(`input[name="categoryList"][data-index="0"]`)
                        first.checked = true
                        first.closest('label').classList.add('checked')
                    }
            })
        })

        this.getCategories()
        this.renderFavJokes()
    }
    
    getCategories = () => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', `${this.URL}/categories`)
        xhr.send()
    
        xhr.addEventListener('readystatechange', () => {
            if(xhr.readyState === 4 && xhr.status === 200) {
                let categories = JSON.parse(xhr.responseText)
                this.renderCatigories(categories)
            }
        })
    }
    
    getJoke = url => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.send()
    
        xhr.addEventListener('readystatechange', () => {
            if(xhr.readyState === 4 && xhr.status === 200) {
                let joke = JSON.parse(xhr.responseText)
                this.jokeContainer.innerHTML = ''
                if(joke.result) {
                    joke.result.length ? joke.result.forEach( jokeEl => this.renderJoke(jokeEl, true)) : this.jokeContainer.innerHTML = ''
                } else {
                    this.renderJoke(joke)
                }
            }
        })
    }
    
    renderJoke = (jokeData, multiply = false, isFav = false) => {
        let jokeBlock = document.createElement('div')
        jokeBlock.classList.add('joke__block')
        jokeBlock.innerHTML = `
            <img src="${jokeData.icon_url}" alt="${jokeData.id} Joke" width="30" height="30" loading="lazy">
            <p>ID: <a href="${jokeData.url}" target="_blank" class="joke__block--id">${jokeData.id}</a></p>
            <p class="joke__block--text">${jokeData.value}</p>
            <div class="joke__block--footer">
            <p class="joke__block--date">Last update: ${this.getDateDifference(jokeData.updated_at)} hours ago</p>
            ${jokeData.categories && jokeData.categories.length  ? `<p class="joke__block--category">${jokeData.categories[0]}</p>` : ''}
            </div>
        `
        const favSuffix = isFav ? 'Fav' : ''
        let jokeFavLabel = document.createElement('label')
        jokeFavLabel.htmlFor =  `joke${favSuffix}${jokeData.id}`
        jokeFavLabel.innerHTML = `❤`
         
        let jokeFavCheckbox = document.createElement('input')
        jokeFavCheckbox.type = "checkbox"
        jokeFavCheckbox.id = `joke${favSuffix}${jokeData.id}`

        let localJokes = this.getLocalJokes()
        let jokeExists = localJokes.filter( localJoke => localJoke.id === jokeData.id)

        if(isFav || jokeExists.length) {
            jokeFavCheckbox.checked = 'true'
            jokeFavLabel.classList.add('checked')
        }

        jokeFavCheckbox.addEventListener('click', () => {
            localJokes = this.getLocalJokes()
            jokeExists = localJokes.filter( localJoke => localJoke.id === jokeData.id)

            if(isFav || jokeExists.length) {
                this.removeJokeFromStorage(localJokes, jokeData)
                let unFav = document.querySelector(`input[id="joke${jokeData.id}"]`)
                if(unFav) {
                    unFav.checked = false
                    unFav.closest('label').classList.remove('checked')
                }
                jokeFavLabel.classList.remove('checked')
            } else {
                localJokes.push(jokeData)
                this.setLocalJokes(localJokes)
                jokeFavLabel.classList.add('checked')
            }
            this.renderFavJokes()
        })
        jokeFavLabel.append(jokeFavCheckbox)
        jokeBlock.prepend(jokeFavLabel)

        let container = isFav ?  this.jokesFav : this.jokeContainer

        if(multiply) {
            container.append(jokeBlock)
        }
        else { 
            container.replaceChildren('')
            container.append(jokeBlock)
        }
    }
    
    renderCatigories = data => {
        let renderLI = data.map( (cat, index) => {
            return `
            <li>
                <label for="categoryList${cat}" class="${!index ? 'checked' : ''}">
                ${cat}
                    <input type="radio" value="${cat}" name="categoryList" id="categoryList${cat}" ${!index ? 'checked' : ''} data-index="${index}">
                </label>
            </li>
            `
        }).join('')
        this.categoriesList.innerHTML = renderLI
    }

    getLocalJokes = () => {
        let favJokes = localStorage.getItem('favJokes')
        return favJokes ? JSON.parse(favJokes) : new Array()
    }

    setLocalJokes = arr => {
        localStorage.setItem('favJokes', JSON.stringify(arr))
    }

    renderFavJokes = () => {
        this.jokesFav.innerHTML = 'Favourites'
        let localJokes = this.getLocalJokes()
        localJokes.forEach( joke => this.renderJoke(joke, true, true))
    }

    removeJokeFromStorage = (localJokes, jokeData) => {
        let indexFavJoke = localJokes.findIndex(localJoke => localJoke.id === jokeData.id)
        localJokes.splice(indexFavJoke, 1)
        this.setLocalJokes(localJokes)
    }

    getDateDifference(jokeDate) {
        let jokeTime = new Date(jokeDate)
        let nowTime = Date.now()
        return parseInt((nowTime - jokeTime) / 1000 / 60 / 60)
    }
}

let chuckPage = new JokesPage(CHUCK_URL)